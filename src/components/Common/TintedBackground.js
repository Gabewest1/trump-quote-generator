import styled from "styled-components"

export default styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: ${({bg}) => bg ? bg : "black"};
    opacity: .7;
`