import styled from "styled-components"
import { white } from "../../theme/colors"

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-family: oswald;
    overflow: hidden;
    // background: rgba(0, 0, 0, .8);
    color: white;
    border: solid thin ${ white };
    
    @media (max-width: 758px) {
        flex-direction: column;
    }
`
export const SignatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 1.3em;
    padding-bottom: 1.3em;
    box-sizing: border-box;
`
export const Signature = styled.cite`
    text-align: right;
    font-size: ${({fontSize}) => fontSize ? fontSize : "inherit"};

    &:first-child {
        margin-bottom: .5em;
    }
`
export const Position = styled(Signature)`
    font-size: .8em;
`
export const Name = styled(Signature)`
`

export const Text = styled.blockquote`
    font-size: 24px;
    line-height: 1.6;
    
    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 1.8;
    }

    @media (max-width: 480px) {
        margin: 10px;
        font-size: 12px;
        line-height: 1.3;
    }
`