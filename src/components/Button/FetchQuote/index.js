import React from "react"
import { Button } from "./styles"

class FetchQuoteButton extends React.Component {
    render() {
        return (
            <Button data-testId="next-quote" { ...this.props }>
                { this.props.children }
            </Button>
        )
    }  
}

export default FetchQuoteButton
