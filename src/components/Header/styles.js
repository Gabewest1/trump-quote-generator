import styled from "styled-components"
import { Textfit } from "react-textfit"
import { red, white, blue } from "../../theme/colors"

export let HeaderContainer = styled(Textfit)`
    background-color: ${red};
    text-align: center;
`

export let Title = styled.h1`
    color: ${ blue };
    background: ${ white };
    margin: 0;
`