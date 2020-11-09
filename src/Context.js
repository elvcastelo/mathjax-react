import React from 'react'
import loadScript from 'load-script'
import { MathJaxContext } from './MathJaxContext'

class Context extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            script: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js",
            mathjax: undefined,
            loaded: false
        }
        this.onLoad = this.onLoad.bind(this)
    }

    componentDidMount() {
        if (!this.props.script) {
            loadScript(this.state.script, this.onLoad)
        } else {
            loadScript(this.props.script, this.onLoad)
        }
    }

    onLoad() {
        this.state.mathjax = typeof MathJax === undefined ? undefined : MathJax
    }

    render() {

        return (
            <MathJaxContext.Provider value={this.state}>
                {React.Children.only(this.props.children)}
            </MathJaxContext.Provider>
        )
    }
}

export default Context