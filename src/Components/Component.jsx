import React, { useCallback, useContext, useState } from 'react';
import '../styles/Component.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Component() {
  const [count, setCount] = useState(0);

  return (
    <div className="com-container">
      <h1 className="com-title">Understanding Components in React</h1>

      <h2 className="com-subtitle">What is a Component?</h2>
      <p className="com-text">
        A component in React is a reusable piece of the user interface. Components can be thought of as custom, reusable HTML elements that can be used to build complex interfaces out of simpler building blocks.
      </p>

      <h2 className="com-subtitle">Types of Components</h2>
      <div className="com-list">
        <div className="com-list-item">
          Functional Components: These are JavaScript functions that return JSX. They can accept props as arguments and return a React element. Functional components are also known as stateless components because they do not manage their own state.
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`
import React, { useState } from 'react';

function Counter() {
const [count, setCount] = useState(0);

return (
  <div>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
);
}
            `}
          </SyntaxHighlighter>
        </div>
        <div className="com-list-item">
          Class Components:
          <p>These are ES6 classes that extend from React.Component . They can manage their own state and lifecycle methods. Class components are also known as stateful components.</p>

          <p>Common lifecycle methods used in class components include:</p>
          <div>
            <div>
              componentDidMount: This method is called once the component has been rendered in the DOM. It is typically used for initiating network requests, subscriptions, or any other side effects.
            </div>
            <div>
              componentDidUpdate: This method is called after the component has been updated. It is useful for responding to prop or state changes, such as making network requests based on the updated state.
            </div>
            <div>
              componentWillUnmount: This method is called just before the component is removed from the DOM. It is typically used for cleaning up resources like timers, network requests, or subscriptions.
            </div>
          </div>

          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`
import React from 'react';

export default class ClassCompo extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    name: '',
    age: ''
  };
}

render() {
  return (
    <div>
      <form>
        <label>Name</label>
        <input type='text' onChange={(e) => { this.setState({ name: e.target.value }) }}></input>
        <label>Age</label>
        <input type='number' onChange={(e) => { this.setState({ age: e.target.value }) }}></input>
        <input type='submit' value={'Submit'} onClick={(e) => {
          e.preventDefault();
          console.log("Name: " + this.  state.name);
          console.log("Age: " + this.state.age);
        }}></input>
      </form>
    </div>
  );
}
}
            `}
          </SyntaxHighlighter>
        </div>
        <div className="com-list-item">
          Higher-Order Components (HOCs): These are functions that take a component and return a new component. HOCs are used for reusing component logic.
          <SyntaxHighlighter language="javascript" style={atomDark}>

            {`
import React from 'react'

function HigherOrder() {
  return (
      <div>
          <h1> Thank you for visiting me </h1>
      </div>
  )
}

export default HigherOrder

export const HighOrderComponent = (HigherOrder) => {
  return (props) => (
      <>
         <h2>I am Higher order component</h2> 
          <HigherOrder {...props} />
      </>
  )
}

export const EnhancedOrder = HighOrderComponent(HigherOrder);
            `}
          </SyntaxHighlighter>
        </div>
        <div className="com-list-item">
          Uncontrolled Components: These are components that maintain their own state and use refs to access the DOM.
          <SyntaxHighlighter language="javascript" style={atomDark}>

            {`
import React, { useRef } from 'react';

function UncontrolledComponent() {
const inputRef = useRef(null);

const handleSubmit = (e) => {
  e.preventDefault();
  alert(inputRef.current.value);
};

return (
  <form onSubmit={handleSubmit}>
    <input type="text" ref={inputRef} />
    <button type="submit">Submit</button>
  </form>
);
}

export default UncontrolledComponent;
            `}
          </SyntaxHighlighter>
        </div>
      </div>

      <h2 className="com-subtitle">React Lifecycle Methods</h2>
      <SyntaxHighlighter language="javascript" style={atomDark}>

        {`
Parent class Constructor
Parent class Render

Child class 1 constructor 
Child class 1 render

Child class 2 constructor 
Child class 2 render

Child class 1 ComponentDidMount
Child class 2 ComponentDidMount

Parent class ComponentDidMount
        `}
      </SyntaxHighlighter>
      <div className="com-iframe">
        <iframe
          src="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"
          title="React Lifecycle Methods Diagram"
          width="100%"
          height="500px"
        />
      </div>

      <h2 className="com-subtitle">What are Fragments in React?</h2>
      <p className="com-text">
        It's a common pattern in React to return multiple elements from a component. Fragments let you group a list of children without adding extra nodes to the DOM.
      </p>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`
<React.Fragment>
<h1>Title</h1>
<p>Paragraph</p>
</React.Fragment>
        `}
      </SyntaxHighlighter>
      <p className="com-text">We can also write in short:</p>
      <SyntaxHighlighter language="javascript" style={atomDark}>

        {`
<>
  <h1>Title</h1>
  <p>Paragraph</p>
</>
    `}
      </SyntaxHighlighter>

      <h2 className="com-subtitle">JSX and Its Importance</h2>
      <p className="com-text">
        JSX stands for JavaScript XML. It is a syntax extension for JavaScript, used with React to describe what the UI should look like. JSX may look like HTML, but it is transformed into JavaScript function calls by Babel.
      </p>
      <p className="com-text">
        Importance of JSX:
        <div className="com-list">
          <div className="com-list-item">
            Declarative Syntax:
            <p className="faq-answer">JSX provides a clear and expressive syntax for defining UI components, making the code more readable and maintainable.</p>
          </div>
          <div className="com-list-item">
            Integration with JavaScript:
            <p className="faq-answer">Since JSX is a syntactic sugar for React.createElement, it integrates seamlessly with JavaScript, allowing you to embed JavaScript expressions within the markup.</p>
          </div>
          <div className="com-list-item">
            Prevents Injection Attacks:
            <p className="faq-answer">JSX automatically escapes any values embedded in the markup, preventing cross-site scripting (XSS) attacks.</p>
          </div>
          <div className="com-list-item">
            Tooling Support:
            <p className="faq-answer">Tools like Babel can transform JSX into optimized JavaScript code, allowing you to use the latest features of JavaScript and React.</p>
          </div>
        </div>

      </p>
      Interview Questions
      <ol className="com-list">
        <div className="faq-item">
          <h6>What is JSX, and why is it used in React?</h6>
          <p className="faq-answer">
            JSX stands for JavaScript XML. It is a syntax extension for JavaScript used in React to describe UI elements.
            JSX makes the code more readable and maintainable by providing a declarative syntax for defining UI components.
            It integrates seamlessly with JavaScript and prevents injection attacks by automatically escaping values embedded in the markup.
          </p>
        </div>

        <div className="faq-item">
          <h6>What is the difference between functional and class components?</h6>
          <p className="faq-answer">
            Functional components are JavaScript functions that return JSX. They are simpler and don't have their own state or lifecycle methods.
            Class components are ES6 classes that extend React.Component. They can manage their own state and have lifecycle methods.
          </p>
        </div>

        <div className="faq-item">
          <h6>How do you define a state in a functional component?</h6>
          <p className="faq-answer">
            You can define a state in a functional component using the useState hook provided by React.
            For example, const [count, setCount] = useState(0) initializes a state variable called count with an initial value of 0,
            and setCount is a function used to update the count state.
          </p>
        </div>

        <div className="faq-item">
          <h6>Explain the useState hook and its purpose.</h6>
          <p className="faq-answer">
            The useState hook is a built-in React hook that allows functional components to manage state.
            It takes an initial state value as an argument and returns an array containing the current state value and a function to update that state.
            It enables functional components to have local state without using class components.
          </p>
        </div>

        <div className="faq-item">
          <h6>What are props in React, and how do you pass them to components?</h6>
          <p className="faq-answer">
            Props (short for properties) are a way to pass data from parent to child components in React.
            They are read-only and help make components reusable and customizable.
            Props are passed as attributes to components in JSX. For example, &lt;MyComponent name='John' /&gt; passes a prop called name with the value 'John' to the MyComponent component.
          </p>
        </div>

        <div className="faq-item">
          <h6>Can you explain the concept of lifting state up in React?</h6>
          <p className="faq-answer">
            Lifting state up is a pattern in React where you move the state from a child component to its parent component.
            This allows multiple child components to share the same state and synchronize their state with each other through their parent component.
            It helps maintain a single source of truth for the shared state.
          </p>
        </div>

        <div className="faq-item">
          <h6>What are the lifecycle methods of a class component?</h6>
          <p className="faq-answer">
            Class components in React have several lifecycle methods, including componentDidMount, componentDidUpdate, and componentWillUnmount.
            These methods allow you to perform actions at different stages of a component's lifecycle,
            such as initializing state, fetching data, and cleaning up resources.
          </p>
        </div>

        <div className="faq-item">
          <h6>How do you handle events in React?</h6>
          <p className="faq-answer">
            In React, you can handle events using JSX syntax similar to HTML.
            You pass a function as the event handler to the onEvent attribute of the JSX element.
            For example, &lt;button onClick={`handleClick`}&gt;Click me&lt;/button&gt; attaches a click event handler to the button,
            calling the handleClick function when clicked.
          </p>
        </div>
      </ol>


    </div>
  );
}

export default Component;
