import React, { useEffect } from 'react';

import 'prismjs/themes/prism.css';
import '../styles/domman.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function DOMManipulation() {
  useEffect(() => {

    window.scrollTo(0,0);
  }, []);

  return (
    <div className="dom-container">
      <h1 className="title">Document Object Model (DOM) Documentation</h1>

      {/* Introduction to DOM */}
      <section className="method-section">
        <h2 className="method-title">Introduction to DOM</h2>
        <p className="description">
          The Document Object Model (DOM) is a programming interface for web documents. It represents the page
          so that programs can change the document structure, style, and content. The DOM represents the
          document as nodes and objects, allowing scripts to update the content, structure, and style
          of a document while it's being viewed.
        </p>
      </section>

      {/* What is a DOM Tree? */}
      <section className="method-section">
        <h2 className="method-title">What is a DOM Tree?</h2>
        <p className="description">
          The DOM tree is a hierarchical representation of the HTML document. Each element, attribute,
          and piece of text in the HTML is represented as a node in the tree. This tree structure
          allows the HTML document to be easily manipulated with a scripting language like JavaScript.
        </p>

        <h3 className="sub-section-title">Example:</h3>
        
          <SyntaxHighlighter language="html" style={atomDark}>
            {`<!-- HTML Structure -->
<!DOCTYPE html>
<html>
<head>
    <title>Sample Page</title>
</head>
<body>
    <h1>Welcome to the DOM</h1>
    <p>This is a paragraph.</p>
</body>
</html>`}
         </SyntaxHighlighter>
        

        <h3 className="sub-section-title">Corresponding DOM Tree:</h3>
        
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`Document
 ├── html
 |    ├── head
 |    |    └── title
 |    |         └── "Sample Page"
 |    └── body
 |         ├── h1
 |         |    └── "Welcome to the DOM"
 |         └── p
 |              └── "This is a paragraph."`}
          </SyntaxHighlighter>
        
      </section>

      {/* DOM Methods and Properties */}
      <section className="method-section">
        <h2 className="method-title">DOM Methods and Properties</h2>

        {/* document.querySelector() */}
        <section className="sub-method-section">
          <h3 className="method-title">document.querySelector()</h3>
          <p className="description">
            The document.querySelector() method returns the first element within the document that matches the specified selector, or group of selectors. If no matches are found, it returns null.
          </p>
          
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {`// Example:
let firstParagraph = document.querySelector('p');
firstParagraph.style.color = 'blue';`}
            </SyntaxHighlighter>
          
        </section>

        {/* document.querySelectorAll() */}
        <section className="sub-method-section">
          <h3 className="method-title">document.querySelectorAll()</h3>
          <p className="description">
            The document.querySelectorAll() method returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.
          </p>
          
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {`// Example:
let allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach(paragraph => {
  paragraph.style.color = 'blue';
});`}
            </SyntaxHighlighter>
          
        </section>

        {/* document.createElement() */}
        <section className="sub-method-section">
          <h3 className="method-title">document.createElement()</h3>
          <p className="description">
            The document.createElement() method creates the HTML element specified by tagName.
          </p>
          
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {`// Example:
let newDiv = document.createElement('div');
newDiv.innerHTML = 'Hello, World!';
document.body.appendChild(newDiv);`}
            </SyntaxHighlighter>
          
        </section>

        {/* Element.innerHTML */}
        <section className="sub-method-section">
          <h3 className="method-title">Element.innerHTML</h3>
          <p className="description">
            The <SyntaxHighlighter language="javascript" style={atomDark}>Element.innerHTML</SyntaxHighlighter> property sets or gets the HTML or XML markup contained within the element.
          </p>
          
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {`// Example:
let paragraph = document.querySelector('p');
paragraph.innerHTML = 'Updated content';`}
            </SyntaxHighlighter>
          
        </section>

        {/* Element.setAttribute() */}
        <section className="sub-method-section">
          <h3 className="method-title">Element.setAttribute()</h3>
          <p className="description">
            The Element.setAttribute() method adds a new attribute or changes the value of an existing attribute on the specified element.
          </p>
          
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {`// Example:
let image = document.querySelector('img');
image.setAttribute('src', 'image.jpg');`}
            </SyntaxHighlighter>
          
        </section>

        {/* Element.getAttribute() */}
        <section className="sub-method-section">
          <h3 className="method-title">Element.getAttribute()</h3>
          <p className="description">
            The Element.getAttribute() method returns the value of a specified attribute on the element. If the given attribute does not exist, it returns null.
          </p>
          
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {`// Example:
let link = document.querySelector('a');
let hrefValue = link.getAttribute('href');
console.log(hrefValue);`}
            </SyntaxHighlighter>
          
        </section>

        {/* EventTarget.addEventListener() */}
        <section className="sub-method-section">
          <h3 className="method-title">EventTarget.addEventListener()</h3>
          <p className="description">
            The EventTarget.addEventListener() method sets up a function that will be called whenever the specified event is delivered to the target.
          </p>
          
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {`// Example:
let button = document.getElementById('myButton');
button.addEventListener('click', () => {
  alert('Button was clicked!');
});`}
            </SyntaxHighlighter>
          
        </section>

        {/* HTMLElement.style */}
        <section className="sub-method-section">
          <h3 className="method-title">HTMLElement.style</h3>
          <p className="description">
            The <SyntaxHighlighter language="javascript" style={atomDark}>HTMLElement.style</SyntaxHighlighter> property is used to get or set the inline style of an element.
          </p>
          
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {`// Example:
let div = document.querySelector('div');
div.style.backgroundColor = 'yellow';`}
            </SyntaxHighlighter>
          
        </section>

        {/* Node.appendChild() */}
        <section className="sub-method-section">
          <h3 className="method-title">Node.appendChild()</h3>
          <p className="description">
            The Node.appendChild() method adds a node to the end of the list of children of a specified parent node. If the node already exists in the document, it is moved from its current position to the new position.
          </p>
          
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {`// Example:
let newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph';
document.body.appendChild(newParagraph);`}
            </SyntaxHighlighter>
          
        </section>

        {/* window.onload */}
        <section className="sub-method-section">
          <h3 className="method-title">window.onload</h3>
          <p className="description">
            The <SyntaxHighlighter language="javascript" style={atomDark}>window.onload</SyntaxHighlighter> event occurs when the entire page (including all dependent resources such as stylesheets and images) has loaded.
          </p>
          
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {`// Example:
window.onload = function () {
  alert('Page is fully loaded');
};`}
            </SyntaxHighlighter>
          
        </section>

        {/* window.scrollTo() */}
        <section className="sub-method-section">
          <h3 className="method-title">window.scrollTo()</h3>
          <p className="description">
            The window.scrollTo() method scrolls to a particular set of coordinates in the document.
          </p>
          
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {`// Example:
window.scrollTo(0, 500); // Scrolls to 500px down the page`}
            </SyntaxHighlighter>
          
        </section>
      </section>

      {/* What is an Event? */}
      <section className="method-section">
        <h2 className="method-title">What is an Event?</h2>
        <p className="description">
          An event is an action or occurrence recognized by software, often originating from the user.
          Common examples of events include clicks, key presses, and mouse movements. Events are a crucial
          part of interactive web applications, enabling user interaction and dynamic behavior.
        </p>

        {/* Mouse Events */}
        <h3 className="sub-section-title">Mouse Events:</h3>
        <ul className="event-list">
          <li>click: Fired when a pointing device button (usually a mouse's primary button) is pressed and released on a single element.</li>
          <li>dblclick: Fired when a pointing device button is clicked twice on a single element.</li>
          <li>mouseenter: Fired when a pointing device is moved onto the element that has the listener attached.</li>
          <li>mouseleave: Fired when a pointing device is moved off the element that has the listener attached.</li>
        </ul>

        
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`// Example:
let button = document.getElementById('myButton');
button.addEventListener('click', function () {
  alert('Button clicked!');
});

button.addEventListener('dblclick', function () {
  alert('Button double-clicked!');
});

button.addEventListener('mouseenter', function () {
  console.log('Mouse entered button area');
});

button.addEventListener('mouseleave', function () {
  console.log('Mouse left button area');
});`}
          </SyntaxHighlighter>
        

        {/* Keyboard Events */}
        <h3 className="sub-section-title">Keyboard Events:</h3>
        <ul className="event-list">
          <li>keydown: Fired when a key is pressed down.</li>
          <li>keyup: Fired when a key is released.</li>
        </ul>

        
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`// Example:
document.addEventListener('keydown', function (event) {
  console.log('Key down: ' + event.key);
});

document.addEventListener('keyup', function (event) {
  console.log('Key up: ' + event.key);
});`}
          </SyntaxHighlighter>
        

        {/* Form Events */}
        <h3 className="sub-section-title">Form Events:</h3>
        <ul className="event-list">
          <li>submit: Fired when a form is submitted.</li>
          <li>change: Fired when the value of an element has been changed.</li>
          <li>input: Fired when the value of an <SyntaxHighlighter language="javascript" style={atomDark}>&lt;input&gt;</SyntaxHighlighter>, <SyntaxHighlighter language="javascript" style={atomDark}>&lt;textarea&gt;</SyntaxHighlighter>, or <SyntaxHighlighter language="javascript" style={atomDark}>&lt;select&gt;</SyntaxHighlighter> element has been changed.</li>
        </ul>

        
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`// Example:
let form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting
  console.log('Form submitted');
});

let inputField = document.querySelector('input');
inputField.addEventListener('change', function () {
  console.log('Input changed: ' + inputField.value);
});

inputField.addEventListener('input', function () {
  console.log('Input value: ' + inputField.value);
});`}
          </SyntaxHighlighter>
        

        {/* Window Events */}
        <h3 className="sub-section-title">Window Events:</h3>
        <ul className="event-list">
          <li>resize: Fired when the document view (window) has been resized.</li>
          <li>scroll: Fired when the document view or an element has been scrolled.</li>
        </ul>

        
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`// Example:
window.addEventListener('resize', function () {
  console.log('Window resized');
});

window.addEventListener('scroll', function () {
  console.log('Window scrolled');
});`}
          </SyntaxHighlighter>
        

        {/* Clipboard Events */}
        <h3 className="sub-section-title">Clipboard Events:</h3>
        <ul className="event-list">
          <li>copy: Fired when the user initiates a copy action through the browser's UI.</li>
          <li>paste: Fired when the user initiates a paste action through the browser's UI.</li>
        </ul>

        
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`// Example:
document.addEventListener('copy', function () {
  console.log('Content copied');
});

document.addEventListener('paste', function () {
  console.log('Content pasted');
});`}
          </SyntaxHighlighter>
        
      </section>
    </div>
  );
}

export default DOMManipulation;
