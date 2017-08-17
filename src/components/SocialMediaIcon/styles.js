import styled from "styled-components"
import { blue } from "../../theme/colors"

export const Icon = styled.img`
    float: right;
    width: 50px;
    color: ${blue};
    background: ${blue};
`
export const Button = styled.button`
    background: ${blue};
    display: flex;
    align-items: center;
    color: white;
    font-size: 24px;
    font-weight: bold;
    padding-right: 0;
`