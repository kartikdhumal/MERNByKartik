import React from 'react';
import '../styles/Testing.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Testing() {
    return (
        <div className="testing-container">
            <h2>Introduction to Testing in React</h2>
            <p>
                Testing in React is essential for ensuring that your application behaves as expected and remains stable
                across changes. Two popular tools used for testing React applications are React Testing Library and Jest.
            </p>

            <h2>React Testing Library</h2>
            <p>
                React Testing Library is a lightweight and simple testing utility for React applications. It focuses on
                enabling developers to write tests that closely resemble how users interact with the application. Instead
                of relying on implementation details or internal component structure, React Testing Library encourages
                testing from the perspective of the user. It provides utility functions to interact with React components
                and the DOM in a way that mimics real user behavior, making tests more robust and maintainable.
            </p>

            <h2>Jest</h2>
            <p>
                Jest is a JavaScript testing framework developed by Facebook. It is designed to be easy to set up and use,
                with a focus on simplicity and developer experience. Jest is commonly used for testing JavaScript code,
                including React applications. It comes bundled with everything needed for testing, including test runners,
                assertion libraries, and mocking capabilities. Jest provides features like snapshot testing, mocking modules,
                and parallel test execution, making it a versatile tool for testing JavaScript applications.
            </p>

            <h2>Types of Testing (Developer)</h2>
            <ul>
                <li>Unit Testing</li>
                <li>Integration testing</li>
                <li>End to End testing</li>
            </ul>

            <h2>Steps to Configure Testing</h2>
            <div>
                <h2>Steps to Set Up React Testing</h2>

                <p>Install React Testing Library</p>

                <p>Install Jest</p>

                <p>Install Babel Configuration</p>

                <p>Configure Babel in
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        babel.config.js
                    </SyntaxHighlighter>
                </p>

                <p>Configure Parcel Config file to disable default Babel transpilation</p>

                <p>Jest Configuration:
                    <SyntaxHighlighter language="bash" style={atomDark}>
                        npx jest --init
                    </SyntaxHighlighter>
                </p>

                <p>Install jsdom library</p>

                <p>Install:
                    <SyntaxHighlighter language="bash" style={atomDark}>
                        npm i @babel/preset-react
                    </SyntaxHighlighter>
                    to make JSX work in test cases
                </p>

                <p>Include
                    <SyntaxHighlighter language="bash" style={atomDark}>
                        @babel/preset-react
                    </SyntaxHighlighter>
                    inside your Babel configuration
                </p>

                <p>Install:
                    <SyntaxHighlighter language="bash" style={atomDark}>
                        @testing-library/jest-dom
                    </SyntaxHighlighter>
                </p>
            </div>

            <div>
                <h1>Screen Functions</h1>

                <div>
                    <p><strong>getByAltText</strong> - Retrieves an element from the document by its <code>alt</code> attribute text. Returns the first matching element.</p>

                    <p><strong>getAllByAltText</strong> - Retrieves all elements from the document with the specified <code>alt</code> text. Returns an array.</p>

                    <p><strong>queryByAltText</strong> - Same as <code>getByAltText</code>, but returns <code>null</code> if no match is found.</p>

                    <p><strong>queryAllByAltText</strong> - Same as <code>getAllByAltText</code>, but returns an empty array if no matches found.</p>

                    <p><strong>getByTestId</strong> - Finds an element using the <code>data-testid</code> attribute. Returns the first match.</p>

                    <p><strong>getAllByTestId</strong> - Gets all elements with the given <code>data-testid</code>. Returns an array.</p>

                    <p><strong>queryByTestId</strong> - Like <code>getByTestId</code>, but returns <code>null</code> if not found.</p>

                    <p><strong>queryAllByTestId</strong> - Like <code>getAllByTestId</code>, but returns an empty array if no elements found.</p>

                    <p><strong>getByText</strong> - Finds an element by visible text. Returns the first match.</p>

                    <p><strong>getAllByText</strong> - Finds all elements by visible text. Returns an array.</p>

                    <p><strong>queryByText</strong> - Like <code>getByText</code>, but returns <code>null</code> if nothing matches.</p>

                    <p><strong>queryAllByText</strong> - Like <code>getAllByText</code>, but returns empty array if no matches found.</p>
                </div>
            </div>



            <div>
                <h1>Testing Examples</h1>

                <h2>1. Navbar Component Test</h2>
                <p>This test ensures that the Navbar component renders properly within a BrowserRouter.</p>

                <SyntaxHighlighter language="javascript" style={atomDark}>
                    {`import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../Navbar';
import { BrowserRouter } from 'react-router-dom';

test('Navbar should load', () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );
});`}
                </SyntaxHighlighter>


                <h2>2. Toggle Component Test</h2>
                <p>This test verifies the functionality of a Toggle component by simulating a click event and checking if the button changes from 'Login' to 'Logout'.</p>

                <SyntaxHighlighter language="javascript" style={atomDark}>
                    {`import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Toggle from '../Toggle';

test('Change login to logout check', () => {
    render(<Toggle />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
});`}
                </SyntaxHighlighter>


                <h2>3. Component with Props Test</h2>
                <p>This test verifies the rendering of a component with props.</p>

                <SyntaxHighlighter language="javascript" style={atomDark}>
                    {`import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Component from '../Component';

test('Should load Component with props', () => {
    render(<Component info={{ 1: "kartik", 2: "dhumal" }} />);
    const name = screen.getByText('My Name is Kartik');
    expect(name).toBeInTheDocument();
});`}
                </SyntaxHighlighter>


                <h2>4. Async Component Rendering Test</h2>
                <p>This test ensures the asynchronous rendering of a component.</p>

                <SyntaxHighlighter language="javascript" style={atomDark}>
                    {`import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Component from '../Component';

test('Should render the component', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Component />
        </BrowserRouter>
    ));
});`}
                </SyntaxHighlighter>


                <h2>5. Event Handling Test</h2>
                <p>This test verifies the event handling in a component.</p>

                <SyntaxHighlighter language="javascript" style={atomDark}>
                    {`import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Toggle from '../Toggle';

test('Change login to logout check', () => {
    render(<Toggle />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
});`}
                </SyntaxHighlighter>


                <h2>6. Component with Props Test and Fetch Mock</h2>
                <p>This test verifies the rendering of a component with props and mocks a fetch call to simulate asynchronous data fetching.</p>

                <SyntaxHighlighter language="javascript" style={atomDark}>
                    {`import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Component from '../Component';

test('Should load Component with props', async () => {
    const data = { 1: "kartik", 2: "dhumal" };
    global.fetch = jest.fn(() => {
        return Promise.resolve({
            json: () => {
                return Promise.resolve(data);
            }
        })
    });

    render(<Component info={data} />);
    const name = await screen.findByText('My Name is Kartik');
    expect(name).toBeInTheDocument();
});`}
                </SyntaxHighlighter>


                <h2>7. SearchComponent Tests</h2>
                <p>These tests verify the functionality of the SearchComponent.</p>

                <SyntaxHighlighter language="javascript" style={atomDark}>
                    {`import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchComponent from './SearchComponent';

const items = [
    { name: 'Cheeseburger', rating: 4.6 },
    { name: 'Veggie Burger', rating: 4.7 },
    { name: 'Chicken Burger', rating: 4.8 },
    { name: 'Fish Burger', rating: 4.5 },
    { name: 'Pizza', rating: 4.0 },
    { name: 'Pasta', rating: 3.9 }
];

describe('SearchComponent', () => {
    beforeAll(() => {
        console.log('Running setup before all tests...');
    });

    beforeEach(() => {
        render(<SearchComponent items={items} />);
    });

    test('filters and displays 4 cards with "burger"', () => {
        const input = screen.getByPlaceholderText('Search');
        const button = screen.getByText('Search');
        fireEvent.change(input, { target: { value: 'burger' } });
        fireEvent.click(button);
        const cards = screen.getAllByText(/burger/i);
        expect(cards).toHaveLength(4);
    });

    test('filters and displays top-rated restaurants', () => {
        const topRatedButton = screen.getByText('Top Rated Restaurants');
        fireEvent.click(topRatedButton);
        const cards = screen.getAllByText(/burger/i);
        expect(cards).toHaveLength(4);
    });

    afterEach(() => {
        console.log('Cleaning up after each test...');
    });

    afterAll(() => {
        console.log('Running teardown after all tests...');
    });
});`}
                </SyntaxHighlighter>


                <h2>8. Cart Item Test</h2>
                <p>This test verifies that an item is added to the cart when the 'Add' button is clicked.</p>

                <SyntaxHighlighter language="javascript" style={atomDark}>
                    {`import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Product from './Product';

test('adds item to cart when Add button is clicked', () => {
    render(<Product />);
    const addButton = screen.getByText('Add');
    expect(screen.getByText('Cart Item : 0')).toBeInTheDocument();
    fireEvent.click(addButton);
    expect(screen.getByText('Cart Item : 1')).toBeInTheDocument();
});`}
                </SyntaxHighlighter>


            </div>
        </div>
    );
}

export default Testing;
