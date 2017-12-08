import styled from "styled-components"
import { blue } from "../../../theme/colors"

export const Button = styled.button`
    color: white;
    padding: 1em 1.5em;
    background: transparent;
    box-shadow: 0 3px 0 #fff;
    outline: none;
    position: relative;
    border: solid thin white;

    &:active {
        top: 3px;
        box-shadow: none;
    }

    @media (max-width: 480px) {
        padding: 5px;
    }
`