import styled from "styled-components"
import { blue } from "../../../theme/colors"

export const Button = styled.button`
    color: white;
    padding: 20px 30px;
    background: ${blue};
    box-shadow: 0 3px 0 #1a5c87;
    outline: none;
    position: relative;
    border: none;

    &:active {
        top: 3px;
        box-shadow: none;
    }

    @media (max-width: 480px) {
        padding: 5px;
    }
`