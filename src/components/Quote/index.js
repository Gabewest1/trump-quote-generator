import React from "react"
import { connect } from "react-redux"

import { ImageQuoteContainer, Image, Quote as QuoteText, Container, QuoteContainer, WhiteStrip } from "./styles"

class Quote extends React.Component {
    render() {
        
        return (
            <Container>
                <ImageQuoteContainer>
                    <QuoteContainer>
                        <QuoteText>
                            {this.props.quote.text}
                        </QuoteText>
                    </QuoteContainer>
                    <Image src="ben-carson.png" alt="silly guy"/>
                </ImageQuoteContainer>
            </Container>
        )
    }
}

export default connect((state) => ({quote: state.currentQuote}), null)(Quote)