import React from 'react'
import loadScript from 'load-script'
import PropTypes from 'prop-types'

class Context extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            script: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
            loaded: false,
        }
        this.onLoad = this.onLoad.bind(this)
    }

    componentDidMount() {
        const { script } = this.props
        if (!script) {
            loadScript(this.state.script, this.onLoad)
        } else {
            loadScript(script, this.onLoad)
        }
    }

    onLoad() {
        this.setState({
            loaded: true,
        })
    }

    render() {
        if (!this.state.loaded) {
            return <></>
        }

        const { children } = this.props
        const childrenComponent = children === undefined ? <></> : React.Children.only(children)
        return (
            <>
                { childrenComponent}
            </>
        )
    }
}

Context.propTypes = {
    script: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Context;
