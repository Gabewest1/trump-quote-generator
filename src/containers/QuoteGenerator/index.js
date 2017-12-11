import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import styled from "styled-components"
import { blue, red, white } from "../../theme/colors"
import { Textfit } from "react-textfit"
import { actions as quoteActions } from "../../actions/quotes"

import Header from "../../components/Header"
import Quote from "../../components/Quote"
import TintedBackground from "../../components/Common/TintedBackground"
import SocialMediaIcon from "../../components/SocialMediaIcon"
import FetchQuoteButton from "../../components/Button/FetchQuote"

const Container = styled.section`
    display: relative;
`
const Title = styled.h1`
    box-sizing: border-box;
    color: ${ white };
    display: flex;
    flex-grow: 1;
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

    @media (max-width: 480px) {
        font-size: 26px;
    }
`
const FadeView = styled.div`
    background: black;
    transition: opacity ${({ animationDuration }) => animationDuration }ms ease-in-out;
    opacity: ${({ fadeOut }) => fadeOut ? 1 : 0 };
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
`
const color = "rgba(0, 0, 0, .8)"

const AnimatedBackground = styled.div`
    background-image: url(${({ src }) => src});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;;
    height: ${() => window.innerHeight}px;    
    margin: 0 auto;
    position: relative;

    @media (max-width: 768px) {
        font-size: 16px;
        justify-content: center;
    }
    @media (max-width: 420px) {
        font-size: 12px;
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
    width: 90%;
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
            height: 40px;
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
            animationDuration: 1000,
            numPictures: 2,
            offset: 1,
            counter: 0,
            fadeOut: false
        }
    }
    componentShouldUpdate(nextProps, nextState) {
        return nextState.counter === this.state.counter
    }
    render() {
        const { animationDuration, fadeOut, numPictures, offset, counter } = this.state
        const { author, position, text } = this.props.quote

        const index = (counter % numPictures) + offset
        const imgSrc = administrationMembersImageSources[author] + index + ".png"

        return (
            <Container>
                <AnimatedBackground src={ imgSrc }>

                    <FadeView 
                        animationDuration={ animationDuration }
                        fadeOut={ fadeOut }/>

                    <TintedBackground style={{ }}/>

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

                </AnimatedBackground>
            </Container>
        )
    }
    onClick = () => {
        //The timers are used to cancel and restart the animation if the onClick is called
        //before a previous invocation finishes.
        if (this.timer) {
            this.timer = clearTimeout(this.timer)
        }

        this.setState({ fadeOut: true })

        this.timer = setTimeout(() => {
            this.setState({ counter: this.state.counter + 1 })
            this.props.fetchRandomQuote()

            setTimeout(() => {
                this.setState({ fadeOut: false })
            }, 100)
            
        }, this.state.animationDuration)
    }
}

function mapStateToProps(state) {
    return { quote: state.currentQuote }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...quoteActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteGenerator)
