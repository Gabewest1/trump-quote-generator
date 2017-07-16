import React from "react"

import FetchQuoteButton from "../Button/FetchQuote"
import Divider from "../Common/Divider"
import SocialMediaIcon from "../SocialMediaIcon"
import { Container, LeftSide, RightSide, SocialMediaIcons } from "./styles"

export default class SocialMedia extends React.Component {
    render() {
        return (
            <Container>
                <LeftSide>
                    <FetchQuoteButton>Next Idiot's Thought</FetchQuoteButton>
                </LeftSide>
                <RightSide>
                    <span>Share Quote On:</span>
                    <Divider />
                    <SocialMediaIcons>
                        <SocialMediaIcon src="Twitter.svg" />
                    </SocialMediaIcons>
                </RightSide>
            </Container>
        )
    }
}