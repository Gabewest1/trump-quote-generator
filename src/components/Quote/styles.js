import styled from "styled-components"
import { red, blue, white } from "../../theme/colors"

export let ImageQuoteContainer = styled.div`
    background: ${red};
    position: relative;
    width: 90vmin;
    display: flex;
    align-items: center;
`

export let Container = styled.div`
    background: ${red};
    display: flex;
    justify-content: center;
    padding: 1em;
`

export let Image = styled.img`
    max-width: 100%;
`
export let Quote = styled.h1`
    color: white;
    position: absolute;
    width: 50%;
    right: 0;
    margin: 0;
    font-style: italic;

    @media (max-width: 440px) {
        font-size: 12px;
        line-height: 1.3;
        width: 40%;
    }
`