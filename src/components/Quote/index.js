import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import TintedBackground from "../Common/TintedBackground"
import { ImageQuoteContainer, Image, Quote as QuoteText, Container, QuoteContainer, WhiteStrip, Signature } from "./styles"
import { actions as quoteActions } from "../../actions/quotes"

class Quote extends React.Component {
    componentWillMount() {
        this.props.fetchRandomQuote()
    }
    formatQuote(quote) {
        //Helper functions to quotate a string and find the index of the next 
        //available letter given a string and a starting index
        const quotate = x => "\"" + x + "\""
        const indexOfNextLetter = (str, i) => 
            i < str.length ? /\w/.test(str[i]) ? i : indexOfNextLetter(str, i+1)
                           : -1

        if(/^\[.*\]:/.test(quote)) {
            let index = quote.indexOf(":")
            let newLineIndex = quote.indexOf("\n")
            let formattedQuote = quote.split("\n")
                              .filter((chunk) => chunk !== "")
                              .map(chunk => {
                                  console.log("ENTER:",chunk)
                                  if(!chunk.startsWith("["))
                                    return quotate(chunk)

                                  let bracket = chunk.indexOf("[")
                                  let colon = chunk.indexOf(":")
                                  let author = chunk.substring(bracket, colon+1)

                                  let quoteStart = indexOfNextLetter(chunk.substring(colon+1), colon+2)
                                  let quote = chunk.substring(quoteStart)
                                  console.log("RESULT:", author, quote)
                                  console.log("QUTOESTART:", quoteStart)
                                  return author + " " + quotate(quote)
                              })
                              .reduce((formattedQuote, chunk) => formattedQuote += chunk + "\n\n", "")
                              .trim()

            return formattedQuote
        }

        return quotate(quote)
    }
    render() {

        let { author, position, text } = this.props.quote

        return (
            <ImageQuoteContainer>
                <Image src="ben-carson.png" alt="silly guy"/>
                <TintedBackground />
                <QuoteContainer>
                    <QuoteText>
                        {this.formatQuote(text)}
                        <br />
                        <Signature>&mdash; {author}</Signature>
                        <br />
                        <Signature fontSize=".8em">{position}</Signature>                            
                    </QuoteText>
                </QuoteContainer>
            </ImageQuoteContainer>
        )
    }
}

function mapStateToProps(state) {
    return {quote: state.currentQuote}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({...quoteActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Quote)