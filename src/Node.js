import React from 'react'
import { MathJaxContext } from './MathJaxContext'

class Node extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MathJaxContext.Consumer>
                {context => (
                    console.log(context)
                )}
            </MathJaxContext.Consumer>
        )
    }
}

export default Node