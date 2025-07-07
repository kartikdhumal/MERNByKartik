import React from 'react';
import '../../styles/debouncing.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Express() {
    return (
        <div className="debounce-container">
            <header className="express-header">
                <h1 className="express-title">Express.js Framework</h1>
                <p className="express-subtitle">Building Web Applications with Node.js</p>
            </header>

            <section className="express-content">
                <div className="setup-block">
                    <h2 className="section-title">Initial Setup</h2>
                    <div >
                        <SyntaxHighlighter language="javascript" style={atomDark}>npm init -y</SyntaxHighlighter>
                        <SyntaxHighlighter language="javascript" style={atomDark}>npm install express</SyntaxHighlighter>
                    </div>

                    <div>
                        <div className="code-header">
                            <span className="file-name">app.js</span>
                        </div>
                        <SyntaxHighlighter language="javascript" style={atomDark}>
{`const express = require('express');
const app = express();
const port = 3000;

// Middleware for parsing JSON
app.use(express.json());

// Basic route handler
app.get('/', (req, res) => {
    res.send('Welcome to Express.js API');
});

// Route with parameters
app.get('/users/:id', (req, res) => {
    res.json({
        message: 'User details retrieved',
        userId: req.params.id
    });
});

// POST route handler
app.post('/users', (req, res) => {
    const userData = req.body;
    res.status(201).json({
        message: 'User created successfully',
        user: userData
    });
});

app.listen(port, () => {
    console.log(\`Server running at http://localhost:\${port}\`);
});`}</SyntaxHighlighter>
                    </div>
                </div>

                <div className="testing-block">
                    <h2 className="section-title">API Testing</h2>
                    <div >
                        <SyntaxHighlighter language="javascript" style={atomDark}>curl http://localhost:3000</SyntaxHighlighter>
                        <SyntaxHighlighter language="javascript" style={atomDark}>curl http://localhost:3000/users/123</SyntaxHighlighter>
                        <SyntaxHighlighter language="javascript" style={atomDark}>curl -X POST -H "Content-Type: application/json" -d {"\"name\":\"John\""} http://localhost:3000/users</SyntaxHighlighter>
                    </div>
                </div>
            </section>  
        </div>
    );
}

export default Express;