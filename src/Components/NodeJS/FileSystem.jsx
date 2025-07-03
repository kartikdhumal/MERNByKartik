import React from 'react';
import '../../styles/filesystem.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function FileSystem() {
    return (
        <div className="fs-container">
            <header className="fs-header">
                <h1 className="fs-title">File System Operations in Node.js</h1>
                <p className="fs-subtitle">Working with Files and Directories</p>
            </header>

            <section className="fs-content">
                <div className="theory-block">
                    <h2 className="section-title">Reading Files</h2>
                    <div className="code-block">
                        <div className="code-header">
                            <span className="file-name">readFile.js</span>
                        </div>
                        <SyntaxHighlighter language="javascript" style={atomDark}>
{`const fs = require('fs');

// Synchronous reading
const content = fs.readFileSync('example.txt', 'utf8');
console.log(content);

// Asynchronous reading
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Promise-based reading
const fsPromises = require('fs').promises;
async function readMyFile() {
    try {
        const data = await fsPromises.readFile('example.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}`}</SyntaxHighlighter>
                    </div>
                </div>

                <div className="implementation-block">
                    <h2 className="section-title">Writing Files</h2>
                    <div className="code-block">
                        <div className="code-header">
                            <span className="file-name">writeFile.js</span>
                        </div>
                        <SyntaxHighlighter language="javascript" style={atomDark}>
{`const fs = require('fs');

// Writing file synchronously
fs.writeFileSync('output.txt', 'Hello World!');

// Writing file asynchronously
fs.writeFile('output.txt', 'Hello Async World!', (err) => {
    if (err) throw err;
    console.log('File has been saved!');
});

// Appending to file
fs.appendFile('output.txt', '\\nNew line of text', (err) => {
    if (err) throw err;
    console.log('Text appended!');
});`}</SyntaxHighlighter>
                    </div>
                </div>

                <div className="practice-block">
                    <h2 className="section-title">Testing File Operations</h2>
                    <div className="terminal-block">
                        <SyntaxHighlighter language="javascript" style={atomDark}>node readFile.js</SyntaxHighlighter>
                        <SyntaxHighlighter language="javascript" style={atomDark}>node writeFile.js</SyntaxHighlighter>
                        <SyntaxHighlighter language="javascript" style={atomDark}>cat output.txt</SyntaxHighlighter>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FileSystem;