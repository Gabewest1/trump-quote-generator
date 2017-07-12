import styled from "styled-components"
import { Textfit } from "react-textfit"
import { red, blue, white } from "../../theme/colors"

export let ImageQuoteContainer = styled.div`
    background: ${red};
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    // padding: 30px;
`

export let QuoteContainer = styled.div`
    display: flex;
    width: 50%;
    position: absolute;
    right: 0;
    justify-content: center;
`

export let Container = styled.div`
    background-color: ${red};
    display: flex;
    justify-content: center;
`

export let Image = styled.img`
    max-width: 100%;
    height: 500px;
`
export let Quote = styled.h1`
    color: white;
    font-size: inherit;
    width: 90%;
    margin: 0 auto;
    font-style: italic;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 440px) {
        font-size: 12px;
        line-height: 1.3;
        // width: 40%;
    }
`
