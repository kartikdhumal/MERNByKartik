import React, { useEffect } from 'react';

import 'prismjs/themes/prism.css';
import '../styles/equalityComparison.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function EqualityComparison() {

    return (
        <div className="comparison-container">
            <h1 className="title">Double vs. Triple Equality in JavaScript</h1>

            <section className="description-section">
                <p className="description">
                    In JavaScript, equality operators like <strong>double equals (==)</strong> and <strong>triple equals (===)</strong>
                    are used to compare two values. However, both operators work differently:
                </p>
                <ul className="comparison-list">
                    <li><strong>Double Equals (==)</strong>: Converts both operands to the same type (type coercion) before comparison.</li>
                    <li><strong>Triple Equals (===)</strong>: Compares both the value and type, making it a strict comparison without type coercion.</li>
                </ul>
            </section>

            <section className="code-section">
                <h2 className="code-title">Code Example</h2>

                
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {`// Example: Double vs. Triple Equality
let str = "10";
let num = 10;

console.log(str == num ? "Both are same " : "Not same");
// Output: "Both are same" (because == does type coercion)

console.log(str === num ? "Both are same " : "Not same");
// Output: "Not same" (because === checks both value and type strictly)`}
                    </SyntaxHighlighter>
                
            </section>

            <section className="key-difference">
                <h2 className="code-title">Key Differences</h2>
                <ul className="difference-list">
                    <li><strong>Type coercion:</strong> The double equals operator converts the operands to the same type before comparison.</li>
                    <li><strong>Strict comparison:</strong> The triple equals operator checks both the value and the type without converting them.</li>
                    <li><strong>Usage:</strong> Prefer triple equals (<SyntaxHighlighter language="javascript" style={atomDark}>===</SyntaxHighlighter>) for strict comparisons, as it avoids unexpected behavior due to type coercion.</li>
                </ul>
            </section>
        </div>
    );
}

export default EqualityComparison;
