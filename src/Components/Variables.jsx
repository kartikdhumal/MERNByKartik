import React, { useEffect } from 'react';

import 'prismjs/themes/prism.css';
import '../styles/variables.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Variables() {
    useEffect(() => {
    
        window.scrollTo(0,0);
      }, []);
    
  return (
    <div className="variables-container">
      <h1>Variable Declaration in JavaScript</h1>

      <h2>1. let</h2>
      <div className="code-block">
<SyntaxHighlighter language="javascript" style={atomDark}>
            {`// let\n`}
            {`// Block-scoped.\n`}
            {`// Not hoisted to the top of the block.\n`}
            {`// Can be reassigned.\n`}
        </SyntaxHighlighter>
      </div>

      <h2>2. const</h2>
      <div className="code-block">
<SyntaxHighlighter language="javascript" style={atomDark}>
            {`// const\n`}
            {`// Block-scoped.\n`}
            {`// Not hoisted.\n`}
            {`// Cannot be reassigned after its initial assignment.\n`}
        </SyntaxHighlighter>
      </div>

      <h2>3. var</h2>
      <div className="code-block">
<SyntaxHighlighter language="javascript" style={atomDark}>
            {`// var\n`}
            {`// Function-scoped.\n`}
            {`// Hoisted to the top of its function scope.\n`}
            {`// Can be reassigned.\n`}
        </SyntaxHighlighter>
      </div>

      <h2>Block Scope (let and const)</h2>
      <div className="code-block">
<SyntaxHighlighter language="javascript" style={atomDark}>
            {`function blockScopeExample() {\n`}
            {`    if (true) {\n`}
            {`        let blockScopedVar = 'I am block scoped';\n`}
            {`        const anotherBlockScopedVar = 'I am also block scoped';\n`}
            {`        console.log(blockScopedVar); // Output: 'I am block scoped'\n`}
            {`        console.log(anotherBlockScopedVar); // Output: 'I am also block scoped'\n`}
            {`    }\n`}
            {`    // Trying to access the block-scoped variables outside their block\n`}
            {`    console.log(blockScopedVar); // ReferenceError: blockScopedVar is not defined\n`}
            {`    console.log(anotherBlockScopedVar); // ReferenceError: anotherBlockScopedVar is not defined\n`}
            {`}\n`}
            {`blockScopeExample();\n`}
        </SyntaxHighlighter>
      </div>

      <h2>Function Scope (var)</h2>
      <div className="code-block">
<SyntaxHighlighter language="javascript" style={atomDark}>
            {`function functionScopeExample() {\n`}
            {`    if (true) {\n`}
            {`        var functionScopedVar = 'I am function scoped';\n`}
            {`        console.log(functionScopedVar); // Output: 'I am function scoped'\n`}
            {`    }\n`}
            {`    // Accessing the function-scoped variable outside the block\n`}
            {`    console.log(functionScopedVar); // Output: 'I am function scoped'\n`}
            {`}\n`}
            {`functionScopeExample();\n`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default Variables;
