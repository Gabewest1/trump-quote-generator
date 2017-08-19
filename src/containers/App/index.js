import React from "react"
import styled from "styled-components"
import { blue, red, white } from "../../theme/colors"
import { Textfit } from "react-textfit"

import Header from "../../components/Header"
import Quote from "../../components/Quote"
import TintedBackground from "../../components/Common/TintedBackground"
import SocialMediaIcon from "../../components/SocialMediaIcon"
import FetchQuoteButton from "../../components/Button/FetchQuote"

const Section = styled(Textfit)`
    background: ${blue};
    color: ${white};
    height: 100px;
    padding: 0 .5em;
    display: flex;
    align-items: center;
    font-style: italic;
    box-sizing: border-box;
`

const Container = styled.div`
    background: #ce2029;
    height: ${() => window.innerHeight}px;
    display: grid;
    grid-template-rows: 1fr auto 1fr 1fr;
    // grid-template-columns: auto 80% auto;
    grid-gap: 50px;
`

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
`

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <Section>
                    A Few Words From Our Leaders 
                </Section>
                <Quote />
                <Buttons>
                    <FetchQuoteButton>Next Idiot's Thought</FetchQuoteButton>
                    <SocialMediaIcon src="Twitter.svg" />
                </Buttons>
            </Container>
        )
    }
}