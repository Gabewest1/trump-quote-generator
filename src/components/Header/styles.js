import styled from "styled-components"
import { Textfit } from "react-textfit"
import { red, white } from "../../theme/colors"

export let HeaderContainer = styled(Textfit)`
    background-color: ${red};
    text-align: center;
`

export let Title = styled.h1`
    padding: 1em;
    color: ${white};
    margin: 0;
`