import React, { useEffect } from 'react';

import 'prismjs/themes/prism.css';
import '../styles/debouncing.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Shadowing() {
  useEffect(() => {
   window.scrollTo(0,0);
  }, []);

  return (
    <div className="debounce-container">
      <h1>Variable Shadowing in JavaScript</h1>
      <p>
        Variable shadowing occurs when a variable declared within a certain scope shares the same name as a variable in an outer scope, effectively "shadowing" it.
      </p>

      <h2>Example Code:</h2>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`// Shadowing Example
var x = 50;

function myFunc(){
    var x = 20; // This 'x' shadows the global variable 'x'
    console.log(x); // Output: 20
}

myFunc();
console.log(x); // Output: 50`}
        </SyntaxHighlighter>
      

      <h2>Explanation:</h2>
      <ul>
        <li>
          In the example above, there is a global variable <SyntaxHighlighter language="javascript" style={atomDark}>x</SyntaxHighlighter> initialized to <SyntaxHighlighter language="javascript" style={atomDark}>50</SyntaxHighlighter>.
        </li>
        <li>
          Inside the function myFunc(), a local variable <SyntaxHighlighter language="javascript" style={atomDark}>x</SyntaxHighlighter> is declared with a value of <SyntaxHighlighter language="javascript" style={atomDark}>20</SyntaxHighlighter>, shadowing the global <SyntaxHighlighter language="javascript" style={atomDark}>x</SyntaxHighlighter>.
        </li>
        <li>
          When console.log(x) myFunc(), it logs the local <SyntaxHighlighter language="javascript" style={atomDark}>x</SyntaxHighlighter> value of <SyntaxHighlighter language="javascript" style={atomDark}>20</SyntaxHighlighter>, not the global one.
        </li>
      </ul>

      <h2>Illegal Shadowing:</h2>
      <p>
        JavaScript disallows certain types of shadowing when the variable declarations use incompatible keywords within the same scope. This results in a <SyntaxHighlighter language="javascript" style={atomDark}>SyntaxError</SyntaxHighlighter>.
      </p>

      <h3>Example 1: Illegal Shadowing with <SyntaxHighlighter language="javascript" style={atomDark}>var</SyntaxHighlighter> and <SyntaxHighlighter language="javascript" style={atomDark}>let</SyntaxHighlighter></h3>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`// var x = 50;
// let x = 20; // SyntaxError: Identifier 'x' has already been declared`}
        </SyntaxHighlighter>
      
      <p>This results in a <SyntaxHighlighter language="javascript" style={atomDark}>SyntaxError</SyntaxHighlighter> because <SyntaxHighlighter language="javascript" style={atomDark}>x</SyntaxHighlighter> is being redeclared with <SyntaxHighlighter language="javascript" style={atomDark}>let</SyntaxHighlighter> in the same scope where it was previously declared with <SyntaxHighlighter language="javascript" style={atomDark}>var</SyntaxHighlighter>.</p>

      <h3>Example 2: Legal Shadowing with <SyntaxHighlighter language="javascript" style={atomDark}>var</SyntaxHighlighter> and <SyntaxHighlighter language="javascript" style={atomDark}>let</SyntaxHighlighter></h3>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`var y = 40;

function myFunc() {
    let y = 50; // Shadows the outer 'y' only within the function scope
    console.log(y); // Output: 50
}

myFunc();
console.log(y); // Output: 40`}
        </SyntaxHighlighter>
      
      <p>
        In this case, <SyntaxHighlighter language="javascript" style={atomDark}>y</SyntaxHighlighter> is declared using <SyntaxHighlighter language="javascript" style={atomDark}>var</SyntaxHighlighter> globally and <SyntaxHighlighter language="javascript" style={atomDark}>let</SyntaxHighlighter> inside the function. This is valid because <SyntaxHighlighter language="javascript" style={atomDark}>let</SyntaxHighlighter> creates a block-scoped variable that doesn't interfere with the outer <SyntaxHighlighter language="javascript" style={atomDark}>y</SyntaxHighlighter>.
      </p>

      <h2>Key Points:</h2>
      <ul>
        <li>
          Shadowing is allowed, but care must be taken to avoid illegal redeclarations (e.g., mixing <SyntaxHighlighter language="javascript" style={atomDark}>var</SyntaxHighlighter> and <SyntaxHighlighter language="javascript" style={atomDark}>let</SyntaxHighlighter> in the same scope).
        </li>
        <li>
          Function and block-level scoping play a crucial role in how shadowing behaves.
        </li>
        <li>
          Illegal shadowing typically results in a <SyntaxHighlighter language="javascript" style={atomDark}>SyntaxError</SyntaxHighlighter>, especially when using <SyntaxHighlighter language="javascript" style={atomDark}>let</SyntaxHighlighter> and <SyntaxHighlighter language="javascript" style={atomDark}>const</SyntaxHighlighter>.
        </li>
      </ul>
    </div>
  );
}

export default Shadowing;
