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

const Title = styled.h1`
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
    z-index: 1;

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
    background-image: url(${({ src }) => src});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;;
    height: ${() => window.innerHeight}px;    
    margin: 0 auto;
    transition: background-image .5s ease-in-out;
    position: relative;

    @media (max-width: 768px) {
        font-size: 16px;
        background-size: 150%;
        justify-content: center;
    }
    @media (max-width: 420px) {
        font-size: 12px;
        background-size: 200%;
    }
`
const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    position: relative;
    height: 400px;
    max-width: 768px;
    width: 70%;
`

const _Quote = styled(Quote)`
    z-index: 1;
    width: 100%;
`
const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px 0px;
    width: 100%;

    @media (max-width: 480px) {
        flex-direction: column;

        > * {
            margin-bottom: 15px;
        }
    }
`

const administrationMembersImageSources = {
    "Donald J. Trump": "donald-trump",
    "Jeff Sessions": "jeff-sessions",
    "Betsy DeVos": "betsy-devos",
    "Ben Carson": "ben-carson",
    "Scott Pruitt": "scott-pruitt",
    "Rick Perry": "rick-perry",
    "Sean Spicer": "sean-spicer"
}

class QuoteGenerator extends React.Component {
    constructor() {
        super()

        this.state = {
            numPictures: 2,
            offset: 1,
            counter: 0,
        }
    }
    render() {
        const { numPictures, offset, counter } = this.state
        const { author, position, text } = this.props.quote

        const index = (counter % numPictures) + offset
        const imgSrc = administrationMembersImageSources[author] + index + ".png"

        return (
            <Container src={ imgSrc }>
                <TintedBackground style={{ zIndex: 0 }}/>
                <Title mode="single" style={{ gridArea: "header" }}>
                    The Nations Brightest Minds
                </Title>
                <Body>
                    <_Quote />
                    <Buttons>
                        <FetchQuoteButton onClick={ this.onClick }>Next Idiot's Thought</FetchQuoteButton>
                        <SocialMediaIcon src="Twitter.svg" />
                    </Buttons>
                </Body>
            </Container>
        )
    }
    onClick = () => {
        this.setState({ counter: this.state.counter + 1 })   
    }
}

function mapStateToProps(state) {
    return {quote: state.currentQuote}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteGenerator)
