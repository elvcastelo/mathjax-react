# React MathJax

A React component for MathJax.

## Installing

``` npm install @elvcastelo/mathjax-react --save ```

## Usage Examples

```jsx
import React from 'react';
import MathJax from '@elvcastelo/mathjax-react';

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

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MathJax from '@elvcastelo/mathjax-react';
import './index.css';
import Home from './components/Home';
import Exam from './components/Exam';
import ExamEditor from './components/ExamEditor';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // The MathJax.Node is being used inside Exam and ExamEditor components.
  <MathJax.Context options={{
    inlineMath: [['$', '$']],
    displayMath: [['**', '**']]
  }}
  >
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path="/poscomp/exam/:year" component={Exam} />
          <Route path="/poscomp/editor" component={ExamEditor} />
          <Route path="/poscomp">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  </MathJax.Context>,
  document.getElementById('root'),
);

serviceWorker.unregister();
```

## MathJax.Context Props

### `options` - Object
- Sets the configuration for tex input. You can find more information about it in the [official documentation](https://docs.mathjax.org/en/latest/options/input/tex.html). `baseURL` and `digits` are not supported.
- Default: 
```javascript
window.MathJax = {
  tex: {
    packages: ['base'],        // extensions to use
    inlineMath: [              // start/end delimiter pairs for in-line math
      ['\\(', '\\)']
    ],
    displayMath: [             // start/end delimiter pairs for display math
      ['$$', '$$'],
      ['\\[', '\\]']
    ],
    processEscapes: true,      // use \$ to produce a literal dollar sign
    processEnvironments: true, // process \begin{xxx}...\end{xxx} outside math mode
    processRefs: true,         // process \ref{...} outside of math mode
                               // pattern for recognizing numbers
    tags: 'none',              // or 'ams' or 'all'
    tagSide: 'right',          // side for \tag macros
    tagIndent: '0.8em',        // amount to indent tags
    useLabelIds: true,         // use label name rather than tag for ids
    multlineWidth: '85%',      // width of multline environment
    maxMacros: 1000,           // maximum number of macro substitutions per expression
    maxBuffer: 5 * 1024,       // maximum size for the internal TeX string (5K)
    formatError:               // function called when TeX syntax errors occur
        (jax, err) => jax.formatError(err)
  }
};
```

### `script` - String
- Sets the script URL to be loaded (MathJax 3)
- Default: `https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js`

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

