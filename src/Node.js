import React from 'react';
import PropTypes from 'prop-types'

class Node extends React.Component {
    typeset() {
        if (!MathJax) { throw Error('Ocorreu um erro ao carregar o MathJax. MathJax não está definido'); }

        MathJax.typeset();
    }

    componentDidMount() {
        this.typeset();
    }

    render() {
        const { content } = this.props;

        return (
            <>
                {content}
            </>
        );
    }
}

Node.propTypes = {
    content: PropTypes.string
}

export default Node;
