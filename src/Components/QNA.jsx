import React from 'react';
import '../styles/QNA.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function QNA() {
  return (
    <div className="container">
      <h2 className="section-title">DBMS</h2>

      <div className="subsection">

        <div className="faq-item">
          <h4 className="faq-question">What is Normalization?</h4>
          <p className="faq-answer">
            Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves dividing large tables into smaller, related tables and defining relationships between them.
          </p>
        </div>

        <div className="faq-item">
          <h4 className="faq-question">What are the different Normal Forms?</h4>
          <p className="faq-answer">
            Normalization is a systematic approach of decomposing tables to eliminate data redundancy and undesirable characteristics like Insertion, Update, and Deletion Anomalies. It involves dividing large tables into smaller (and less redundant) tables and defining relationships between them. The primary goal is to isolate data so that additions, deletions, and modifications can be made in just one table and then propagated through the rest of the database via defined relationships.
            <br /><br />
            <strong>Here are the different Normal Forms with examples:</strong>

            {/* First Normal Form (1NF) */}
            <br /><br />
            <strong>1. First Normal Form (1NF):</strong>
            <br />
            A table is in <b>First Normal Form</b> when:
            <ul>
              <li>Each table cell should contain <b>only one value</b>.</li>
              <li>Entries in a column are of the <b>same data type</b>.</li>
              <li>Each column has a <b>unique name</b>.</li>
              <li>The order in which data is stored does not matter.</li>
            </ul>

            <strong>Example:</strong>
            <br />
            *Unnormalized Table:*
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Student_ID</th>
                  <th>Name</th>
                  <th>Courses</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Kartik</td>
                  <td>Math, Physics</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Shraddha</td>
                  <td>Chemistry</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Megh</td>
                  <td>Biology, English</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Janvi</td>
                  <td>Math</td>
                </tr>
              </tbody>
            </table>

            <br />
            *After Applying 1NF:*
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Student_ID</th>
                  <th>Name</th>
                  <th>Course</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Kartik</td>
                  <td>Math</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Kartik</td>
                  <td>Physics</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Shraddha</td>
                  <td>Chemistry</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Megh</td>
                  <td>Biology</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Megh</td>
                  <td>English</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Janvi</td>
                  <td>Math</td>
                </tr>
              </tbody>
            </table>

            {/* Second Normal Form (2NF) */}
            <br /><br />
            <strong>2. Second Normal Form (2NF):</strong>
            <br />
            A table is in <b>Second Normal Form</b> when:
            <ul>
              <li>It is already in <b>1NF</b>.</li>
              <li>All <b>non-key attributes</b> are fully functionally dependent on the <b>primary key</b>.</li>
            </ul>

            <strong>Example:</strong>
            <br />
            *Assuming a table with composite primary key (Student_ID, Course):*
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Student_ID</th>
                  <th>Course</th>
                  <th>Instructor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Math</td>
                  <td>Dinesh Kartik</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Physics</td>
                  <td>Sohel Khan</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Chemistry</td>
                  <td>Jhanvi Sharma</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Biology</td>
                  <td>Madhav Mishra</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>English</td>
                  <td>Prem Dhumal</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Math</td>
                  <td>Dinesh Kartik</td>
                </tr>
              </tbody>
            </table>

            <br />
            *Issues:* The <b>Instructor</b> is dependent only on the <b>Course</b>, not on the combination of <b>Student_ID</b> and <b>Course</b>.

            *To achieve 2NF:*
            - <b>Create two tables</b>: `Students` and `Courses`.

            <b>Students Table:</b>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Student_ID</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Prem</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Poonam</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Megh</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Janvi</td>
                </tr>
              </tbody>
            </table>

            <b>Courses Table:</b>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Instructor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Math</td>
                  <td>Dinesh Kartik</td>
                </tr>
                <tr>
                  <td>Physics</td>
                  <td>Sohel Khan</td>
                </tr>
                <tr>
                  <td>Chemistry</td>
                  <td>Jhanvi Sharma</td>
                </tr>
                <tr>
                  <td>Biology</td>
                  <td>Madhav Mishra</td>
                </tr>
                <tr>
                  <td>English</td>
                  <td>Prem Dhumal</td>
                </tr>
              </tbody>
            </table>

            <b>Enrollment Table:</b>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Student_ID</th>
                  <th>Course</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Math</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Physics</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Chemistry</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Biology</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>English</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Math</td>
                </tr>
              </tbody>
            </table>

            <br /><br />
            <strong>3. Third Normal Form (3NF):</strong>
            <br />
            A table is in <b>Third Normal Form</b> when:
            <ul>
              <li>It is already in <b>2NF</b>.</li>
              <li>All the <b>attributes</b> are <b>only dependent</b> on the <b>primary key</b>.</li>
              <li>There are <b>no transitive dependencies</b>.</li>
            </ul>

            <strong>Example:</strong>
            <br />
            *Assuming the `Courses` table has an additional attribute `Department`:*
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Instructor</th>
                  <th>Department</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Math</td>
                  <td>Dinesh Kartik</td>
                  <td>Science</td>
                </tr>
                <tr>
                  <td>Physics</td>
                  <td>Sohel Khan</td>
                  <td>Science</td>
                </tr>
                <tr>
                  <td>Chemistry</td>
                  <td>Jhanvi Sharma</td>
                  <td>Science</td>
                </tr>
                <tr>
                  <td>Biology</td>
                  <td>Madhav Mishra</td>
                  <td>Science</td>
                </tr>
                <tr>
                  <td>English</td>
                  <td>Prem Dhumal</td>
                  <td>Arts</td>
                </tr>
              </tbody>
            </table>

            <br />
            *Issue:* `Department` depends on `Course`, which in turn depends on `Student_ID`. This is a <b>transitive dependency</b>.

            *To achieve 3NF:*
            - <b>Create three tables</b>: `Students`, `Courses`, and `Departments`.

            <b>Departments Table:</b>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Department_ID</th>
                  <th>Department_Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Science</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Arts</td>
                </tr>
              </tbody>
            </table>

            <b>Courses Table (Updated):</b>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Instructor</th>
                  <th>Department_ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Math</td>
                  <td>Dinesh Kartik</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Physics</td>
                  <td>Sohel Khan</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Chemistry</td>
                  <td>Jhanvi Sharma</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Biology</td>
                  <td>Madhav Mishra</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>English</td>
                  <td>Prem Dhumal</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>

            <b>Enrollment Table (Remains Same):</b>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Student_ID</th>
                  <th>Course</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Math</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Physics</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Chemistry</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Biology</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>English</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Math</td>
                </tr>
              </tbody>
            </table>

            <br /><br />
            <strong>4. Boyce-Codd Normal Form (BCNF):</strong>
            <br />
            A table is in <b>Boyce-Codd Normal Form</b> when:
            <ul>
              <li>It is already in <b>3NF</b>.</li>
              <li>For every functional dependency <b>A → B</b>, <b>A</b> should be a <b>super key</b>.</li>
            </ul>

            <strong>Example:</strong>
            <br />
            *Assuming a table where:*
            - <b>Course</b> → <b>Instructor</b>
            - <b>Instructor</b> → <b>Department_ID</b>

            *Here, `Instructor` is not a super key but determines `Department_ID`, leading to a violation of BCNF.*

            *To achieve BCNF:*
            - <b>Create separate tables</b> to ensure that every determinant is a super key.

            <b>Instructors Table:</b>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Instructor</th>
                  <th>Department_ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dinesh Kartik</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Sohel Khan</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Jhanvi Sharma</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Madhav Mishra</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Prem Dhumal</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>

            <b>Courses Table (Final):</b>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Instructor</th>
                  <th>Department_ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Math</td>
                  <td>Dinesh Kartik</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Physics</td>
                  <td>Sohel Khan</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Chemistry</td>
                  <td>Jhanvi Sharma</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Biology</td>
                  <td>Madhav Mishra</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>English</td>
                  <td>Prem Dhumal</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>

            By following these steps, the database schema adheres to BCNF, ensuring minimal redundancy and enhanced data integrity.
          </p>
        </div>

      </div>

      <div className="subsection">

        <div className="faq-item">
          <h4 className="faq-question">What does ACID stand for?</h4>
          <p className="faq-answer">
            ACID stands for <b>Atomicity</b>, <b>Consistency</b>, <b>Isolation</b>, and <b>Durability</b>. <br />These properties ensure reliable processing of database transactions.
          </p>
        </div>

        <div className="faq-item">
          <h4 className="faq-question">Explain each ACID property.</h4>
          <p className="faq-answer">
            <ul>
              <li><strong>Atomicity:</strong> Ensures that all parts of a transaction are completed; if not, the transaction is aborted.
                <div className="faq-item">
                  <strong>Example:</strong> Imagine Megh wants to transfer ₹1,000 from his bank account to Bablu's account. Atomicity ensures that both actions—deducting ₹1,000 from Megh's account and adding ₹1,000 to Bablu's account—are completed successfully. If, for any reason, the second action fails (e.g., system crash after deducting the amount), the entire transaction is rolled back, and Megh's ₹1,000 remains in his account. This prevents scenarios where Megh loses money without Bablu receiving it.
                </div>
              </li>
              <li><strong>Consistency:</strong> Ensures that a transaction brings the database from one valid state to another, maintaining database invariants.
                <div className="faq-item">
                  <strong>Example:</strong> In a banking system, there might be a rule that the total amount of money across all accounts must remain constant unless a deposit or withdrawal occurs. When Megh transfers ₹1,000 to Bablu, consistency ensures that the total sum of all accounts before and after the transaction remains accurate. If the transfer would violate any database rules (like allowing a negative balance), the transaction is rejected to maintain consistency.
                </div>
              </li>
              <li><strong>Isolation:</strong> Ensures that concurrent transactions do not interfere with each other.
                <div className="faq-item">
                  <strong>Example:</strong> Suppose Megh is transferring ₹1,000 to Bablu while, at the same time, Bablu is transferring ₹500 to Megh. Isolation ensures that these two transactions are processed independently without affecting each other. This means Megh's transfer will either complete entirely or not at all without being influenced by Bablu's simultaneous transfer, and vice versa. As a result, both transfers maintain their integrity without causing any inconsistencies in either account.
                </div>
              </li>
              <li><strong>Durability:</strong> Ensures that once a transaction is committed, it remains so, even in the case of a system failure.
                <div className="faq-item">
                  <strong>Example:</strong> After Megh successfully transfers ₹1,000 to Bablu's account and the transaction is committed, durability guarantees that this change is permanently recorded in the database. Even if the system crashes immediately after the transaction, the ₹1,000 transfer will still be reflected in Bablu's account once the system is restored. This ensures that committed transactions are not lost and that the database remains reliable.
                </div>
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div className="subsection">

        <div className="faq-item">
          <h4 className="faq-question">What are some advanced MySQL queries?</h4>
          <p className="faq-answer">
            <strong>Examples:</strong>
            <ul>
              <li><strong>JOINs with Table Examples:</strong>
                {/* INNER JOIN Example */}
                <div>
                  <strong>1. INNER JOIN:</strong>
                  <br />
                  An<b>INNER JOIN</b> returns records that have matching values in both tables.

                  <strong>Sample Tables:</strong>
                  <br />
                  <strong>Students Table:</strong>
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Student_ID</th>
                        <th>Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Kartik</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Shraddha</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Megh</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Janvi</td>
                      </tr>
                    </tbody>
                  </table>

                  <strong>Enrollments Table:</strong>
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Enrollment_ID</th>
                        <th>Student_ID</th>
                        <th>Course_ID</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>101</td>
                        <td>1</td>
                        <td>201</td>
                      </tr>
                      <tr>
                        <td>102</td>
                        <td>1</td>
                        <td>202</td>
                      </tr>
                      <tr>
                        <td>103</td>
                        <td>2</td>
                        <td>203</td>
                      </tr>
                      <tr>
                        <td>104</td>
                        <td>3</td>
                        <td>204</td>
                      </tr>
                      <tr>
                        <td>105</td>
                        <td>3</td>
                        <td>205</td>
                      </tr>
                    </tbody>
                  </table>

                  <strong>Courses Table:</strong>
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Course_ID</th>
                        <th>Course_Name</th>
                        <th>Instructor</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>201</td>
                        <td>Mathematics</td>
                        <td>Mr. Sharma</td>
                      </tr>
                      <tr>
                        <td>202</td>
                        <td>Physics</td>
                        <td>Ms. Patel</td>
                      </tr>
                      <tr>
                        <td>203</td>
                        <td>Chemistry</td>
                        <td>Dr. Dhumal</td>
                      </tr>
                      <tr>
                        <td>204</td>
                        <td>Biology</td>
                        <td>Mr. Singh</td>
                      </tr>
                      <tr>
                        <td>205</td>
                        <td>English</td>
                        <td>Ms. Mehta</td>
                      </tr>
                    </tbody>
                  </table>

                  <strong>Query:</strong>
                  <SyntaxHighlighter language="javascript" style={atomDark}>
                    {`
SELECT Students.Name, Courses.Course_Name
FROM Students
INNER JOIN Enrollments ON Students.Student_ID = Enrollments.Student_ID
INNER JOIN Courses ON Enrollments.Course_ID = Courses.Course_ID;
`}
                  </SyntaxHighlighter>

                  <strong>Result:</strong>
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Course_Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Kartik</td>
                        <td>Mathematics</td>
                      </tr>
                      <tr>
                        <td>Kartik</td>
                        <td>Physics</td>
                      </tr>
                      <tr>
                        <td>Shraddha</td>
                        <td>Chemistry</td>
                      </tr>
                      <tr>
                        <td>Megh</td>
                        <td>Biology</td>
                      </tr>
                      <tr>
                        <td>Megh</td>
                        <td>English</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* LEFT JOIN Example */}
                <div>
                  <strong>2. LEFT JOIN (LEFT OUTER JOIN):</strong>
                  <br />
                  A<b>LEFT JOIN</b> returns all records from the left table and the matched records from the right table. If there is no match, the result is `NULL` on the right side.

                  <strong>Query:</strong>
                  <SyntaxHighlighter language="javascript" style={atomDark}>
                    {`
SELECT Students.Name, Courses.Course_Name
FROM Students
LEFT JOIN Enrollments ON Students.Student_ID = Enrollments.Student_ID
LEFT JOIN Courses ON Enrollments.Course_ID = Courses.Course_ID;
`}
                  </SyntaxHighlighter>

                  <strong>Result:</strong>
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Course_Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Kartik</td>
                        <td>Mathematics</td>
                      </tr>
                      <tr>
                        <td>Kartik</td>
                        <td>Physics</td>
                      </tr>
                      <tr>
                        <td>Shraddha</td>
                        <td>Chemistry</td>
                      </tr>
                      <tr>
                        <td>Megh</td>
                        <td>Biology</td>
                      </tr>
                      <tr>
                        <td>Megh</td>
                        <td>English</td>
                      </tr>
                      <tr>
                        <td>Janvi</td>
                        <td>Math</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* RIGHT JOIN Example */}
                <div>
                  <strong>3. RIGHT JOIN (RIGHT OUTER JOIN):</strong>
                  <br />
                  A<b>RIGHT JOIN</b> returns all records from the right table and the matched records from the left table. If there is no match, the result is `NULL` on the left side.

                  <strong>Query:</strong>
                  <SyntaxHighlighter language="javascript" style={atomDark}>
                    {`
SELECT Students.Name, Courses.Course_Name
FROM Students
RIGHT JOIN Enrollments ON Students.Student_ID = Enrollments.Student_ID
RIGHT JOIN Courses ON Enrollments.Course_ID = Courses.Course_ID;
`}
                  </SyntaxHighlighter>

                  <strong>Result:</strong>
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Course_Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Kartik</td>
                        <td>Mathematics</td>
                      </tr>
                      <tr>
                        <td>Kartik</td>
                        <td>Physics</td>
                      </tr>
                      <tr>
                        <td>Shraddha</td>
                        <td>Chemistry</td>
                      </tr>
                      <tr>
                        <td>Megh</td>
                        <td>Biology</td>
                      </tr>
                      <tr>
                        <td>Megh</td>
                        <td>English</td>
                      </tr>
                      <tr>
                        <td>Janvi</td>
                        <td>Math</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* FULL OUTER JOIN Example */}
                <div>
                  <strong>4. FULL OUTER JOIN:</strong>
                  <br />
                  A<b>FULL OUTER JOIN</b> returns all records when there is a match in either left or right table. MySQL does not support FULL OUTER JOIN directly, but it can be achieved using a combination of LEFT JOIN and RIGHT JOIN with UNION.

                  <strong>Query:</strong>
                  <SyntaxHighlighter language="javascript" style={atomDark}>
                    {`
SELECT Students.Name, Courses.Course_Name
FROM Students
LEFT JOIN Enrollments ON Students.Student_ID = Enrollments.Student_ID
LEFT JOIN Courses ON Enrollments.Course_ID = Courses.Course_ID
UNION
SELECT Students.Name, Courses.Course_Name
FROM Students
RIGHT JOIN Enrollments ON Students.Student_ID = Enrollments.Student_ID
RIGHT JOIN Courses ON Enrollments.Course_ID = Courses.Course_ID;
`}
                  </SyntaxHighlighter>

                  <strong>Result:</strong>
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Course_Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Kartik</td>
                        <td>Mathematics</td>
                      </tr>
                      <tr>
                        <td>Kartik</td>
                        <td>Physics</td>
                      </tr>
                      <tr>
                        <td>Shraddha</td>
                        <td>Chemistry</td>
                      </tr>
                      <tr>
                        <td>Megh</td>
                        <td>Biology</td>
                      </tr>
                      <tr>
                        <td>Megh</td>
                        <td>English</td>
                      </tr>
                      <tr>
                        <td>Janvi</td>
                        <td>Math</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <strong>5. Important SQL Queries</strong>
                  <br />
                  You can rename tables and columns in your queries using the `AS` keyword to make them more readable or to avoid conflicts.

                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>DOB</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Megh</td>
                        <td>Pandit</td>
                        <td>1985-01-15</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Bablu</td>
                        <td>Pandit</td>
                        <td>1990-05-20</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Prem</td>
                        <td>Tripathi</td>
                        <td>1992-07-30</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Janvi</td>
                        <td>Gupta</td>
                        <td>1988-03-11</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>J P</td>
                        <td>Yadav</td>
                        <td>1986-09-25</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Ramakant</td>
                        <td>Pandit</td>
                        <td>1987-12-02</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Ratishankar</td>
                        <td>Shukla</td>
                        <td>1993-06-15</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Akhandanand</td>
                        <td>Tripathi</td>
                        <td>1991-04-10</td>
                      </tr>
                    </tbody>
                  </table>

                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>userId</th>
                        <th>Position</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>Manager</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>2</td>
                        <td>Employee</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>3</td>
                        <td>Employee</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>4</td>
                        <td>Manager</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>5</td>
                        <td>Intern</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>6</td>
                        <td>Intern</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>7</td>
                        <td>Employee</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>8</td>
                        <td>Manager</td>
                      </tr>
                    </tbody>
                  </table>

                  <div>
                    <h3>SQL Queries:</h3>
                    <ol>
                      <li>
                        <strong>Fetch records that are present in one table but not in another table:</strong>
                        <SyntaxHighlighter language="javascript" style={atomDark}>
                          SELECT * FROM UserDetails WHERE userId NOT IN (SELECT id FROM Users);
                        </SyntaxHighlighter>
                        <strong>Output:</strong>
                        <table className="comparison-table">
                          <thead>
                            <tr>
                              <th>id</th>
                              <th>userId</th>
                              <th>Position</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                      <li>
                        <strong>Fetch all users who are not associated with any user detail:</strong>
                        <SyntaxHighlighter language="javascript" style={atomDark}>
                          SELECT * FROM Users WHERE id NOT IN (SELECT userId FROM UserDetails);
                        </SyntaxHighlighter>
                        <strong>Output:</strong>
                        <table className="comparison-table">
                          <thead>
                            <tr>
                              <th>id</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>DOB</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>3</td>
                              <td>Prem</td>
                              <td>Tripathi</td>
                              <td>1992-07-30</td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>Ramakant</td>
                              <td>Pandit</td>
                              <td>1987-12-02</td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                      <li>
                        <strong>Fetch all users who were born in the year 1990:</strong>
                        <SyntaxHighlighter language="javascript" style={atomDark}>
                          SELECT * FROM Users WHERE YEAR(DOB) = 1990;
                        </SyntaxHighlighter>
                        <strong>Output:</strong>
                        <table className="comparison-table">
                          <thead>
                            <tr>
                              <th>id</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>DOB</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>2</td>
                              <td>Bablu</td>
                              <td>Pandit</td>
                              <td>1990-05-20</td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                      <li>
                        <strong>Fetch all users who have a record in UserDetails:</strong>
                        <SyntaxHighlighter language="javascript" style={atomDark}>
                          SELECT * FROM Users WHERE id IN (SELECT userId FROM UserDetails);
                        </SyntaxHighlighter>
                        <strong>Output:</strong>
                        <table className="comparison-table">
                          <thead>
                            <tr>
                              <th>id</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>DOB</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Megh</td>
                              <td>Pandit</td>
                              <td>1985-01-15</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Bablu</td>
                              <td>Pandit</td>
                              <td>1990-05-20</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>Janvi</td>
                              <td>Gupta</td>
                              <td>1988-03-11</td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>Ratishankar</td>
                              <td>Shukla</td>
                              <td>1993-06-15</td>
                            </tr>
                            <tr>
                              <td>8</td>
                              <td>Akhandanand</td>
                              <td>Tripathi</td>
                              <td>1991-04-10</td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                      <li>
                        <strong>Fetch project-wise count of users:</strong>
                        <SyntaxHighlighter language="javascript" style={atomDark}>
                          SELECT position, COUNT(*) as user_count FROM UserDetails GROUP BY position;
                        </SyntaxHighlighter>
                        <strong>Output:</strong>
                        <table className="comparison-table">
                          <thead>
                            <tr>
                              <th>Position</th>
                              <th>User Count</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Manager</td>
                              <td>3</td>
                            </tr>
                            <tr>
                              <td>Employee</td>
                              <td>3</td>
                            </tr>
                            <tr>
                              <td>Intern</td>
                              <td>2</td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                      <li>
                        <strong>Fetch user names even if the position value is not present:</strong>
                        <SyntaxHighlighter language="javascript" style={atomDark}>
                          SELECT U.FirstName, U.LastName, UD.position
                          FROM Users U LEFT JOIN UserDetails UD ON U.id = UD.userId;
                        </SyntaxHighlighter>
                        <strong>Output:</strong>
                        <table className="comparison-table">
                          <thead>
                            <tr>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Position</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Megh</td>
                              <td>Pandit</td>
                              <td>Manager</td>
                            </tr>
                            <tr>
                              <td>Bablu</td>
                              <td>Pandit</td>
                              <td>Employee</td>
                            </tr>
                            <tr>
                              <td>Prem</td>
                              <td>Tripathi</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>Janvi</td>
                              <td>Gupta</td>
                              <td>Manager</td>
                            </tr>
                            <tr>
                              <td>J P</td>
                              <td>Yadav</td>
                              <td>Intern</td>
                            </tr>
                            <tr>
                              <td>Ramakant</td>
                              <td>Pandit</td>
                              <td>Intern</td>
                            </tr>
                            <tr>
                              <td>Ratishankar</td>
                              <td>Shukla</td>
                              <td>Employee</td>
                            </tr>
                            <tr>
                              <td>Akhandanand</td>
                              <td>Tripathi</td>
                              <td>Manager</td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                    </ol>
                  </div>
                </div>


              </li>

            </ul>
          </p>
        </div>

        <div className="faq-item">
          <h4 className="faq-question">What are indexes in MySQL and how do you create them?</h4>
          <p className="faq-answer">
            Indexes are used to speed up the retrieval of data from the database. They can be created on one or more columns of a table.
            <br />
            <b>Creating an Index:</b>
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {`
CREATE INDEX idx_name ON Students (Name);
              `}
            </SyntaxHighlighter>
            <br />
            <b>Types of Indexes:</b>
            <ul>
              <li>Primary Key Index</li>
              <li>Unique Index</li>
              <li>Composite Index</li>
              <li>Full-Text Index</li>
            </ul>
          </p>
        </div>
      </div>

      {/* Operating System Section */}
      <h2 className="section-title">Operating System</h2>

      <div className="faq-item">
        <h3 className="faq-question">What is the difference between a process and a thread?</h3>
        <p className="faq-answer">
          <strong>Process:</strong> A process is an execution of a program
          <br />
          <strong>Thread:</strong>  a thread is a single execution sequence within the process
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">What are the different states of a process?</h3>
        <p className="faq-answer">
          Processes typically have the following states:
          <ul>
            <li><strong>New:</strong> The process is being created.</li>
            <li><strong>Running:</strong> Instructions are being executed.</li>
            <li><strong>Waiting:</strong> The process is waiting for some event (e.g., I/O).</li>
            <li><strong>Ready:</strong> The process is ready to execute and waiting for CPU time.</li>
            <li><strong>Terminated:</strong> The process has finished execution.</li>
          </ul>
        </p>
      </div>

      {/* Networking Section */}
      <h2 className="section-title">Networking</h2>

      <div className="faq-item">
        <h3 className="faq-question">What are the layers of the OSI model?</h3>
        <p className="faq-answer">
          The OSI model consists of seven layers:
          <ol>
            <li><strong>Physical Layer:</strong> Transmits raw bit streams over a physical medium.</li>
            <li><strong>Data Link Layer:</strong> Provides node-to-node data transfer and handles error correction.</li>
            <li><strong>Network Layer:</strong> Determines how data is sent to the receiver from the sender.</li>
            <li><strong>Transport Layer:</strong> Provides reliable data transfer services to the upper layers.</li>
            <li><strong>Session Layer:</strong> Manages sessions between applications.</li>
            <li><strong>Presentation Layer:</strong> Translates data between the application layer and the network format.</li>
            <li><strong>Application Layer:</strong> Provides network services to the end-user applications.</li>
          </ol>
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">What are different networking protocols and their definitions?</h3>
        <p className="faq-answer">
          Understanding various networking protocols is essential for grasping how data is transmitted across networks. Below are some of the most commonly used protocols explained in simple terms:

          <strong>1. HTTP (HyperText Transfer Protocol):</strong>
          <ul>
            <li>Used for transferring web pages on the internet.</li>
            <li>Operates on a request-response model between clients (browsers) and servers.</li>
            <li>Stateless protocol, meaning each request is independent.</li>
          </ul>

          <strong>2. HTTPS (HyperText Transfer Protocol Secure):</strong>
          <ul>
            <li>Secure version of HTTP.</li>
            <li>Encrypts data between the client and server using SSL/TLS.</li>
            <li>Ensures data integrity and privacy.</li>
          </ul>

          <strong>3. FTP (File Transfer Protocol):</strong>
          <ul>
            <li>Used for transferring files between computers on a network.</li>
            <li>Supports uploading and downloading files.</li>
            <li>Can operate in active or passive mode.</li>
          </ul>

          <strong>4. SMTP (Simple Mail Transfer Protocol):</strong>
          <ul>
            <li>Used for sending emails from clients to servers and between servers.</li>
            <li>Operates on a push mechanism to send emails.</li>
            <li>Often used in conjunction with other protocols like IMAP or POP3 for retrieving emails.</li>
          </ul>

          <strong>5. IMAP (Internet Message Access Protocol):</strong>
          <ul>
            <li>Used by email clients to retrieve messages from a mail server.</li>
            <li>Allows multiple devices to access the same mailbox.</li>
            <li>Messages are stored on the server, enabling synchronization across devices.</li>
          </ul>

          <strong>6. POP3 (Post Office Protocol version 3):</strong>
          <ul>
            <li>Used by email clients to download emails from a server.</li>
            <li>Typically downloads and removes emails from the server.</li>
            <li>Best suited for single-device email access.</li>
          </ul>

          <strong>7. SSH (Secure Shell):</strong>
          <ul>
            <li>Provides a secure channel over an unsecured network.</li>
            <li>Used for remote command-line login and execution.</li>
            <li>Encrypts data to ensure confidentiality and integrity.</li>
          </ul>

          <strong>8. DNS (Domain Name System):</strong>
          <ul>
            <li>Translates human-readable domain names (like www.example.com) into IP addresses.</li>
            <li>Essential for locating computer services and devices worldwide.</li>
            <li>Operates in a hierarchical and decentralized manner.</li>
          </ul>

          <strong>9. DHCP (Dynamic Host Configuration Protocol):</strong>
          <ul>
            <li>Automatically assigns IP addresses to devices on a network.</li>
            <li>Simplifies network administration by managing IP address allocation.</li>
            <li>Ensures that each device has a unique IP address to avoid conflicts.</li>
          </ul>

          <strong>10. SNMP (Simple Network Management Protocol):</strong>
          <ul>
            <li>Used for managing and monitoring network devices like routers, switches, and servers.</li>
            <li>Enables network administrators to collect information and configure devices remotely.</li>
            <li>Supports monitoring performance, detecting faults, and configuring devices.</li>
          </ul>

          <strong>11. Telnet:</strong>
          <ul>
            <li>Used for bidirectional text-based communication over a network.</li>
            <li>Allows users to log into remote devices and manage them.</li>
            <li>Not secure as it transmits data in plain text; often replaced by SSH.</li>
          </ul>

          <strong>12. RTP (Real-time Transport Protocol):</strong>
          <ul>
            <li>Used for delivering audio and video over IP networks.</li>
            <li>Supports real-time data transmission with minimal latency.</li>
            <li>Often used in streaming media, video conferencing, and VoIP applications.</li>
          </ul>
        </p>
      </div>


      <div className="faq-item">
        <h3 className="faq-question">What is subnetting?</h3>
        <p className="faq-answer">
          Subnetting is the practice of dividing a network into smaller logical subnetworks (subnets). It improves network performance and security by reducing broadcast domains and organizing the network structure.
        </p>
      </div>
    </div>
  );
}

export default QNA;
