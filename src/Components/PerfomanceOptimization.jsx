import React, { useEffect } from 'react';

import 'prismjs/themes/prism.css';
import '../styles/performanceoptimization.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function PerformanceOptimization() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='performance-optimization-container'>
      <h1 className="title">Performance and Optimization</h1>

      {/* 1. Debouncing and Throttling */}
      <div className="method-section">
        <h3>1. Debouncing and Throttling</h3>
        <p>
          Definition: Debouncing and throttling are techniques used to control how often a function is executed in response to events, improving performance by limiting the number of times a function is called.
        </p>

        {/* 1.1 Debouncing */}
        <div className="sub-section">
          <h4>1.1 Debouncing</h4>
          <p>
            Definition: Debouncing ensures that a function is not called multiple times in quick succession. It is useful for optimizing performance of operations like resizing, scrolling, or keypress events.
          </p>
          
            <SyntaxHighlighter language="javascript" style={atomDark}>{`
        // Debounce Function
        function debounce(func, wait) {
            let timeout;
            return function (...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(this, args), wait);
            };
        }
    
        // Example usage:
        window.addEventListener('resize', debounce(() => {
            console.log('Resized!');
        }, 300));
    
        // Methods of Debounce:
        // .debounce(func, wait) - Returns a debounced version of the function
        `}</SyntaxHighlighter>
          
        </div>

        {/* 1.2 Throttling */}
        <div className="sub-section">
          <h4>1.2 Throttling</h4>
          <p>
            Definition: Throttling ensures that a function is called at most once in a specified period. It is useful for rate-limiting operations like scrolling, mouse movement, or API calls.
          </p>
          
            <SyntaxHighlighter language="javascript" style={atomDark}>{`
        // Throttle Function
        function throttle(func, limit) {
            let lastFunc;
            let lastRan;
            return function (...args) {
                if (!lastRan) {
                    func.apply(this, args);
                    lastRan = Date.now();
                } else {
                    clearTimeout(lastFunc);
                    lastFunc = setTimeout(() => {
                        if (Date.now() - lastRan >= limit) {
                            func.apply(this, args);
                            lastRan = Date.now();
                        }
                    }, limit - (Date.now() - lastRan));
                }
            };
        }
    
        // Example usage:
        window.addEventListener('scroll', throttle(() => {
            console.log('Scrolled!');
        }, 300));
    
        // Methods of Throttle:
        // .throttle(func, limit) - Returns a throttled version of the function
        `}</SyntaxHighlighter>
          
        </div>
      </div>

      {/* 2. Lazy Loading */}
      <div className="method-section">
        <h3>2. Lazy Loading</h3>
        <p>
          Definition: Lazy loading is a design pattern that defers the loading of non-critical resources at page load time. Instead, these resources are loaded when they are needed. This improves initial load time and overall performance.
        </p>

        {/* 2.1 Lazy Loading Images */}
        <div className="sub-section">
          <h4>2.1 Lazy Loading Images</h4>
          <p>
            Definition: Lazy loading images involves loading images only when they are about to enter the viewport, reducing initial load time and saving bandwidth.
          </p>
          
            <SyntaxHighlighter language="javascript" style={atomDark}>{`
        // Example using the 'loading' attribute in <img> tag
        //<img src="large-image.jpg" loading="lazy" alt="A large image">
    
        // JavaScript Alternative:
        const lazyImages = document.querySelectorAll('img.lazy');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
    
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    
        // Methods of Lazy Loading Images:
        // - IntersectionObserver.observe(element) - Observes when the element enters the viewport
        // - IntersectionObserver.unobserve(element) - Stops observing the element
        `}</SyntaxHighlighter>
          
        </div>

        {/* 2.2 Lazy Loading JavaScript Modules */}
        <div className="sub-section">
          <h4>2.2 Lazy Loading JavaScript Modules</h4>
          <p>
            Definition: Lazy loading JavaScript modules involves loading modules only when they are needed, reducing the initial bundle size and improving load times.
          </p>
          
            <SyntaxHighlighter language="javascript" style={atomDark}>{`
        // Example using dynamic imports
        document.getElementById('loadButton').addEventListener('click', async () => {
            const module = await import('./largeModule.js');
            module.doSomething();
        });
    
        // Methods of Lazy Loading JavaScript Modules:
        // - import('./module.js') - Dynamically imports the module
        // - module.default or module.namedExport - Accesses the exported members
        `}</SyntaxHighlighter>
          
        </div>
      </div>

      {/* 3. Memory Management */}
      <div className="method-section">
        <h3>3. Memory Management</h3>
        <p>
          Definition: Memory management involves efficiently managing memory allocation and garbage collection to prevent leaks and optimize performance.
        </p>

        {/* 3.1 Avoiding Memory Leaks */}
        <div className="sub-section">
          <h4>3.1 Avoiding Memory Leaks</h4>
          <p>
            Definition: Ensuring that objects are no longer referenced when they are not needed allows the garbage collector to reclaim memory.
          </p>
          
            <SyntaxHighlighter language="javascript" style={atomDark}>{`
        // Example of avoiding memory leaks
        function createLargeArray() {
            let largeArray = new Array(1000000).fill('Some data');
            // Ensure the large array is dereferenced when no longer needed
            largeArray = null;
        }
    
        createLargeArray();
        // The large array can now be garbage collected
        `}</SyntaxHighlighter>
          
        </div>

        {/* 3.2 Using WeakMap and WeakSet */}
        <div className="sub-section">
          <h4>3.2 Using WeakMap and WeakSet</h4>
          <p>
            Definition: WeakMap and WeakSet hold weak references to objects, allowing them to be garbage collected when no longer in use.
          </p>
          
            <SyntaxHighlighter language="javascript" style={atomDark}>{`
        // Example using WeakMap
        const weakMap = new WeakMap();
        let obj = {};
        weakMap.set(obj, 'some value');
    
        console.log(weakMap.has(obj)); // true
    
        obj = null;
        // The object can now be garbage collected
    
        // Example using WeakSet
        const weakSet = new WeakSet();
        let obj1 = {};
        let obj2 = {};
    
        weakSet.add(obj1);
        weakSet.add(obj2);
    
        console.log(weakSet.has(obj1)); // true
        console.log(weakSet.has(obj2)); // true
    
        obj1 = null;
        // The first object can now be garbage collected
        `}</SyntaxHighlighter>
          
        </div>
      </div>

      {/* 4. Profiling and Debugging */}
      <div className="method-section">
        <h3>4. Profiling and Debugging</h3>
        <p>
          Definition: Profiling and debugging help identify performance bottlenecks and optimize code execution.
        </p>

        {/* 4.1 Using console.time and console.timeEnd */}
        <div className="sub-section">
          <h4>4.1 Using console.time and console.timeEnd</h4>
          <p>
            Definition: These methods measure the time taken by a block of code to execute.
          </p>
          
            <SyntaxHighlighter language="javascript" style={atomDark}>{`
        // Example:
        console.time('myFunction');
        myFunction();
        console.timeEnd('myFunction'); // Output: myFunction: 123.456ms
    
        // Methods:
        // .console.time(label)   - Starts a timer with the specified label
        // .console.timeEnd(label) - Stops the timer and logs the elapsed time
        `}</SyntaxHighlighter>
          
        </div>

        {/* 4.2 Using the Performance API */}
        <div className="sub-section">
          <h4>4.2 Using the Performance API</h4>
          <p>
            Definition: The Performance API provides methods to measure and analyze the performance of web applications.
          </p>
          
            <SyntaxHighlighter language="javascript" style={atomDark}>{`
        // Example:
        const start = performance.now();
        myFunction();
        const end = performance.now();
        console.log(\`myFunction took \${end - start} milliseconds\`);
    
        // Methods:
        // .performance.now() - Returns a high-resolution timestamp
        `}</SyntaxHighlighter>
          
        </div>

        {/* 4.3 Using Browser Developer Tools */}
        <div className="sub-section">
          <h4>4.3 Using Browser Developer Tools</h4>
          <p>
            Definition: Browser developer tools (e.g., Chrome DevTools) offer built-in profiling and debugging tools to analyze performance and debug code.
          </p>
          
            <SyntaxHighlighter language="javascript" style={atomDark}>{`
        // Example Instructions:
        // 1. Open DevTools (F12 or right-click -> Inspect).
        // 2. Go to the 'Performance' tab.
        // 3. Click 'Record' and perform the actions you want to profile.
        // 4. Click 'Stop' to analyze the performance.
    
        // Debugging:
        // 1. Open DevTools (F12 or right-click -> Inspect).
        // 2. Go to the 'Sources' tab.
        // 3. Set breakpoints, step through code, and inspect variables.
        `}</SyntaxHighlighter>
          
        </div>
      </div>
    </div>
  );
}

export default PerformanceOptimization;
