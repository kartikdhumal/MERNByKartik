import React, { useEffect } from 'react';

import 'prismjs/themes/prism.css';
import '../styles/higherorderfun.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Hoisting() {
  useEffect(() => {

    window.scrollTo(0,0);
  }, []);

  return (
    <div className="es6-container">
      <h1 className="title">Hoisting in JavaScript</h1>

      <div className="method-section">
        <h3>What is Hoisting?</h3>
        <p>
          Hoisting is JavaScript's default behavior of moving declarations to the top of the scope. 
          It's crucial to understand how different types of declarations are hoisted.
        </p>
      </div>

      <div className="method-section">
        <h3>How Hoisting Works</h3>
        
          <SyntaxHighlighter language="javascript" style={atomDark}>{`// Hoisting Example

console.log(a); // ReferenceError: Cannot access 'a' before initialization
console.log(b); // Undefined
console.log(c); // ReferenceError: Cannot access 'c' before initialization
myName(); // Pappu Kumar
console.log(myCity); // Undefined

let a = 10;    // 'let' variables are hoisted but not initialized
var b = 10;    // 'var' variables are hoisted and initialized with 'undefined'
const c = 10;  // 'const' variables are hoisted but not initialized

function myName() {
    console.log("Pappu Kumar"); // Function declarations are hoisted
}

var myCity = () => {
    console.log("Mirzapur"); // Function expressions are not hoisted as functions
}`}</SyntaxHighlighter>
        
      </div>

      <div className="method-section">
        <h3>Key Points about Hoisting</h3>
        <ul>
          <li><strong>var:</strong> Hoisted and initialized with 'undefined'.</li>
          <li><strong>let:</strong> Hoisted but not initialized, leading to a ReferenceError if accessed before declaration.</li>
          <li><strong>const:</strong> Similar to 'let'; hoisted but not initialized, causing a ReferenceError.</li>
          <li><strong>Function Declarations:</strong> Hoisted completely, allowing them to be called before their declaration.</li>
          <li><strong>Function Expressions:</strong> Only the variable is hoisted, not the function, leading to 'undefined' until the assignment.</li>
        </ul>
      </div>
    </div>
  );
}

export default Hoisting;
