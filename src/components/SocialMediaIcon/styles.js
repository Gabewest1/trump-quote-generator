import styled from "styled-components"
import { blue } from "../../theme/colors"

export const Icon = styled.img`
    float: right;
    width: 50px;
    color: ${blue};
    background: ${blue};
    margin-left: 7px;
    position: relative;

    &:active {
        top: 3px;
    }

    @media (max-width: 480px) {
        width: 35px;
    }
`
export const Button = styled.button`
    background: ${blue};
    display: flex;
    align-items: center;
    color: white;
    font-size: 24px;
    font-weight: bold;
    box-shadow: 0 3px 0 #1a5c87;
    outline: none;
    border: none;

    @media (max-width: 480px) {
        font-size: 14px;
    }
`