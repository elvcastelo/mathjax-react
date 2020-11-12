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
        const value = this.context;
        value.MathJax.typesetClear([this.contentRef.current]);
    }

    typeset(forceUpdate) {
        const value = this.context;
        this.checkForMathJax();

        if (forceUpdate) {
            this.typesetClear();
        }

        value.MathJax.typeset();
    }

    formatContent(content) {
        const contentSplits = content.split('\n');
        return (
            <p ref={this.contentRef}>
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
            <div className="mathjax-component">
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
