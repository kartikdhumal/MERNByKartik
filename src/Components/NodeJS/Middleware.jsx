import React from 'react';
import '../../styles/middleware.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Middleware() {
    return (
        <div className="middleware-container">
            <header className="middleware-header">
                <h1 className="middleware-title">Express Middleware</h1>
                <p className="middleware-subtitle">Understanding and Implementing Express.js Middleware</p>
            </header>

            <section className="middleware-content">
                <div className="theory-block">
                    <h2 className="section-title">Understanding Middleware</h2>
                    <p className="section-description">
                        Middleware functions are functions that have access to the request object (req),
                        the response object (res), and the next middleware function in the application's
                        request-response cycle.
                    </p>

                    <div className="code-block">
                        <div className="code-header">
                            <span className="file-name">middleware.js</span>
                        </div>
                        <SyntaxHighlighter language="javascript" style={atomDark}>
                            {`const express = require('express');
const app = express();

// Custom middleware
const loggerMiddleware = (req, res, next) => {
    console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
    next(); // Don't forget to call next()!
};

// Authentication middleware
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'No token provided' });
    }
    req.user = { id: 1, name: 'John' };
    next();
};

// Using middleware
app.use(loggerMiddleware);
app.use(express.json()); // Built-in middleware
app.use('/api', authMiddleware); // Route-specific middleware`}</SyntaxHighlighter>
                    </div>
                </div>

                <div className="implementation-block">
                    <h2 className="section-title">Common Middleware Packages</h2>
                    <div className="terminal-block">
                        <SyntaxHighlighter language="javascript" style={atomDark}>npm install cors morgan helmet</SyntaxHighlighter>
                    </div>

                    <div className="code-block">
                        <div className="code-header">
                            <span className="file-name">app.js</span>
                        </div>
                        <SyntaxHighlighter language="javascript" style={atomDark}>
                            {`const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

// Security headers
app.use(helmet());

// CORS middleware
app.use(cors());

// Logging middleware
app.use(morgan('dev'));`}</SyntaxHighlighter>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Middleware;