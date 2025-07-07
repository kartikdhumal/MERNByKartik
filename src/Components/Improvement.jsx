import React from 'react';
import '../styles/debouncing.css';

function Improvement() {
    const interviewQuestions = [
        {
            id: 1,
            title: "Interview for Full Stack Developer",
            questions: [
                "Functional vs Class Components",
                "useMemo in React",
                "React Performance Optimization",
                "Props in React",
                "Error Boundaries",
                "Server-Side Rendering",
                "LEFT JOIN in SQL",
                "Inner Join vs Left Join",
                "Indexes in MySQL",
                "React Children Props",
                "Diffrence let vs var vs const",
                "Promises in JavaScript",
                "Async/Await in JavaScript",
                "Event Loop in JavaScript",
                "Hoisting in JavaScript",
                "MongoDB Aggregate Functions",
                "Two sum problem of LeetCode",
                "INNER JOIN practical question",
            ]
        },
        {
            id: 2,
            title: "Interview for React.js developer",
            questions: [
                "What is a Reference in React?",
                "Naming Convention in React",
                "What is flux?",
                "useRef in React",
                "Event Loop with Call Stack",
                "Processes and Threads",
                "Cluster in Node.js",
                "Template Literals",
                "ACID Properties in Database",
            ]
        }
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
