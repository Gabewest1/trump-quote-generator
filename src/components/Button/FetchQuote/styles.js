import styled from "styled-components"
import { blue } from "../../../theme/colors"

export const Button = styled.button`
    color: white;
    padding: .4em;
    background: transparent;
    box-shadow: 0 3px 0 #fff;
    outline: none;
    position: relative;
    border: solid thin white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    text-align: center;

    &:active {
        top: 3px;
        box-shadow: none;
    }

    @media (max-width: 480px) {
        padding: 5px;
        font-size: 14px;
        height: 35px;
    }
`
