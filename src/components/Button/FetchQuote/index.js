import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { Button } from "./styles"
import { actions as quoteActions } from "../../../actions/quotes"

class FetchQuoteButton extends React.Component {
    render() {
        let { children, fetchRandomQuote } = this.props
        return (
            <Button { ...this.props } onClick={() => fetchRandomQuote()}>
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