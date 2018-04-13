import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Container, Text, Name, Position, SignatureContainer } from "./styles"

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
            i < str.length 
                ? /\w/.test(str[i]) 
                ? i : indexOfNextLetter(str, i+1)
                    : -1

        if(/^\[.*\]:/.test(quote)) {
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
        const { author, position, text } = this.props.quote

        return (
            <Container { ...this.props }>
                <Text data-testId="quote">
                    { this.formatQuote(text) }
                </Text>
                <SignatureContainer>
                    <Name>&mdash; {author}</Name>
                    <Position>{position}</Position>                            
                </SignatureContainer>
            </Container>
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