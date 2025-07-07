import React, { useEffect } from 'react';

import 'prismjs/themes/prism.css';
import '../styles/debouncing.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function StringMethods() {
  useEffect(() => {
   window.scrollTo(0,0);
  }, []);

  return (
    <div className="debounce-container">
      <h1>JavaScript String Methods</h1>
      <p>
        This component covers some common string methods in JavaScript, 
        demonstrating how they can be used in practice.
      </p>

      <h2>1. length()</h2>
      <p>Returns the number of characters in a string.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`const str = "Kar Har Maidaan Fateh";
let length = str.length; // Output: 20`}
        </SyntaxHighlighter>
      

      <h2>2. replace()</h2>
      <p>Replaces a substring/pattern in the string.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let replaced = str.replace("Har", "Every"); // Output: "Kar Every Maidaan Fateh"`}
        </SyntaxHighlighter>
      

      <h2>3. indexOf()</h2>
      <p>Returns the first index of occurrence of a value.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let index = str.indexOf("Maidaan"); // Output: 8`}
        </SyntaxHighlighter>
      

      <h2>4. lastIndexOf()</h2>
      <p>Returns the last index of occurrence of a value.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let lastIndex = str.lastIndexOf("Har"); // Output: 4`}
        </SyntaxHighlighter>
      

      <h2>5. startsWith()</h2>
      <p>Checks if a string begins with a specified string.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let starts = str.startsWith("Kar"); // Output: true`}
        </SyntaxHighlighter>
      

      <h2>6. endsWith()</h2>
      <p>Checks if a string ends with a specified string.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let ends = str.endsWith("Fateh"); // Output: true`}
        </SyntaxHighlighter>
      

      <h2>7. slice()</h2>
      <p>Extracts a section of a string and returns it as a new string.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let sliced = str.slice(4, 7); // Output: "Har"`}
        </SyntaxHighlighter>
      

      <h2>8. toUpperCase()</h2>
      <p>Converts a string to uppercase letters.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let upper = str.toUpperCase(); // Output: "KAR HAR MAIDAAN FATEH"`}
        </SyntaxHighlighter>
      

      <h2>9. toLowerCase()</h2>
      <p>Converts a string to lowercase letters.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let lower = str.toLowerCase(); // Output: "kar har maidaan fateh"`}
        </SyntaxHighlighter>
      

      <h2>10. includes()</h2>
      <p>Checks if the given string is found inside a string.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let includes = str.includes("Maidaan"); // Output: true`}
        </SyntaxHighlighter>
      

      <h2>11. repeat()</h2>
      <p>Returns a string by repeating it a given number of times.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let repeated = str.repeat(2); // Output: "Kar Har Maidaan FatehKar Har Maidaan Fateh"`}
        </SyntaxHighlighter>
      

      <h2>12. charAt()</h2>
      <p>Returns the character at a specified index in a string.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let char = str.charAt(4); // Output: "H"`}
        </SyntaxHighlighter>
      

      <h2>13. charCodeAt()</h2>
      <p>Returns the Unicode of the character at a given index.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let code = str.charCodeAt(4); // Output: 72`}
        </SyntaxHighlighter>
      

      <h2>14. fromCharCode()</h2>
      <p>Returns a string from the given UTF-16 code units.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let fromCharCode = String.fromCharCode(72, 101, 108, 108, 111); // Output: "Hello"`}
        </SyntaxHighlighter>
      

      <h2>15. substring()</h2>
      <p>Returns a specified part of the string.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let part = str.substring(4, 7); // Output: "Har"`}
        </SyntaxHighlighter>
      

      <h2>16. padStart()</h2>
      <p>Pads a string at the start to a given length.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let paddedStart = str.padStart(25, " "); // Output: "     Kar Har Maidaan Fateh"`}
        </SyntaxHighlighter>
      

      <h2>17. padEnd()</h2>
      <p>Pads a string at the end to a given length.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let paddedEnd = str.padEnd(25, " "); // Output: "Kar Har Maidaan Fateh     " `}
        </SyntaxHighlighter>
      

      <h2>18. codePointAt()</h2>
      <p>Returns the Unicode point value at a given index.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {"let codePoint = str.codePointAt(4); // Output: 72"}
        </SyntaxHighlighter>
      

      <h2>19. fromCodePoint()</h2>
      <p>Returns a string using the given code points.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`"let fromCodePoint = String.fromCodePoint(72, 101, 108, 108, 111); // Output: "Hello"`}
        </SyntaxHighlighter>
      

      <h2>20. match()</h2>
      <p>Returns the result of matching the string with a regex.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let match = str.match(/Har/g); // Output: ["Har"]`}
        </SyntaxHighlighter>
      

      <h2>21. matchAll()</h2>
      <p>Returns an iterator of results matching with a regex.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let matchAll = str.matchAll(/a/g);
for (const match of matchAll) {
  console.log(match);
}
// Output: ["a"], ["a"], ["a"], ["a"]`}
        </SyntaxHighlighter>
      

      <h2>22. localeCompare()</h2>
      <p>Compares two strings in the current locale.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let comparison = str.localeCompare("Har"); // Output: 1`}
        </SyntaxHighlighter>
      

      <h2>23. search()</h2>
      <p>Searches for a specified value in the string and returns its position.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let position = str.search("Maidaan"); // Output: 8`}
        </SyntaxHighlighter>
      

      <h2>24. replaceAll()</h2>
      <p>Returns a string by replacing all matching patterns.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let replacedAll = str.replaceAll("Har", "Victory"); // Output: "Kar Victory Maidaan Victory"`}
        </SyntaxHighlighter>
      

      <h2>25. concat()</h2>
      <p>Concatenates the arguments to the calling string.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let concatenated = str.concat(" - ", "Motivational Song"); // Output: "Kar Har Maidaan Fateh - Motivational Song"`}
        </SyntaxHighlighter>
      

      <h2>26. split()</h2>
      <p>Splits a string into an array of substrings.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let splitted = str.split(" "); // Output: ["Kar", "Har", "Maidaan", "Fateh"]`}
        </SyntaxHighlighter>
      

      <h2>27. trim()</h2>
      <p>Removes whitespace from both ends of a string.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let trimmed = "   Hello World!   ".trim(); // Output: "Hello World!"`}
        </SyntaxHighlighter>
      

      <h2>28. trimStart()</h2>
      <p>Removes whitespace from the start of a string.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let trimmedStart = "   Hello World!   ".trimStart(); // Output: "Hello World!   "`}
        </SyntaxHighlighter>
      

      <h2>29. trimEnd()</h2>
      <p>Removes whitespace from the end of a string.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let trimmedEnd = "   Hello World!   ".trimEnd(); // Output: "   Hello World!"`}
        </SyntaxHighlighter>
      

      <h2>30. includes()</h2>
      <p>Checks if a string contains a specified substring.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let contains = str.includes("Kar"); // Output: true`}
        </SyntaxHighlighter>
      

      <h2>31. toLocaleLowerCase()</h2>
      <p>Returns the calling string value converted to lowercase, according to any locale.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let localeLower = str.toLocaleLowerCase(); // Output: "kar har maidaan fateh"`}
        </SyntaxHighlighter>
      

      <h2>32. toLocaleUpperCase()</h2>
      <p>Returns the calling string value converted to uppercase, according to any locale.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let localeUpper = str.toLocaleUpperCase(); // Output: "KAR HAR MAIDAAN FATEH"`}
        </SyntaxHighlighter>
      

      <h2>33. valueOf()</h2>
      <p>Returns the primitive value of a String object.</p>
      
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`let value = str.valueOf(); // Output: "Kar Har Maidaan Fateh"`}
        </SyntaxHighlighter>
      
    </div>
  );
}

export default StringMethods;
