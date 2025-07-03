import React from 'react';
import '../styles/jwtauth.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function JWTAuth() {
    let userId = "userId"
    let token = "token"
    return (
        <div className="jwt-auth-container">
            <h1 className="jwt-auth-title">JWT Authentication Guide</h1>

            <section className="jwt-section" id="introduction">
                <h2 className="jwt-section-title">Introduction to JWT</h2>
                <p className="jwt-section-content">
                    <strong>JSON Web Token (JWT)</strong> is a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object and are digitally signed using either a secret key (HMAC algorithm) or a public/private key pair (RSA or ECDSA).
                </p>
            </section>

            <section className="jwt-section" id="how-it-works">
                <h2 className="jwt-section-title">How JWT Works</h2>
                <p className="jwt-section-content">
                    1. <strong>Token Sent:</strong> JWT is sent to the client (browser).<br />
                    2. <strong>Server Verifies:</strong> Server checks credentials and creates a JWT.<br />
                    3. <strong>Token Sent Again:</strong> JWT is sent to the client (browser).<br />
                    4. <strong>Token Stored:</strong> Client stores the token (e.g., in localStorage or cookies).<br />
                    5. <strong>Authenticated Requests:</strong> For future requests, client sends the token in the header.<br />
                    6. <strong>Server Validates:</strong> Server checks the token to verify user identity.<br />
                    7. <strong>Access Granted:</strong> If the token is valid, server allows access to protected resources.
                </p>

            </section>

            <section className="jwt-section" id="components">
                <h2 className="jwt-section-title">Components of JWT</h2>
                <p className="jwt-section-content">
                    A JWT consists of three parts separated by dots (<strong>.</strong>):
                </p>
                <div className="jwt-code-example">
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {`jwt.sign(payload, secretKey, {"expiresIn : expiredAt"});`}
                    </SyntaxHighlighter>
                </div>
                <ul className="jwt-list">
                    <li><strong>Header:</strong> Contains metadata about the token, such as the type of token and the algorithm used for signing.</li>
                    <li><strong>Payload:</strong> Contains the claims, which are statements about an entity (typically the user) and additional data.</li>
                    <li><strong>Signature:</strong> Ensures the token hasn't been altered. It's a combination of the encoded header, payload, and a secret key or private key.</li>
                </ul>
                <div className="jwt-code-example">
                    Example of a JWT structure:
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ
.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`}
                    </SyntaxHighlighter>

                </div>
            </section>

            <section className="jwt-section" id="implementation">
                <h2 className="jwt-section-title">Implementing JWT Authentication in React</h2>
                <div className="jwt-subsection">
                    <p className="jwt-section-content">To generate and validate JWTs, the server-side code can use libraries such as <SyntaxHighlighter language="javascript" style={atomDark}>jsonwebtoken</SyntaxHighlighter> in Node.js.</p>
                    <div className="jwt-code-example">
                        <strong>Login.controller.js</strong>
                        <SyntaxHighlighter language="javascript" style={atomDark}>
                            {`const jwt = require('jsonwebtoken');

const user = {
  id: 1,
  username: 'exampleUser'
};

const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: '1h' });

console.log(token);`}
                        </SyntaxHighlighter>

                    </div>
                    <div className="jwt-code-example">
                        <strong>.env</strong>
                        <SyntaxHighlighter language="javascript" style={atomDark}>
                            {`SECRET_KEY=guddubhaiyaa`}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <div className="jwt-subsection">
                    <h3 className="jwt-section-title" align="center">React Component Implementation</h3>
                    <p className="jwt-section-content">The <SyntaxHighlighter language="javascript" style={atomDark}>JWTAuth</SyntaxHighlighter> component will handle the authentication logic using JWT tokens.</p>
                    <div className="jwt-code-example">
                        <SyntaxHighlighter language="javascript" style={atomDark}>
                            {`import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Component.css';

function JWTAuth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { username, password });
      setToken(response.data.token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleSecureRequest = async () => {
    try {
      const response = await axios.get('/api/secure-data', {
        headers: { Authorization: \`Bearer \${token}\` }
      });
      console.log('Secure data:', response.data);
    } catch (error) {
      console.error('Failed to fetch secure data:', error);
    }
  };

  return (
    <div className="auth-container">
      <h2>JWT Authentication</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSecureRequest}>Fetch Secure Data</button>
    </div>
  );
}

export default JWTAuth;`}
                        </SyntaxHighlighter>

                    </div>
                </div>

                <div className="jwt-subsection">
                    <h3 className="jwt-section-title" align="center">Frontend Validation User in JWT Authetication</h3>
                    <p className="jwt-section-content">
                        <strong>1. Obtain the JWT Token</strong> - When a user logs in, you typically make a request to your backend API, which returns a JWT token if the credentials are valid. Here’s an example using fetch:
                    </p>
                    <div className="jwt-code-example">
                        <SyntaxHighlighter language="javascript" style={atomDark}>
                            {`
async function login(username, password) {
    const response = await fetch('https://kartikpandit.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
        const data = await response.json();
        // Store the token securely
        localStorage.setItem('token', data.token);
        return data.token;
    } else {
        throw new Error('Login failed');
    }
}`}
                        </SyntaxHighlighter>
                    </div>
                    <p className="jwt-section-content">
                        <strong>2. Decode and Validate the Token</strong> - You can use libraries like jsonwebtoken or jwt-decode to decode the token. You don't need to validate the token on the frontend (as it should be validated on the server), but you can check its expiration.
                    </p>
                    <div className="jwt-code-example">
                        <SyntaxHighlighter language="javascript" style={atomDark}>
                            {`
import jwtDecode from 'jwt-decode';

function decodeToken(token) {
    try {
        const decoded = jwtDecode(token);
        return decoded; // Contains user_id and other claims
    } catch (error) {
        console.error('Invalid token');
        return null;
    }
}

// Example usage
const token = localStorage.getItem('token');
const userData = decodeToken(token);

if (userData) {
    console.log('User ID:', userData.user_id);
}
                            `}
                        </SyntaxHighlighter>
                    </div>
                    <p className="jwt-section-content">
                        <strong>3. Fetch User Profile Using User ID</strong> - Once you have the user ID from the decoded token, you can fetch the user profile from your backend:
                    </p>
                    <div className="jwt-code-example">
                        <SyntaxHighlighter language="javascript" style={atomDark}>
                            {`
async function fetchUserProfile(userId) {
    const token = localStorage.getItem('token');

    const response = await fetch(https://yourapi.com/users/${userId}, {
        headers: {
            'Authorization': Bearer ${token},
        },
    });

    if (response.ok) {
        const profile = await response.json();
        return profile;
    } else {
        throw new Error('Failed to fetch user profile');
    }
}

// Example usage
if (userData) {
    fetchUserProfile(userData.user_id)
        .then(profile => console.log('User Profile:', profile))
        .catch(error => console.error(error));
}
                            `}
                        </SyntaxHighlighter>
                    </div>
                </div>

            </section>


            <section className="jwt-section" id="introduction">
                <h2 className="jwt-section-title">Introduction to JWT</h2>
                <p className="jwt-section-content">
                    <strong>JSON Web Token (JWT)</strong> is a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object and are digitally signed using either a secret key (HMAC algorithm) or a public/private key pair (RSA or ECDSA).
                </p>
            </section>

            {/* How JWT Works Section */}
            <section className="jwt-section" id="how-it-works">
                <h2 className="jwt-section-title">How JWT Works</h2>
                <p className="jwt-section-content">
                    JSON Web Tokens (JWT) work by securely transmitting information between a client
                    (like a web browser) and a server. When a user logs in, the server verifies their
                    credentials and creates a JWT containing user information, such as their ID. This
                    token is then sent back to the client, which stores it (usually in localStorage or
                    cookies). For subsequent requests, the client sends this token in the Authorization
                    header. The server checks the token to confirm the user's identity and grants access
                    to protected resources. This process eliminates the need to repeatedly ask for login
                    details, as the token serves as a digital key, valid until it expires or is revoked.
                </p>
            </section>

            <section className="jwt-section" id="components">
                <h2 className="jwt-section-title">Components of JWT</h2>
                <p className="jwt-section-content">
                    A JWT consists of three parts separated by dots (<strong>.</strong>):
                </p>
                <div className="jwt-code-example">
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {`jwt.sign(payload, secretKey, { expiresIn: '1h' });`}
                    </SyntaxHighlighter>
                        <h2>Minimum and Maximum expiresIn Values</h2>

                        <h3>Minimum:</h3>
                        <p><strong>1s</strong> (1 second)</p>
                        <SyntaxHighlighter language="javascript" style={atomDark}>
                            {`jwt.sign(payload, secretKey, {expiresIn: '1s' });`}
                        </SyntaxHighlighter>

                        <h3>Maximum (string format):</h3>
                        <p><strong>365d</strong> (365 days, ~1 year)</p>
                        <SyntaxHighlighter language="javascript" style={atomDark}>
                            {`jwt.sign(payload, secretKey, {expiresIn: '365d' });`}
                        </SyntaxHighlighter>

                        <h3>Maximum (numeric format):</h3>
                        <p>You can also pass a numeric value in seconds:</p>
                        <SyntaxHighlighter language="javascript" style={atomDark}>
                            {`jwt.sign(payload, secretKey, {expiresIn: 31536000 }); // 1 year`}
                        </SyntaxHighlighter>
                </div>
                <ul className="jwt-list">
                    <li><strong>Header:</strong> Contains metadata about the token, such as the type of token and the algorithm used for signing.</li>
                    <li><strong>Payload:</strong> Contains the claims, which are statements about an entity (typically the user) and additional data.</li>
                    <li><strong>Signature:</strong> Ensures the token hasn't been altered. It's a combination of the encoded header, payload, and a secret key or private key.</li>
                </ul>
                <div className="jwt-code-example">
                    Example of a JWT structure:
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9<br />
                        .<br />
                        eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ<br />
                        .<br />
                        SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
                    </SyntaxHighlighter>
                </div>
            </section>

            <section className="jwt-section" id="introduction">
                <h2 className="jwt-section-title">Introduction to JWT</h2>
                <p className="jwt-section-content">
                    <strong>JSON Web Token (JWT)</strong> is a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object and are digitally signed using either a secret key (HMAC algorithm) or a public/private key pair (RSA or ECDSA).
                </p>
            </section>

            <section className="jwt-section" id="how-it-works">
                <h2 className="jwt-section-title">How JWT Works</h2>
                <p className="jwt-section-content">
                    JSON Web Tokens (JWT) work by securely transmitting information between a client (like a web browser) and a server. When a user logs in, the server verifies their credentials and creates a JWT containing user information, such as their ID. This token is then sent back to the client, which stores it (usually in localStorage or cookies). For subsequent requests, the client sends this token in the Authorization header. The server checks the token to confirm the user's identity and grants access to protected resources. This process eliminates the need to repeatedly ask for login details, as the token serves as a digital key, valid until it expires or is revoked.
                </p>
            </section>

            <section className="jwt-section" id="components">
                <h2 className="jwt-section-title">Components of JWT</h2>
                <p className="jwt-section-content">
                    A JWT consists of three parts separated by dots (<strong>.</strong>):
                </p>
                <div className="jwt-code-example">
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        jwt.sign(payload, secretKey, {"{expiresIn : expiredAt}"});
                    </SyntaxHighlighter>
                </div>
                <ul className="jwt-list">
                    <li><strong>Header:</strong> Contains metadata about the token, such as the type of token and the algorithm used for signing.</li>
                    <li><strong>Payload:</strong> Contains the claims, which are statements about an entity (typically the user) and additional data.</li>
                    <li><strong>Signature:</strong> Ensures the token hasn't been altered. It's a combination of the encoded header, payload, and a secret key or private key.</li>
                </ul>
                <div className="jwt-code-example">
                    Example of a JWT structure:
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9<br />
                        .<br />
                        eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ<br />
                        .<br />
                        SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
                    </SyntaxHighlighter>
                </div>
            </section>

            <section className="jwt-section" id="interview-questions">
                <h2 className="jwt-section-title">Interview Questions & Answers</h2>

                <div className="jwt-subsection">
                    <h3 className="jwt-section-title">1. What happens if someone steals the JWT token?</h3>
                    <p className="jwt-section-content">
                        If someone gets a JWT token, they can pretend to be the real user and access everything that user can until the token runs out. This is because JWTs don’t need any extra checks from the server other than verifying the token’s signature. To reduce this risk, you can:
                        <ul>
                            <li>Use HTTPS to stop people from stealing the token during transmission.</li>
                            <li>Set short expiration times for tokens so they become invalid quickly.</li>
                            <li>Use refresh tokens that can be revoked if needed.</li>
                            <li>Keep tokens safe by storing them in HttpOnly cookies.</li>
                        </ul>
                        Once a token is stolen, there’s no easy way to cancel it on the server, so it’s very important to protect and manage tokens carefully.
                    </p>
                </div>

                <div className="jwt-subsection">
                    <h3 className="jwt-section-title">2. What if someone steals the token and also has the secret key?</h3>
                    <p className="jwt-section-content">
                        If an attacker has both the JWT token and the secret key used to sign the token, they can not only impersonate the user but also generate new valid tokens with any claims they choose. This would compromise the entire system, as they could grant themselves any level of access. To prevent this:
                        <ul>
                            <li>Keep your secret key secure and rotate it regularly.</li>
                            <li>Use environment variables to store secrets securely.</li>
                            <li>Implement key rotation strategies and re-issue new tokens whenever the secret changes.</li>
                        </ul>
                        The security of the secret key is paramount in JWT-based systems.
                    </p>
                </div>

                <div className="jwt-subsection">
                    <h3 className="jwt-section-title">3. What is the token expiry time?</h3>
                    <p className="jwt-section-content">
                        The token expiry time is the duration for which the token remains valid before it is considered expired. It is defined in the 'exp' claim of the JWT payload and is usually set to a short duration, such as 15 minutes to a few hours. This helps to limit the window during which a stolen token can be used. The 'exp' claim should be balanced between usability and security:
                        <ul>
                            <li>Short expiry times improve security but may require frequent re-authentication.</li>
                            <li>Longer expiry times reduce the need for frequent token refreshes but increase the risk window for stolen tokens.</li>
                        </ul>
                        Best practices involve using short-lived access tokens combined with longer-lived refresh tokens.
                    </p>
                </div>
                <div className="jwt-subsection">
                    <h3 className="jwt-section-title">4. How can we make a JWT token expire before its actual expiry time?</h3>
                    <p className="jwt-section-content">
                        JWTs are stateless, so you can’t just cancel them once they’re issued. However, there are a few ways to make them invalid before their expiration:
                        <ul>
                            <li><strong>Token Blacklisting:</strong> Keep a list of tokens that are no longer valid and check this list with every request. This means storing data on the server and checking each time.</li>
                            <li><strong>Token Versioning:</strong> Add a 'version' number in the token and keep track of the current version on the server. When something important happens (like a password change), update the version, and reject older tokens.</li>
                            <li><strong>Secret Key Rotation:</strong> Change the secret key used to sign the tokens, which makes all previous tokens invalid. This requires careful planning for when to change keys.</li>
                        </ul>
                        Using these methods together can improve security, but they might also make things more complicated and slow down performance.
                    </p>

                </div>

                <div className="jwt-subsection">
                    <h3 className="jwt-section-title">5. How should we store JWT tokens safely on the client side?</h3>
                    <p className="jwt-section-content">
                        Storing JWT tokens securely is crucial to prevent them from being stolen by malicious actors. The best practices for storing tokens on the client-side include:
                        <ul>
                            <li><strong>HttpOnly Cookies:</strong> Store the token in an HttpOnly cookie to prevent JavaScript from accessing it, reducing the risk of XSS attacks. Ensure the cookie is also marked as 'Secure' to enforce HTTPS usage.</li>
                            <li><strong>Session Storage:</strong> Store tokens in session storage if HttpOnly cookies are not an option. This keeps the token in memory and clears it when the tab or browser is closed, reducing persistence.</li>
                            <li><strong>Avoid Local Storage:</strong> While convenient, local storage is vulnerable to XSS attacks since JavaScript can access it. Use only if necessary and with additional precautions.</li>
                            <li><strong>CSRF Tokens:</strong> If storing in cookies, use CSRF tokens to prevent CSRF attacks, adding an extra layer of security.</li>
                        </ul>
                        The chosen storage mechanism should balance security with usability based on the application's needs.
                    </p>
                </div>

                <div className="jwt-subsection">
                    <h3 className="jwt-section-title">6. What's the difference between access tokens and refresh tokens?</h3>
                    <p className="jwt-section-content">
                        Access tokens and refresh tokens serve different purposes in the authentication process:
                        <ul>
                            <li><strong>Access Tokens:</strong> These are short-lived tokens (usually valid for minutes to hours) used to access protected resources. They contain user information and permissions but have a short lifespan to limit their usability if compromised.</li>
                            <li><strong>Refresh Tokens:</strong> These are long-lived tokens (often valid for weeks or months) that are used to obtain new access tokens when they expire. They are only sent to the server for token renewal and not for every API call, reducing exposure. Storing refresh tokens securely is crucial, as they grant access to issue new tokens.</li>
                        </ul>
                        A secure system typically uses both tokens: short-lived access tokens for API access and long-lived refresh tokens to obtain new access tokens, minimizing the risk of long-term token exposure.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default JWTAuth;
