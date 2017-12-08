import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { Button } from "./styles"
import { actions as quoteActions } from "../../../actions/quotes"

class FetchQuoteButton extends React.Component {
    onClick = () => {
        this.props.onClick()
        this.props.fetchRandomQuote()
    }
    render() {
        let { children, fetchRandomQuote } = this.props

        return (
            <Button { ...this.props } onClick={ this.onClick }>
                { children }
            </Button>
        )
    }  
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({...quoteActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchQuoteButton)