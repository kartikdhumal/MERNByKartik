import React, { useRef, useState } from 'react';

function ThrottleExample() {
  const [message, setMessage] = useState('');
  const lastClickTimeRef = useRef(0);

  const handleClick = () => {
    const now = Date.now();
    const throttleDelay = 3000;

    if (now - lastClickTimeRef.current >= throttleDelay) {
      lastClickTimeRef.current = now;
      setMessage(`Sending code....`);
    } else {
      setMessage(`Throttled! Wait for 3 seconds...`);
    }
  };

  return (
    <div>
      <h3>Throttle Button Example</h3>
      <button onClick={handleClick}>Send Code</button>
      <p>{message}</p>
    </div>
  );
}

export default ThrottleExample;
