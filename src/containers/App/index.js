import React from "react"
import styled from "styled-components"
import { blue, red, white } from "../../theme/colors"
import { Textfit } from "react-textfit"

import Header from "../../components/Header"
import Quote from "../../components/Quote"
import TintedBackground from "../../components/Common/TintedBackground"

const Section = styled(Textfit)`
    background: ${blue};
    color: ${white};
    height: 100px;
    padding: 0 .5em;
    display: flex;
    align-items: center;
    font-style: italic;
`

const Container = styled.div`
    background: url(flag.jpg);
    background-size: cover;
    height: ${() => window.innerHeight}px;
`

export default class App extends React.Component {
    render() {
        return (
            <Container>
                {/* <Header /> */}
                <Section>
                    A few words from our leaders: 
                </Section>
                <div>
                    <Quote />
                </div>
            </Container>
        )
    }
}