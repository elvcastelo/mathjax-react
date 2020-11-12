# React MathJax

A React component for MathJax.

## Usage

```jsx
import React from 'react';
import MathJax from 'react-mathjax';

function DummyComponent() {
  return (
    <MathJax.Context options={
      {
        inlineMath: [['$', '$']]
      }
    }>
      <MathJax.Node content={"$$ \\int_0^1 x^2 dx $$"}>
    </MathJax.Context>
  );
}

export default DummyComponent;

```

## MathJax.Context Props

### `inlineMath` - Array
- Sets the symbol for inline math display
- Default: `\( \)`

### `script` - String
- Sets the script URL to be loaded (MathJax 3)
- Default: `https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.j`

### `loading` - React.Component
- Sets the component that will be rendered while loading MathJax

## MathJax.Node Props

### `content` - String
- Sets the tex content that will be rendered by MathJax.

### `formatContent` - Function
- Sets a function to format the content before being rendered.
- Default: 
```jsx
// Change \n in the string to <br />
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
```

