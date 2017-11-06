import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import styled from "styled-components"
import { blue, red, white } from "../../theme/colors"
import { Textfit } from "react-textfit"

import Header from "../../components/Header"
import Quote from "../../components/Quote"
import TintedBackground from "../../components/Common/TintedBackground"
import SocialMediaIcon from "../../components/SocialMediaIcon"
import FetchQuoteButton from "../../components/Button/FetchQuote"

const Section = styled.h1`
    align-items: center;
    box-sizing: border-box;
    color: ${ white };
    display: flex;
    font-family: Playfair;
    font-size: 36px;
    font-style: italic;
    font-style: underline;
    height: 80px;
    justify-content: center;
    text-align: center;
    white-space: no-wrap;
    width: 100%;

    @media (max-width: 900px) {
        font-size: 30px;
    }
    @media (max-width: 750px) {
        font-size: 24px;
    }
    @media (max-width: 621px) {
        font-size: 20px;
    }
`

const color = "rgba(0, 0, 0, .8)"
const Container = styled.div`
    background: 
        linear-gradient(to top, ${ color }, ${ color }),
        url(${({ src }) => src}) center center no-repeat
    
    background-size: 100%;;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;;
    height: ${() => window.innerHeight}px;    
    margin: 0 auto;

    @media (max-width: 768px) {
        background-size: 150%;
    }
    @media (max-width: 420px) {
        background-size: 200%;
    }
`
const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    height: 400px;
`

const _Quote = styled(Quote)`
    max-width: 768px;
    // position: absolute;
    z-index: 1;
`
const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-bottom: 50px;
    
    > * {
        font-size: 20px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`

class App extends React.Component {
    render() {
        const administrationMembersImageSources = {
            "Donald J. Trump": "donald-trump",
            "Jeff Sessions": "jeff-sessions",
            "Betsy DeVos": "betsy-devos",
            "Ben Carson": "ben-carson",
            "Scott Pruitt": "scott-pruitt",
            "Rick Perry": "rick-perry",
            "Sean Spicer": "sean-spicer"
        }

        let { author, position, text } = this.props.quote

        let imgSrc = administrationMembersImageSources[author] + "1.png"

        return (
            <Container src={ imgSrc }>
                <Section mode="single" style={{ gridArea: "header" }}>
                    The Nations Brightest Minds
                </Section>
                <Body>
                    <_Quote />
                </Body>
                <Buttons>
                    <FetchQuoteButton>Next Idiot's Thought</FetchQuoteButton>
                    <SocialMediaIcon src="Twitter.svg" />
                </Buttons>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {quote: state.currentQuote}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
