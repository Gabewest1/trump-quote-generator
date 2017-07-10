import React from "react"

import { HeaderContainer, Title } from "./styles"

export default class Header extends React.Component {
    render() {
        return (
            <HeaderContainer mode="single">
                <Title>America's Leaders</Title>
            </HeaderContainer>
        )
    }
}