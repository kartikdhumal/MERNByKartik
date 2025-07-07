import React from 'react';
import '../styles/debouncing.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function TemplateLiteral() {
    const codeExample1 = `const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."`;

    const codeExample2 = `const a = 5;
const b = 10;
console.log(\`Fifteen is \${a + b} and
not \${2 * a + b}.\`);
// "Fifteen is 15 and
// not 20."`;

    return (
        <div className="debounce-container">
            <h1>Template Literals (Template Strings)</h1>
            <p>
                Template literals are enclosed by backtick (<SyntaxHighlighter language="javascript" style={atomDark}>`</SyntaxHighlighter>) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.
            </p>
            <p>
                Template literals are sometimes informally called template strings, because they are used most commonly for string interpolation.
            </p>
            
            <h2>String Interpolation</h2>
            <p>
                Without template literals, when you want to combine output from expressions with strings, you'd concatenate them using the addition operator <SyntaxHighlighter language="javascript" style={atomDark}>+</SyntaxHighlighter>:
            </p>
            <SyntaxHighlighter language="javascript" style={atomDark}>{String(codeExample1)}</SyntaxHighlighter>
            
            <p>
                That can be hard to read – especially when you have multiple expressions.
            </p>
            <p>
                With template literals, you can avoid the concatenation operator — and improve the readability of your code — by using placeholders of the form <SyntaxHighlighter language="javascript" style={atomDark}>${'{expression}'}</SyntaxHighlighter> to perform substitutions for embedded expressions:
            </p>
            <SyntaxHighlighter language="javascript" style={atomDark}>{String(codeExample2)}</SyntaxHighlighter>
        </div>
    );
}

export default TemplateLiteral;
