import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { Icon } from "./styles.js"
import { Button } from "../Button/FetchQuote/styles"
import { actions as socialMediaActions } from "../../actions/socialMedia"

class SocialMediaIcon extends React.Component {
    render() {
        let { src, postQuoteSocialMedia, quote } = this.props
        let socialMediaPlatform = src.toLowerCase().substring(0, src.indexOf("."))

        return (
            <Button onClick={() => postQuoteSocialMedia(socialMediaPlatform, quote) }>
                Share Quote
                <Icon src={src} />
            </Button>
        )
    }
}

function mapStateToProps(state) {
    return { quote: state.currentQuote.text }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(socialMediaActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SocialMediaIcon)