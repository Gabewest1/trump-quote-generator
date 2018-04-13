import styled from "styled-components"
import { white} from "../../theme/colors"

export const Header = styled.h1`
    box-sizing: border-box;
    color: ${ white };
    display: flex;
    flex-grow: 1;
    font-family: Playfair;
    font-size: 36px;
    font-style: italic;
    font-style: underline;
    height: 80px;
    justify-content: center;
    text-align: center;
    white-space: no-wrap;
    width: 100%;
    z-index: 1;

    @media (max-width: 480px) {
        font-size: 26px;
    }
`