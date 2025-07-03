import React, { useEffect } from 'react';

import 'prismjs/themes/prism.css';
import '../styles/errors.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Errors() {
    useEffect(() => {
    
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="errors-container">
            <h1 className="title">Types of Errors in JavaScript</h1>

            <div className="method-section">
                <h3 className="method-title">1. SyntaxError</h3>
                <p className="description">
                    A SyntaxError occurs when the JavaScript engine encounters code that does not follow the correct syntax rules of the language.
                </p>
                
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {`// Example of SyntaxError
lat lat = 5; // SyntaxError: Unexpected identifier
console.log("Hello World" // SyntaxError: Unexpected end of input

if (true { // SyntaxError: Unexpected token {
    console.log("Hello");
}`}
                    </SyntaxHighlighter>
            </div>

            <div className="method-section">
                <h3 className="method-title">2. ReferenceError</h3>
                <p className="description">
                    A ReferenceError occurs when code references a variable that does not exist.
                </p>
                
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {`// Example of ReferenceError
console.log(x); // ReferenceError: x is not defined

function greet() {
    console.log(message); // ReferenceError: message is not defined
}
greet();

let a = 10;
if (true) {
    console.log(b); // ReferenceError: b is not defined
}`}
                    </SyntaxHighlighter>
            </div>

            <div className="method-section">
                <h3 className="method-title">3. TypeError</h3>
                <p className="description">
                    A TypeError occurs when an operation is performed on a value of the wrong type.
                </p>
                
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {`// Example of TypeError
var num = 42;
num.toUpperCase(); // TypeError: num.toUpperCase is not a function

var obj = {};
obj.foo(); // TypeError: obj.foo is not a function

null.length; // TypeError: Cannot read properties of null (reading 'length')`}
                    </SyntaxHighlighter>
            </div>

            <div className="method-section">
                <h3 className="method-title">4. RangeError</h3>
                <p className="description">
                    A RangeError occurs when a value is not within the expected range.
                </p>
                
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {`// Example of RangeError
function factorial(n) {
    if (n < 0) throw new RangeError("Argument must be a non-negative number");
    // ...
}
factorial(-1); // RangeError: Argument must be a non-negative number

let arr = new Array(-1); // RangeError: Invalid array length

let num = 1;
num.toExponential(101); // RangeError: toExponential() argument must be between 0 and 100`}
                    </SyntaxHighlighter>
            </div>

            <div className="method-section">
                <h3 className="method-title">5. URIError</h3>
                <p className="description">
                    A URIError occurs when there is an error in encoding or decoding a URI.
                </p>
                
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {`// Example of URIError
decodeURIComponent('%'); // URIError: URI malformed

decodeURI('%E0%A4%A'); // URIError: URI malformed

encodeURIComponent('\\uD800'); // URIError: URI malformed`}
                    </SyntaxHighlighter>
            </div>

            <div className="method-section">
                <h3 className="method-title">6. EvalError</h3>
                <p className="description">
                    An EvalError is thrown when there is an error in the global eval() function.
                </p>
                
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {`// Example of EvalError
eval("foo bar"); // EvalError: Unexpected identifier

try {
    eval("2 + 2 = 4"); // Invalid assignment
} catch (e) {
    console.log(e instanceof EvalError); // true
}

eval("var a = 'hello"); // EvalError: Unterminated string constant`}
                    </SyntaxHighlighter>
            </div>
        </div>
    );
}

export default Errors;
