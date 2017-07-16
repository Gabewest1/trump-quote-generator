import styled from "styled-components"

export default styled.div`
    background: ${({color}) => color ? color : "black"};
    width: 1px;
    height: 90%;
    margin: 0 10px;
`