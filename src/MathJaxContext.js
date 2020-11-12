import React from 'react';

export const MathJaxContext = React.createContext({
  script: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
  MathJax: undefined
});