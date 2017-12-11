import styled from "styled-components"
import { blue } from "../../theme/colors"

export const Icon = styled.img`
    float: right;
    width: 27px;
    max-width: 100%;
    max-height: 100%;
    color: ${blue};
    position: relative;
    margin-left: 7px;

    &:active {
        top: 3px;
    }

    @media (max-width: 480px) {
        // width: 25px;
    }
`
