import React from "react"

import { ImageQuoteContainer, Image, Quote as QuoteText, Container } from "./styles"

export default class Quote extends React.Component {
    render() {
        return (
            <Container>
                <ImageQuoteContainer>
                    <QuoteText>
                        <div>"Climate change is a conspiracy, perputrated by the Chinese, in order
                        to slow down investment and job growth in the United States"</div>
                    </QuoteText>
                    <Image src="ben-carson.png" alt="silly guy"/>
                </ImageQuoteContainer>
            </Container>
        )
    }
}