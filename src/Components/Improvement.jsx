import React from 'react';
import '../styles/debouncing.css';

function Improvement() {
    const interviewQuestions = [
                {
            id: 1,
            title: "JavaScript",
            questions: [
                // Core JavaScript Concepts
                "What is the difference between null and undefined?",
                "Explain the difference between var, let, and const",
                "What is temporal dead zone in JavaScript?",
                "What is hoisting in JavaScript?",
                "Explain event bubbling and capturing",
                "What is event delegation and why is it useful?",
                
                // Functions & Scope
                "What are closures and how do they work?",
                "Explain the 'this' keyword and its behavior",
                "What is function currying?",
                "Difference between arrow functions and regular functions",
                "What is lexical scope in JavaScript?",
                
                // Arrays & Objects
                "Difference between map, forEach, filter, and reduce",
                "What are different ways to clone an object?",
                "Explain shallow copy vs deep copy",
                "How to check if an object is empty?",
                "What is object destructuring?",
                
                // Asynchronous JavaScript
                "What is the difference between Promise and async/await?",
                "Explain Promise.all(), Promise.race(), Promise.allSettled()",
                "What is callback hell and how to avoid it?",
                "How does event loop work in JavaScript?",
                "What are microtasks and macrotasks?",
                
                // DOM Manipulation
                "What is Virtual DOM?",
                "Explain createElement vs innerHTML",
                "How to improve DOM manipulation performance?",
                "What is DOM reflow and repaint?",
                
                // JavaScript Optimization
                "What is memoization?",
                "How to handle memory leaks?",
                "Explain debouncing and throttling",
                "Ways to optimize JavaScript code",
                
                // Error Handling
                "Different types of errors in JavaScript",
                "How to handle errors in async/await?",
                "What is Error Boundaries?",
                
                // Modern JavaScript
                "What are JavaScript modules?",
                "Explain spread and rest operators",
                "What are template literals?",
                "What are Sets and Maps?",
                "What is the Fetch API?",
                "What is CORS?",
                
                // Browser Storage
                "Difference between localStorage and sessionStorage",
                "What are cookies? How to set/get them?",
                "What is IndexedDB?",
                
                // Coding Problems
                "Implement debounce function",
            ]
        },
        {
            id: 1,
            title: "React.js",
            questions: [
                "Functional vs Class Components",
                "useMemo in React",
                "React Performance Optimization",
                "Props in React",
                "Error Boundaries",
                "Server-Side Rendering",
                "React Children Props",
                "What is a Reference in React?",
                "Naming Convention in React",
                "useRef in React",
                "What is Flux?"
            ]
        },
        {
            id: 2,
            title: "Node.js & Express",
            questions: [
                "Cluster in Node.js",
                "Middleware in Express",
                "Async/Await in Node.js",
                "Event Loop"
            ]
        },
        {
            id: 3,
            title: "MongoDB & MySQL",
            questions: [
                "LEFT JOIN in SQL",
                "Inner Join vs Left Join",
                "Indexes in MySQL",
                "MongoDB Aggregate Functions",
                "ACID Properties in Database",
                "INNER JOIN practical question",
                "Difference between MongoDB and MySQL"
            ]
        },
        {
            id: 4,
            title: "DSA - Array",
            questions: [
                "Reverse an array",
                "Find the maximum element in an array",
                "Find the minimum element in an array",
                "Find the sum of all elements in an array",
                "Find the average of all elements in an array",
                "Check if an array contains a specific element",
                "Remove duplicates from an array",
                "Sort an array in ascending order",
                "Sort an array in descending order",
                "Find the occurrence of an integer in the array",
                "Move all the negative elements to one side of the array",
                "Find duplicates in an array",
                "Find the first repeating element in an array of integers",
                "Find the first non-repeating element in a given array of integers",
                "Rotate an array by k positions",
                "Merge two sorted arrays",
                "Find the Kth largest and Kth smallest number in an array",
                "Sort the array of 0s, 1s, and 2s",
                "Subarray with given Sum",
                "Find all pairs in an array that sum to a specific value",
                "Find the contiguous subarray with the maximum sum (Kadane's Algorithm)",
                "Find the length of the longest increasing subsequence",
                "Find the length of the longest consecutive sequence",
                "Find the missing number in an array of n-1 integers",
                "Find the majority element in an array",
                "Find duplicates in an array",
                "Find a peak element which is not smaller than its neighbors",
                "Find the median of two sorted arrays",
                "Check if an array is a subset of another array",
                "Implement a binary search on a sorted array",
                "Check if an array is sorted",
                "Implement a function to flatten a nested array",
                "Find the smallest missing positive integer in an array",
                "Partition an array into two subsets such that their sums are equal",
                "Find the number of inversions in an array",
                "Implement a function to shuffle an array randomly",
                "Find all unique triplets in an array that sum to zero",
                "Find the number of subarrays with a given sum",
                "Implement an algorithm to find the maximum difference between two elements in an array such that the larger element comes after the smaller one",
                "Two-sum program - Check if there are two numbers in an array that add up to a specific target (two sum problem)",
                "Find the maximum sum of a subarray of size k",
                "Implement the Dutch National Flag problem (sort an array of 0s, 1s, and 2s)"
            ]
        },
        {
            id: 5,
            title: "DSA - String",
            questions: [
                "Reverse a string",
                "Check if a string is a palindrome",
                "Find the length of the longest substring without repeating characters",
                "Find the first non-repeating character in a string",
                "Count the number of vowels and consonants in a string",
                "Implement a function to perform basic string compression",
                "Check if two strings are anagrams of each other",
                "Implement a function to find the longest common prefix among an array of strings",
                "Implement the strstr function (find the first occurrence of a substring)",
                "Count the occurrences of a character in a string",
                "Find all permutations of a given string",
                "Check if a string contains only digits",
                "Convert a string to an integer",
                "Convert an integer to a string",
                "Implement the atoi function (convert string to integer)",
                "Find the length of the longest palindromic substring",
                "Find all substrings of a string",
                "Find the longest repeating substring",
                "Implement a function to check if a string contains all unique characters",
                "Remove all white spaces from a string",
                "Remove all duplicate characters in a string",
                "Find the smallest window in a string containing all characters of another string",
                "Check if a string is a valid number",
                "Check if a string is a valid palindrome ignoring non-alphanumeric characters",
                "Implement a function to return the count of distinct substrings of a string",
                "Find the longest common subsequence between two strings",
                "Replace all occurrences of a substring in a string",
                "Check if two strings are rotations of each other",
                "Find the minimum number of characters to be inserted to convert a string to a palindrome",
                "Split a string into words",
                "Find the longest word in a string",
                "Implement a function to capitalize the first letter of each word in a string",
                "Implement a function to reverse the words in a string",
                "Implement a function to check if a string is a valid email address",
                "Find the edit distance (Levenshtein distance) between two strings",
                "Implement a function to remove all adjacent duplicates in a string",
                "Check if one string is a subsequence of another string",
                "Implement a function to find the smallest rotation of a string that is lexicographically smallest",
                "Find the longest palindromic subsequence in a string",
                "Implement a function to determine if a string has all unique characters without using additional data structures"
            ]
        },
    ];

    return (
        <div className="debounce-container">
            <div className="interview-container">
                <h1 className="interview-main-title">Technical Interview Questions</h1>

                {interviewQuestions.map((interview) => (
                    <section key={interview.id} className="interview-group">
                        <h2 className="interview-section-title">
                            {interview.title}
                        </h2>
                        <div className="questions-grid">
                            {interview.questions.map((question, index) => (
                                <p key={index} className="question-card">
                                    {index + 1}. {question}
                                </p>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}

export default Improvement;
