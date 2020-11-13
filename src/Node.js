import React from 'react';
import PropTypes from 'prop-types';
import { MathJaxContext } from './MathJaxContext';

class Node extends React.Component {
    constructor(props) {
        super(props);
        this.contentRef = React.createRef();
    }

    componentDidMount() {
        this.typeset();
    }

    componentDidUpdate(prevProps) {
        const update = prevProps.content !== this.props.content;
        this.typeset(update);
    }

    componentWillUnmount() {
        this.typesetClear();
    }

    checkForMathJax() {
        const value = this.context;
        if (!value.MathJax) { throw Error('Ocorreu um erro ao carregar o MathJax. MathJax não está definido'); }
    }

    typesetClear() {
        const { current } = this.contentRef;
        const value = this.context;
        value.MathJax.typesetClear([current]);
    }

    typeset(forceUpdate) {
        const { current } = this.contentRef;
        const value = this.context;

        this.checkForMathJax();

        if (forceUpdate) {
            this.typesetClear([current]);
        }
        value.MathJax.typesetPromise([current]);
    }

    formatContent(content) {
        const contentSplits = content.split('\n');
        return (
            <p>
                {contentSplits.map((split) => (
                    <>
                        {split}
                        <br />
                    </>
                ))}
            </p>
        );
    }


    render() {
        const { content, formatContent } = this.props;

        let contentComponent;

        if (!formatContent) {
            contentComponent = this.formatContent(content);
        } else {
            contentComponent = formatContent(content);
        }

        return (
            <div className="mathjax-component" ref={this.contentRef}>
                { contentComponent}
            </div>
        );
    }
}

Node.propTypes = {
    content: PropTypes.string,
    formatContent: PropTypes.func
};

Node.contextType = MathJaxContext;

export default Node;
