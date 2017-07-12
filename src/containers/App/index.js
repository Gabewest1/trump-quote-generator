import React from "react"
import styled from "styled-components"
import { blue, white } from "../../theme/colors"
import { Textfit } from "react-textfit"

import Header from "../../components/Header"
import Quote from "../../components/Quote"
import FetchQuoteButton from "../../components/Button/FetchQuote"

const Section = styled(Textfit)`
    background: ${blue};
    color: ${white};
    height: 100px;
    padding: 0 .5em;
    display: flex;
    align-items: center;
    font-style: italic;
`

export default class App extends React.Component {
    render() {
        return (
            <div>
                {/*<Header />
                <Section style={{textAlign: "center"}}>
                    A few words from our leaders: 
                </Section>*/}
                <Quote />
                <FetchQuoteButton>New Quote</FetchQuoteButton>
            </div>
        )
    }
}