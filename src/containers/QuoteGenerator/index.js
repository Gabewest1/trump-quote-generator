import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import styled from "styled-components"
import { actions as quoteActions } from "../../actions/quotes"

import Header from "../../components/Header"
import Quote from "../../components/Quote"
import TintedBackground from "../../components/Common/TintedBackground"
import SocialMediaIcon from "../../components/SocialMediaIcon"
import FetchQuoteButton from "../../components/Button/FetchQuote"

const Container = styled.section`
    display: relative;
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
const QuoteView = styled(Quote)`
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

    render() {
        const { animationDuration, fadeOut, numPictures, offset, counter } = this.state
        const { author } = this.props.quote

        const index = (counter % numPictures) + offset
        const imgSrc = administrationMembersImageSources[author] + index + ".png"

        return (
            <Container>
                <AnimatedBackground src={ imgSrc }>

                    <FadeView 
                        animationDuration={ animationDuration }
                        fadeOut={ fadeOut }/>

                    <TintedBackground style={{ }}/>

                    <Header />

                    <Body>
                        <QuoteView />
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
