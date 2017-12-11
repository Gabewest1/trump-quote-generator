import React from "react"
import { connect } from "react-redux"
import { Button } from "./styles"

class FetchQuoteButton extends React.Component {
    render() {
        return (
            <Button { ...this.props }>
                { this.props.children }
            </Button>
        )
    }  
}

export default FetchQuoteButton
