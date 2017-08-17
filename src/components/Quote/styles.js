import styled from "styled-components"
import { Textfit } from "react-textfit"
import { red, blue } from "../../theme/colors"

export let ImageQuoteContainer = styled.div`
    background: black;
    position: relative;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
`
export let QuoteContainer = styled.div`
    display: flex;
    color: white;
    background: ${blue};
    height: 100%;
    width: 50%;
    position: absolute;
    right: 0;
    justify-content: center;
`
export let Signature = styled.span`
    float: right;
    text-align: right;
    font-size: ${({fontSize}) => fontSize ? fontSize : "inherit"};
`

export let Image = styled.img`
    max-width: 100%;
    max-height: ${() => window.innerHeight/1.5}px;
    position: relative;
    top: 5px;
`
export let Quote = styled.blockquote`
    font-size: 24px;
    width: 90%;
    margin: 0 auto;
    font-style: italic;
    line-height: 1.5;
    white-space: pre-line;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 440px) {
        font-size: 12px;
        line-height: 1.3;
    }
`
export const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`
export const Container = styled.div`
    margin-top: 30px;
`
export const LeftSide = styled.aside`
    float: left;
`
export const RightSide = styled.aside`
    float: right;
    display: flex;
    align-items: center;
`
export const SocialMediaIcons = styled.div`

`