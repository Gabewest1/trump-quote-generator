import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { Button } from "./styles"

class FetchQuoteButton extends React.Component {
    render() {
        let { children, fetchQuote } = this.props
        return (
            <Button onClick={() => fetchQuote()}>{children}</Button>
        )
    }  
}

function mapStateToProps(state) {
    return null
}

function mapDispatchToProps(dispatch) {
    const fetchQuote = () => ({ type: "GET_RANDOM_QUOTE" })
    return bindActionCreators({fetchQuote}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchQuoteButton)