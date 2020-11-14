import React from 'react';
import loadScript from 'load-script';
import PropTypes from 'prop-types';
import { MathJaxContext } from './MathJaxContext';

class Context extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            script: "",
            MathJax: undefined,
            loaded: false,
        };
        this.onLoad = this.onLoad.bind(this);
    }

    componentDidMount() {
        const value = this.context;
        const { script } = this.props;
        const { options } = this.props;

        if (options) {
            window.MathJax = {
                tex: {
                    ...options
                },
                startup: {
                    typeset: false
                }
            };
        }

        if (!script) {
            loadScript(value.script, this.onLoad);
        } else {
            loadScript(script, this.onLoad);
        }
    }

    onLoad() {
        const value = this.context;
        this.setState({
            script: value.script,
            loaded: true,
            MathJax: window.MathJax === undefined ? undefined : window.MathJax
        });
    }

    render() {
        if (!this.state.loaded) {
            const { loading } = this.props;
            if (!loading) {
                return <></>;
            }
            return loading;
        }

        const { children } = this.props;
        const childrenComponent = children === undefined ? <></> : React.Children.only(children);
        return (
            <MathJaxContext.Provider value={{
                script: this.state.script,
                MathJax: this.state.MathJax
            }}>
                { childrenComponent}
            </MathJaxContext.Provider>
        );
    }
}

Context.propTypes = {
    script: PropTypes.string,
    options: PropTypes.shape({
        inlineMath: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
        packages: PropTypes.arrayOf(PropTypes.string),
        displayMath: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
        processEscapes: PropTypes.bool,
        processEnvironments: PropTypes.bool,
        processRefs: PropTypes.bool,
        tags: PropTypes.string,
        tagSide: PropTypes.string,
        tagIndent: PropTypes.string,
        useLabelIds: PropTypes.bool,
        multlineWidth: PropTypes.string,
        maxMacros: PropTypes.number,
        maxBuffer: PropTypes.number,
        formatError: PropTypes.func
    }),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    loading: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
};

Context.contextType = MathJaxContext;

export default Context;
