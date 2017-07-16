import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { Icon } from "./styles.js"
import { actions as socialMediaActions } from "../../actions/socialMedia"

class SocialMediaIcon extends React.Component {
    render() {
        let { src, postQuoteSocialMedia, quote } = this.props
        let socialMediaPlatform = src.toLowerCase().substring(0, src.indexOf("."))

        return (
            <Icon src={src} onClick={() => { 
                console.log("IN COMPONENT:", socialMediaPlatform, quote)
                postQuoteSocialMedia(socialMediaPlatform, quote)} }
            />
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