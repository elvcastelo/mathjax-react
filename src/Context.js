import React from 'react'
import loadScript from 'load-script'

class Context extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            script: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
        }
        this.onLoad = this.onLoad.bind(this)
    }

    componentDidMount() {
        loadScript(this.state.script, this.onLoad)
    }
    
    onLoad() {
        // Configurações
    }

    render() {
        return(
            <div>
            </div>
        )
    }
}

export default Context