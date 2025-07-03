import React, { useEffect } from 'react';
import '../styles/webapis.css';

import 'prismjs/themes/prism.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function WebAPIs() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="webapis-container">
      <h1>Web APIs Documentation</h1>

      <h2>1. Web Storage API</h2>
      <p>Web Storage allows saving key/value pairs in the browser.</p>

      <h3>LocalStorage</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`// localStorage - persists even after browser is closed
localStorage.setItem("userid", "734824643");
console.log(localStorage.getItem("userid")); // "734824643"
localStorage.removeItem("userid");`}
      </SyntaxHighlighter>

      <h3>SessionStorage</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`// sessionStorage - clears when browser/tab is closed
sessionStorage.setItem("userid", "734824643");
console.log(sessionStorage.getItem("userid")); // "734824643"
sessionStorage.removeItem("userid");`}
      </SyntaxHighlighter>

      <h2>2. Fetch API</h2>
      <p>Fetch is used to make HTTP requests to servers and returns a Promise.</p>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`const getData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Network error');
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("Error:", err);
  }
};

getData();`}
      </SyntaxHighlighter>

      <h2>3. Geolocation API</h2>
      <p>Get user’s geographic location if allowed.</p>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log("Latitude:", position.coords.latitude);
    console.log("Longitude:", position.coords.longitude);
  });
} else {
  console.log("Geolocation not supported");
}`}
      </SyntaxHighlighter>

      <h2>4. Notification API</h2>
      <p>Send system-level notifications to the user.</p>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`if (window.Notification.permission === "granted") {
  new Notification("Hello, Kartik!");
} else if (Notification.permission !== "denied") {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      new Notification("Hello, Kartik!");
    }
  });
}`}
      </SyntaxHighlighter>

      <h2>5. Cookie API (via document.cookie)</h2>
      <p>Store small pieces of data sent with each HTTP request.</p>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`// Set a cookie
document.cookie = "username=kartik; expires=Fri, 31 Dec 2025 23:59:59 GMT";

// Read cookies
console.log(document.cookie); // Shows all cookies

// Delete cookie (set past expiry date)
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";`}
      </SyntaxHighlighter>

      <h2>🔍 Difference Between Web APIs</h2>
      <p className="doc-description">
        <strong>sessionStorage vs localStorage:</strong> <br />
        sessionStorage stores data only for the duration of the page session — once you close the tab, it’s gone. On the other hand, localStorage keeps the data even after closing the browser, unless it’s manually cleared. Both only store strings and are limited to the same origin.
      </p>

      <p className="doc-description">
        <strong>localStorage vs Cookies:</strong> <br />
        localStorage stores data on the client side and does not get sent to the server with every request. It can store more data (usually ~5MB), and is ideal for saving user preferences. Cookies, however, are smaller in size (~4KB) and are automatically sent with every HTTP request, making them useful for authentication and tracking — but they can slow down requests if misused.
      </p>

      <p className="doc-description">
        <strong>sessionStorage vs Cookies:</strong> <br />
        While both are short-term storage mechanisms, sessionStorage is completely client-side and disappears when the tab is closed. Cookies can have an expiration time or persist until manually deleted, and they travel with every HTTP request, making them more suitable for server-side processes like login sessions.
      </p>

    </div>
  );
}

export default WebAPIs;
