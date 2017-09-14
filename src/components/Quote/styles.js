import styled from "styled-components"
import { Textfit } from "react-textfit"
import { red, blue } from "../../theme/colors"

export let ImageQuoteContainer = styled.div`
    background: white;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    box-shadow: 0 0 7px 2px white;

    @media (max-width: 758px) {
        flex-direction: column;
    }
`
export let QuoteContainer = styled.div`
    display: flex;
    color: white;
    background: ${blue};
    justify-content: center;
    height: 100%;
    width: 100%;
`
export let Signature = styled.span`
    float: right;
    text-align: right;
    font-size: ${({fontSize}) => fontSize ? fontSize : "inherit"};
`
export let ImageContainer = styled.div`
    background: url(${({ src }) => src}) no-repeat;
    background-position: center;
    background-size: contain;
    height: 100%;
    width: 100%;
    flex-grow: 1;
`

export let Quote = styled.blockquote`
    font-size: 24px;
    margin: 0 auto;
    font-style: italic;
    white-space: pre-line;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5em;
    z-index: 1;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 440px) {
        font-size: 12px;
        line-height: 1.3;
    }
`