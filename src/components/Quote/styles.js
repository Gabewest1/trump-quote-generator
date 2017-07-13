import styled from "styled-components"
import { Textfit } from "react-textfit"
import { red } from "../../theme/colors"

export let ImageQuoteContainer = styled.div`
    background: black;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`
export let QuoteContainer = styled.div`
    display: flex;
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
`
export let Quote = styled.blockquote`
    color: white;
    font-size: 24px;
    width: 90%;
    margin: 0 auto;
    font-style: italic;
    line-height: 1.5;
    white-space: pre-line;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 440px) {
        font-size: 12px;
        line-height: 1.3;
    }
`
