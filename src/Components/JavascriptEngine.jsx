import React, { useEffect } from 'react';

import 'prismjs/themes/prism.css';
import '../styles/higherorderfun.css';

function JavascriptEngine() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="es6-container">
      <h1 className="title">JavaScript Overview</h1>

      <div className="method-section">
        <h3>What is JavaScript?</h3>
        <p>
          JavaScript is a powerful programming language that can add interactivity to a website.
          It was invented by Brendan Eich.
        </p>
      </div>

      <div className="method-section">
        <h3>Basic JavaScript</h3>
        <ul>
          <li>Primarily used for client-side scripting, enabling dynamic changes to web pages without requiring a page reload.</li>
          <li>A high-level, interpreted language, meaning it's human-readable and doesn't require compilation before execution.</li>
          <li>Dynamically typed, allowing variable types to be determined at runtime.</li>
          <li>Event-driven, enabling developers to respond to user actions like clicks, mouse movements, and keyboard inputs.</li>
          <li>Supported by all major web browsers, making it cross-platform compatible and widely accessible.</li>
          <li>Supports object-oriented programming paradigms, allowing for the creation of reusable code through objects and classes.</li>
        </ul>
      </div>

      <div className="method-section">
        <h3>Advantages of JavaScript</h3>
        <ul>
          <li><strong>Enhanced User Experience:</strong> Enables interactive and dynamic web experiences, improving user engagement and satisfaction.</li>
          <li><strong>Versatility:</strong> Can be used for a wide range of tasks, from simple DOM manipulation to complex web applications and games.</li>
          <li><strong>Reduced Server Load:</strong> Offloading tasks to the client-side can reduce the burden on servers, leading to faster and more scalable web applications.</li>
          <li><strong>Extensive Ecosystem:</strong> Has a vast ecosystem of libraries, frameworks, and tools, making it easy for developers to build and maintain complex web applications.</li>
        </ul>
      </div>

      <div className="method-section">
        <h3>Server-Side JavaScript</h3>
        <p>
          JavaScript can also be used on the server-side. Node.js is a popular runtime environment that allows developers to run JavaScript code on servers, enabling full-stack JavaScript development.
          The current version of JavaScript is ECMAScript 2022.
        </p>
      </div>

      <div className="method-section">
        <h3>Frameworks and Libraries</h3>
        <p>JavaScript has numerous frameworks and libraries that simplify web development and provide additional functionality. Some popular ones include:</p>
        <ul>
          <li>React (Current version: 18.0.0)</li>
          <li>Angular (Current version: 13.0.0)</li>
          <li>Vue.js (Current version: 3.2.14)</li>
          <li>Express.js (Current version: 4.17.1)</li>
          <li>jQuery (Current version: 3.6.0)</li>
          <li>Node.js (Current version: 16.13.0)</li>
        </ul>
        <p>These frameworks and libraries help streamline development, improve code quality, and accelerate the creation of web applications.</p>
      </div>

      <div className="method-section">
        <h3>JavaScript Engine</h3>
        <p>
          JavaScript is a scripting language and is not directly understood by computers. However, browsers have inbuilt JavaScript engines that help them to understand and interpret JavaScript code.
          These engines convert JavaScript programs into computer-understandable language.
        </p>
        <p>A JavaScript engine is a computer program that executes JavaScript code and converts it into a computer-understandable language.</p>

        <h4>Browser JavaScript Engines</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Browser</th>
              <th>Name of JavaScript Engine</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google Chrome</td>
              <td>V8</td>
            </tr>
            <tr>
              <td>Edge (Internet Explorer)</td>
              <td>Chakra</td>
            </tr>
            <tr>
              <td>Mozilla Firefox</td>
              <td>Spider Monkey</td>
            </tr>
            <tr>
              <td>Safari</td>
              <td>JavaScript Core (WebKit)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="method-section">
        <h3>Common Questions</h3>
        <h4>1. What is the difference between Java and JavaScript?</h4>
        <p>
          Java is a statically typed, compiled programming language used for building standalone applications, while JavaScript is a dynamically typed, interpreted language primarily used for web development and adding interactivity to web pages.
        </p>

        <h4>2. What is the difference between Java OOP and JavaScript OOP?</h4>
        <p>
          Java follows a class-based OOP model where classes define the structure and behavior of objects. In contrast, JavaScript uses a prototype-based OOP model, allowing objects to inherit directly from other objects without requiring a class structure.
        </p>
      </div>
    </div>
  );
}

export default JavascriptEngine;
