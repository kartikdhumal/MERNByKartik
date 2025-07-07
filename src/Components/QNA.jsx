import React from 'react';
import '../styles/debouncing.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function QNA() {
  return (
    <div className="debounce-container">
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

            Here are the different Normal Forms with examples:


            <h2>First Normal Form (1NF):</h2>

            A table is in <b>First Normal Form</b> when:
            <div>
              <p>Each table cell should contain <b>only one value</b>.</p>
              <p>Entries in a column are of the <b>same data type</b>.</p>
              <p>Each column has a <b>unique name</b>.</p>
              <p>The order in which data is stored does not matter.</p>
            </div>

            Example:

            *Unnormalized Table:*
            <div className="table-wrapper"><table className="comparison-table">
              <thead>
                <tr>
                  <th>actress_id</th>
                  <th>Name</th>
                  <th>Movies</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ananya Pandey</td>
                  <td>Math, SOTY 3</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Rashi Khanna</td>
                  <td>Aashiqui 3</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Pratibha Ranta</td>
                  <td>Son of Sardaar 3, Raanjhanaa 2</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Priyanka Mohan</td>
                  <td>Math</td>
                </tr>
              </tbody>
            </table></div>


            *After Applying 1NF:*
            <div className="table-wrapper"><table className="comparison-table">
              <thead>
                <tr>
                  <th>actress_id</th>
                  <th>Name</th>
                  <th>movie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ananya Pandey</td>
                  <td>Math</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Ananya Pandey</td>
                  <td>SOTY 3</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Rashi Khanna</td>
                  <td>Aashiqui 3</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Pratibha Ranta</td>
                  <td>Son of Sardaar 3</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Pratibha Ranta</td>
                  <td>Raanjhanaa 2</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Priyanka Mohan</td>
                  <td>Math</td>
                </tr>
              </tbody>
            </table></div>

            {/* Second Normal Form (2NF) */}

            <h2>2. Second Normal Form (2NF):</h2>

            A table is in <b>Second Normal Form</b> when:
            <div>
              <p>It is already in <b>1NF</b>.</p>
              <p>All <b>non-key attributes</b> are fully functionally dependent on the <b>primary key</b>.</p>
            </div>

            Example:

            *Assuming a table with composite primary key (actress_id, movie):*
            <div className="table-wrapper"><table className="comparison-table">
              <thead>
                <tr>
                  <th>actress_id</th>
                  <th>movie</th>
                  <th>year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Math</td>
                  <td>Munna Tripathi</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>SOTY 3</td>
                  <td>Maqbool Khan</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Aashiqui 3</td>
                  <td>Madhuri Yadav</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Son of Sardaar 3</td>
                  <td>Akhandanand Tripathi</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Raanjhanaa 2</td>
                  <td>Beena Tripathi</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Math</td>
                  <td>Munna Tripathi</td>
                </tr>
              </tbody>
            </table></div>


            Issues: The <b>year</b> is dependent only on the <b>movie</b>, not on the combination of <b>actress_id</b> and <b>movie</b>.

            To achieve 2NF:
            - <b>Create two tables</b>: `actresses` and `Movies`.

            <b>actresses Table:</b>
            <div className="table-wrapper"><table className="comparison-table">
              <thead>
                <tr>
                  <th>actress_id</th>
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
                  <td>Pratibha Ranta</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Priyanka Mohan</td>
                </tr>
              </tbody>
            </table></div>

            <b>Movies Table:</b>
            <div className="table-wrapper"><table className="comparison-table">
              <thead>
                <tr>
                  <th>movie</th>
                  <th>year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Math</td>
                  <td>Munna Tripathi</td>
                </tr>
                <tr>
                  <td>SOTY 3</td>
                  <td>Maqbool Khan</td>
                </tr>
                <tr>
                  <td>Aashiqui 3</td>
                  <td>Madhuri Yadav</td>
                </tr>
                <tr>
                  <td>Son of Sardaar 3</td>
                  <td>Akhandanand Tripathi</td>
                </tr>
                <tr>
                  <td>Raanjhanaa 2</td>
                  <td>Beena Tripathi</td>
                </tr>
              </tbody>
            </table></div>

            <b>Enrollment Table:</b>
            <div className="table-wrapper"><table className="comparison-table">
              <thead>
                <tr>
                  <th>actress_id</th>
                  <th>movie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Math</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>SOTY 3</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Aashiqui 3</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Son of Sardaar 3</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Raanjhanaa 2</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Math</td>
                </tr>
              </tbody>
            </table></div>


            3. Third Normal Form (3NF):

            A table is in <b>Third Normal Form</b> when:
            <div>
              <p>It is already in <b>2NF</b>.</p>
              <p>All the <b>attributes</b> are <b>only dependent</b> on the <b>primary key</b>.</p>
              <p>There are <b>no transitive dependencies</b>.</p>
            </div>

            Example:

            *Assuming the `Movies` table has an additional attribute `Department`:*
            <div className="table-wrapper"><table className="comparison-table">
              <thead>
                <tr>
                  <th>movie</th>
                  <th>year</th>
                  <th>Department</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Math</td>
                  <td>Munna Tripathi</td>
                  <td>Science</td>
                </tr>
                <tr>
                  <td>SOTY 3</td>
                  <td>Maqbool Khan</td>
                  <td>Science</td>
                </tr>
                <tr>
                  <td>Aashiqui 3</td>
                  <td>Madhuri Yadav</td>
                  <td>Science</td>
                </tr>
                <tr>
                  <td>Son of Sardaar 3</td>
                  <td>Akhandanand Tripathi</td>
                  <td>Science</td>
                </tr>
                <tr>
                  <td>Raanjhanaa 2</td>
                  <td>Beena Tripathi</td>
                  <td>Arts</td>
                </tr>
              </tbody>
            </table></div>


            *Issue:* `Department` depends on `movie`, which in turn depends on `actress_id`. This is a <b>transitive dependency</b>.

            *To achieve 3NF:*
            - <b>Create three tables</b>: `actresses`, `Movies`, and `Departments`.

            <b>Departments Table:</b>
            <div className="table-wrapper"><table className="comparison-table">
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
            </table></div>

            <b>Movies Table (Updated):</b>
            <div className="table-wrapper"><table className="comparison-table">
              <thead>
                <tr>
                  <th>movie</th>
                  <th>year</th>
                  <th>Department_ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Math</td>
                  <td>Munna Tripathi</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>SOTY 3</td>
                  <td>Maqbool Khan</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Aashiqui 3</td>
                  <td>Madhuri Yadav</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Son of Sardaar 3</td>
                  <td>Akhandanand Tripathi</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Raanjhanaa 2</td>
                  <td>Beena Tripathi</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table></div>

            <b>Enrollment Table (Remains Same):</b>
            <div className="table-wrapper"><table className="comparison-table">
              <thead>
                <tr>
                  <th>actress_id</th>
                  <th>movie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Math</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>SOTY 3</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Aashiqui 3</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Son of Sardaar 3</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Raanjhanaa 2</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Math</td>
                </tr>
              </tbody>
            </table></div>


            4. Boyce-Codd Normal Form (BCNF):

            A table is in <b>Boyce-Codd Normal Form</b> when:
            <div>
              <p>It is already in <b>3NF</b>.</p>
              <p>For every functional dependency <b>A → B</b>, <b>A</b> should be a <b>super key</b>.</p>
            </div>

            Example:

            *Assuming a table where:*
            - <b>movie</b> → <b>year</b>
            - <b>year</b> → <b>Department_ID</b>

            *Here, `year` is not a super key but determines `Department_ID`, leading to a violation of BCNF.*

            *To achieve BCNF:*
            - <b>Create separate tables</b> to ensure that every determinant is a super key.

            <b>Instructors Table:</b>
            <div className="table-wrapper"><table className="comparison-table">
              <thead>
                <tr>
                  <th>year</th>
                  <th>Department_ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Munna Tripathi</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Maqbool Khan</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Madhuri Yadav</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Akhandanand Tripathi</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Beena Tripathi</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table></div>

            <b>Movies Table (Final):</b>
            <div className="table-wrapper"><table className="comparison-table">
              <thead>
                <tr>
                  <th>movie</th>
                  <th>year</th>
                  <th>Department_ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Math</td>
                  <td>Munna Tripathi</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>SOTY 3</td>
                  <td>Maqbool Khan</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Aashiqui 3</td>
                  <td>Madhuri Yadav</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Son of Sardaar 3</td>
                  <td>Akhandanand Tripathi</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Raanjhanaa 2</td>
                  <td>Beena Tripathi</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table></div>

            By following these steps, the database schema adheres to BCNF, ensuring minimal redundancy and enhanced data integrity.
          </p>
        </div>

      </div>

      <div className="subsection">

        <div className="faq-item">
          <h4 className="faq-question">What does ACID stand for?</h4>
          <p className="faq-answer">
            ACID stands for <b>Atomicity</b>, <b>Consistency</b>, <b>Isolation</b>, and <b>Durability</b>. These properties ensure reliable processing of database transactions.
          </p>
        </div>

        <div className="faq-item">
          <h4 className="faq-question">Explain each ACID property.</h4>
          <p>
            <div>
              <p className="faq-answer">Atomicity: Ensures that all parts of a transaction are completed; if not, the transaction is aborted.
                <div className="faq-item">
                  Example: Imagine Pratibha Ranta wants to transfer ₹1,000 from his bank account to Bablu's account. Atomicity ensures that both actions—deducting ₹1,000 from Pratibha Ranta's account and adding ₹1,000 to Bablu's account—are completed successfully. If, for any reason, the second action fails (e.g., system crash after deducting the amount), the entire transaction is rolled back, and Pratibha Ranta's ₹1,000 remains in his account. This prevents scenarios where Pratibha Ranta loses money without Bablu receiving it.
                </div>
              </p>
              <p className="faq-answer">Consistency: Ensures that a transaction brings the database from one valid state to another, maintaining database invariants.
                <div className="faq-item">
                  Example: In a banking system, there might be a rule that the total amount of money across all accounts must remain constant unless a deposit or withdrawal occurs. When Pratibha Ranta transfers ₹1,000 to Bablu, consistency ensures that the total sum of all accounts before and after the transaction remains accurate. If the transfer would violate any database rules (like allowing a negative balance), the transaction is rejected to maintain consistency.
                </div>
              </p>
              <p className="faq-answer">Isolation: Ensures that concurrent transactions do not interfere with each other.
                <div className="faq-item">
                  Example: Suppose Pratibha Ranta is transferring ₹1,000 to Bablu while, at the same time, Bablu is transferring ₹500 to Pratibha Ranta. Isolation ensures that these two transactions are processed independently without affecting each other. This means Pratibha Ranta's transfer will either complete entirely or not at all without being influenced by Bablu's simultaneous transfer, and vice versa. As a result, both transfers maintain their integrity without causing any inconsistencies in either account.
                </div>
              </p>
              <p className="faq-answer"> Durability: Ensures that once a transaction is committed, it remains so, even in the case of a system failure.
                <div className="faq-item">
                  Example: After Pratibha Ranta successfully transfers ₹1,000 to Bablu's account and the transaction is committed, durability guarantees that this change is permanently recorded in the database. Even if the system crashes immediately after the transaction, the ₹1,000 transfer will still be reflected in Bablu's account once the system is restored. This ensures that committed transactions are not lost and that the database remains reliable.
                </div>
              </p>
            </div>
          </p>
        </div>
      </div>

      <div className="subsection">

        <div className="faq-item">
          <h4 className="faq-question">What are some advanced MySQL queries?</h4>
          <p className="faq-answer">
            Examples:
            <div>
              <p>JOINs with Table Examples:
                {/* INNER JOIN Example */}
                <div>
                  1. INNER JOIN:

                  An<b>INNER JOIN</b> returns records that have matching values in both tables.

                  Sample Tables:

                  actresses Table:
                  <div className="table-wrapper"><table className="comparison-table">
                    <thead>
                      <tr>
                        <th>actress_id</th>
                        <th>Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Ananya Pandey</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Rashi Khanna</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Pratibha Ranta</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Priyanka Mohan</td>
                      </tr>
                    </tbody>
                  </table></div>

                  Enrollments Table:
                  <div className="table-wrapper"><table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Enrollment_ID</th>
                        <th>actress_id</th>
                        <th>movie_id</th>
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
                  </table></div>

                  Movies Table:
                  <div className="table-wrapper"><table className="comparison-table">
                    <thead>
                      <tr>
                        <th>movie_id</th>
                        <th>movie_name</th>
                        <th>year</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>201</td>
                        <td>Heropanti 2</td>
                        <td>2024</td>
                      </tr>
                      <tr>
                        <td>202</td>
                        <td>SOTY 3</td>
                        <td>2024</td>
                      </tr>
                      <tr>
                        <td>203</td>
                        <td>Aashiqui 3</td>
                        <td>2020</td>
                      </tr>
                      <tr>
                        <td>204</td>
                        <td>Son of Sardaar 3</td>
                        <td>2025</td>
                      </tr>
                      <tr>
                        <td>205</td>
                        <td>Raanjhanaa 2</td>
                        <td>2026</td>
                      </tr>
                    </tbody>
                  </table></div>

                  Query:
                  <SyntaxHighlighter language="javascript" style={atomDark}>
                    {`
SELECT actresses.Name, Movies.movie_name
FROM actresses
INNER JOIN Enrollments ON actresses.actress_id = Enrollments.actress_id
INNER JOIN Movies ON Enrollments.movie_id = Movies.movie_id;
`}
                  </SyntaxHighlighter>

                  Result:
                  <div className="table-wrapper"><table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>movie_name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Ananya Pandey</td>
                        <td>Heropanti 2</td>
                      </tr>
                      <tr>
                        <td>Ananya Pandey</td>
                        <td>SOTY 3</td>
                      </tr>
                      <tr>
                        <td>Rashi Khanna</td>
                        <td>Aashiqui 3</td>
                      </tr>
                      <tr>
                        <td>Pratibha Ranta</td>
                        <td>Son of Sardaar 3</td>
                      </tr>
                      <tr>
                        <td>Pratibha Ranta</td>
                        <td>Raanjhanaa 2</td>
                      </tr>
                    </tbody>
                  </table></div>
                </div>

                {/* LEFT JOIN Example */}
                <div>
                  2. LEFT JOIN (LEFT OUTER JOIN):

                  A<b>LEFT JOIN</b> returns all records from the left table and the matched records from the right table. If there is no match, the result is `NULL` on the right side.

                  Query:
                  <SyntaxHighlighter language="javascript" style={atomDark}>
                    {`
SELECT actresses.Name, Movies.movie_name
FROM actresses
LEFT JOIN Enrollments ON actresses.actress_id = Enrollments.actress_id
LEFT JOIN Movies ON Enrollments.movie_id = Movies.movie_id;
`}
                  </SyntaxHighlighter>

                  Result:
                  <div className="table-wrapper"><table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>movie_name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Ananya Pandey</td>
                        <td>Heropanti 2</td>
                      </tr>
                      <tr>
                        <td>Ananya Pandey</td>
                        <td>SOTY 3</td>
                      </tr>
                      <tr>
                        <td>Rashi Khanna</td>
                        <td>Aashiqui 3</td>
                      </tr>
                      <tr>
                        <td>Pratibha Ranta</td>
                        <td>Son of Sardaar 3</td>
                      </tr>
                      <tr>
                        <td>Pratibha Ranta</td>
                        <td>Raanjhanaa 2</td>
                      </tr>
                      <tr>
                        <td>Priyanka Mohan</td>
                        <td>Math</td>
                      </tr>
                    </tbody>
                  </table></div>
                </div>

                {/* RIGHT JOIN Example */}
                <div>
                  3. RIGHT JOIN (RIGHT OUTER JOIN):

                  A<b>RIGHT JOIN</b> returns all records from the right table and the matched records from the left table. If there is no match, the result is `NULL` on the left side.

                  Query:
                  <SyntaxHighlighter language="javascript" style={atomDark}>
                    {`
SELECT actresses.Name, Movies.movie_name
FROM actresses
RIGHT JOIN Enrollments ON actresses.actress_id = Enrollments.actress_id
RIGHT JOIN Movies ON Enrollments.movie_id = Movies.movie_id;
`}
                  </SyntaxHighlighter>

                  Result:
                  <div className="table-wrapper"><table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>movie_name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Ananya Pandey</td>
                        <td>Heropanti 2</td>
                      </tr>
                      <tr>
                        <td>Ananya Pandey</td>
                        <td>SOTY 3</td>
                      </tr>
                      <tr>
                        <td>Rashi Khanna</td>
                        <td>Aashiqui 3</td>
                      </tr>
                      <tr>
                        <td>Pratibha Ranta</td>
                        <td>Son of Sardaar 3</td>
                      </tr>
                      <tr>
                        <td>Pratibha Ranta</td>
                        <td>Raanjhanaa 2</td>
                      </tr>
                      <tr>
                        <td>Priyanka Mohan</td>
                        <td>Math</td>
                      </tr>
                    </tbody>
                  </table></div>
                </div>

                {/* FULL OUTER JOIN Example */}
                <div>
                  4. FULL OUTER JOIN:

                  A<b>FULL OUTER JOIN</b> returns all records when there is a match in either left or right table. MySQL does not support FULL OUTER JOIN directly, but it can be achieved using a combination of LEFT JOIN and RIGHT JOIN with UNION.

                  Query:
                  <SyntaxHighlighter language="javascript" style={atomDark}>
                    {`
SELECT actresses.Name, Movies.movie_name
FROM actresses
LEFT JOIN Enrollments ON actresses.actress_id = Enrollments.actress_id
LEFT JOIN Movies ON Enrollments.movie_id = Movies.movie_id
UNION
SELECT actresses.Name, Movies.movie_name
FROM actresses
RIGHT JOIN Enrollments ON actresses.actress_id = Enrollments.actress_id
RIGHT JOIN Movies ON Enrollments.movie_id = Movies.movie_id;
`}
                  </SyntaxHighlighter>

                  Result:
                  <div className="table-wrapper"><table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>movie_name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Ananya Pandey</td>
                        <td>Heropanti 2</td>
                      </tr>
                      <tr>
                        <td>Ananya Pandey</td>
                        <td>SOTY 3</td>
                      </tr>
                      <tr>
                        <td>Rashi Khanna</td>
                        <td>Aashiqui 3</td>
                      </tr>
                      <tr>
                        <td>Pratibha Ranta</td>
                        <td>Son of Sardaar 3</td>
                      </tr>
                      <tr>
                        <td>Pratibha Ranta</td>
                        <td>Raanjhanaa 2</td>
                      </tr>
                      <tr>
                        <td>Priyanka Mohan</td>
                        <td>Math</td>
                      </tr>
                    </tbody>
                  </table></div>
                </div>

                <div>
                  5. Important SQL Queries

                  You can rename tables and columns in your queries using the `AS` keyword to make them more readable or to avoid conflicts.

                  <div className="table-wrapper"><table className="comparison-table">
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
                        <td>Pratibha Ranta</td>
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
                        <td>Priyanka Mohan</td>
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
                  </table></div>

                  <div className="table-wrapper"><table className="comparison-table">
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
                  </table></div>

                  <div>
                    <h3>SQL Queries:</h3>
                    <div>
                      <p>
                        Fetch records that are present in one table but not in another table:
                        <SyntaxHighlighter language="javascript" style={atomDark}>
                          SELECT * FROM UserDetails WHERE userId NOT IN (SELECT id FROM Users);
                        </SyntaxHighlighter>
                        Output:
                        <div className="table-wrapper"><table className="comparison-table">
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
                        </table></div>
                      </p>
                      <p>
                        Fetch all users who are not associated with any user detail:
                        <SyntaxHighlighter language="javascript" style={atomDark}>
                          SELECT * FROM Users WHERE id NOT IN (SELECT userId FROM UserDetails);
                        </SyntaxHighlighter>
                        Output:
                        <div className="table-wrapper"><table className="comparison-table">
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
                        </table></div>
                      </p>
                      <p>
                        Fetch all users who were born in the year 1990:
                        <SyntaxHighlighter language="javascript" style={atomDark}>
                          SELECT * FROM Users WHERE YEAR(DOB) = 1990;
                        </SyntaxHighlighter>
                        Output:
                        <div className="table-wrapper"><table className="comparison-table">
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
                        </table></div>
                      </p>
                      <p>
                        Fetch all users who have a record in UserDetails:
                        <SyntaxHighlighter language="javascript" style={atomDark}>
                          SELECT * FROM Users WHERE id IN (SELECT userId FROM UserDetails);
                        </SyntaxHighlighter>
                        Output:
                        <div className="table-wrapper"><table className="comparison-table">
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
                              <td>Pratibha Ranta</td>
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
                              <td>Priyanka Mohan</td>
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
                        </table></div>
                      </p>
                      <p>
                        Fetch project-wise count of users:
                        <SyntaxHighlighter language="javascript" style={atomDark}>
                          SELECT position, COUNT(*) as user_count FROM UserDetails GROUP BY position;
                        </SyntaxHighlighter>
                        Output:
                        <div className="table-wrapper"><table className="comparison-table">
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
                        </table></div>
                      </p>
                      <p>
                        Fetch user names even if the position value is not present:
                        <SyntaxHighlighter language="javascript" style={atomDark}>
                          SELECT U.FirstName, U.LastName, UD.position
                          FROM Users U LEFT JOIN UserDetails UD ON U.id = UD.userId;
                        </SyntaxHighlighter>
                        Output:
                        <div className="table-wrapper"><table className="comparison-table">
                          <thead>
                            <tr>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Position</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Pratibha Ranta</td>
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
                              <td>Priyanka Mohan</td>
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
                        </table></div>
                      </p>
                    </div>
                  </div>
                </div>


              </p>

            </div>
          </p>
        </div>

        <div className="faq-item">
          <h4 className="faq-question">What are indexes in MySQL and how do you create them?</h4>
          <p className="faq-answer">
            Indexes are used to speed up the retrieval of data from the database. They can be created on one or more columns of a table.

            <b>Creating an Index:</b>
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {`
CREATE INDEX idx_name ON actresses (Name);
              `}
            </SyntaxHighlighter>

            <b>Types of Indexes:</b>
            <div>
              <p>Primary Key Index</p>
              <p>Unique Index</p>
              <p>Composite Index</p>
              <p>Full-Text Index</p>
            </div>
          </p>
        </div>
      </div>

      {/* Operating System Section */}
      <h2 className="section-title">Operating System</h2>

      <div className="faq-item">
        <h3 className="faq-question">What is the difference between a process and a thread?</h3>
        <p className="faq-answer">
          Process: A process is an execution of a program

          Thread:  a thread is a single execution sequence within the process
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">What are the different states of a process?</h3>
        <p className="faq-answer">
          Processes typically have the following states:
          <div>
            <p>New: The process is being created.</p>
            <p>Running: Instructions are being executed.</p>
            <p>Waiting: The process is waiting for some event (e.g., I/O).</p>
            <p>Ready: The process is ready to execute and waiting for CPU time.</p>
            <p>Terminated: The process has finished execution.</p>
          </div>
        </p>
      </div>

      {/* Networking Section */}
      <h2 className="section-title">Networking</h2>

      <div className="faq-item">
        <h3 className="faq-question">What are the layers of the OSI model?</h3>
        <p className="faq-answer">
          The OSI model consists of seven layers:
          <div>
            <p>Physical Layer: Transmits raw bit streams over a physical medium.</p>
            <p>Data Link Layer: Provides node-to-node data transfer and handles error correction.</p>
            <p>Network Layer: Determines how data is sent to the receiver from the sender.</p>
            <p>Transport Layer: Provides reliable data transfer services to the upper layers.</p>
            <p>Session Layer: Manages sessions between applications.</p>
            <p>Presentation Layer: Translates data between the application layer and the network format.</p>
            <p>Application Layer: Provides network services to the end-user applications.</p>
          </div>
        </p>
      </div>

      <div>
        <h2 className="faq-question">What are different networking protocols and their definitions?</h2>
        <li className="faq-item">
          <h3 className="faq-question">1. What is HTTP (HyperText Transfer Protocol)?</h3>
          <div className="faq-answer">
            <p>Used for transferring web pages on the internet.</p>
            <p>Operates on a request-response model between clients (browsers) and servers.</p>
            <p>Stateless protocol, meaning each request is independent.</p>
          </div>
        </li>

        <li className="faq-item">
          <h3 className="faq-question">2. What is HTTPS (HyperText Transfer Protocol Secure)?</h3>
          <div className="faq-answer">
            <p>Secure version of HTTP.</p>
            <p>Encrypts data between the client and server using SSL/TLS.</p>
            <p>Ensures data integrity and privacy.</p>
          </div>
        </li>

        <li className="faq-item">
          <h3 className="faq-question">3. What is FTP (File Transfer Protocol)?</h3>
          <div className="faq-answer">
            <p>Used for transferring files between computers on a network.</p>
            <p>Supports uploading and downloading files.</p>
            <p>Can operate in active or passive mode.</p>
          </div>
        </li>

        <li className="faq-item">
          <h3 className="faq-question">4. What is SMTP (Simple Mail Transfer Protocol)?</h3>
          <div className="faq-answer">
            <p>Used for sending emails from clients to servers and between servers.</p>
            <p>Operates on a push mechanism to send emails.</p>
            <p>Often used with IMAP or POP3 for retrieving emails.</p>
          </div>
        </li>

        <li className="faq-item">
          <h3 className="faq-question">5. What is IMAP (Internet Message Access Protocol)?</h3>
          <div className="faq-answer">
            <p>Used by email clients to retrieve messages from a mail server.</p>
            <p>Allows multiple devices to access the same mailbox.</p>
            <p>Messages are stored on the server for sync across devices.</p>
          </div>
        </li>

        <li className="faq-item">
          <h3 className="faq-question">6. What is POP3 (Post Office Protocol v3)?</h3>
          <div className="faq-answer">
            <p>Used by email clients to download emails from a server.</p>
            <p>Typically downloads and removes emails from the server.</p>
            <p>Best for single-device email access.</p>
          </div>
        </li>

        <li className="faq-item">
          <h3 className="faq-question">7. What is SSH (Secure Shell)?</h3>
          <div className="faq-answer">
            <p>Provides a secure channel over an unsecured network.</p>
            <p>Used for remote command-line login and execution.</p>
            <p>Encrypts data to ensure confidentiality and integrity.</p>
          </div>
        </li>

        <li className="faq-item">
          <h3 className="faq-question">8. What is DNS (Domain Name System)?</h3>
          <div className="faq-answer">
            <p>Translates domain names (like www.example.com) into IP addresses.</p>
            <p>Essential for locating computer services/devices online.</p>
            <p>Operates in a hierarchical, decentralized manner.</p>
          </div>
        </li>

        <li className="faq-item">
          <h3 className="faq-question">9. What is DHCP (Dynamic Host Configuration Protocol)?</h3>
          <div className="faq-answer">
            <p>Automatically assigns IP addresses to devices on a network.</p>
            <p>Simplifies network admin by managing IP allocation.</p>
            <p>Ensures each device has a unique IP address.</p>
          </div>
        </li>

        <li className="faq-item">
          <h3 className="faq-question">10. What is SNMP (Simple Network Management Protocol)?</h3>
          <div className="faq-answer">
            <p>Used for managing and monitoring network devices (routers, switches, servers).</p>
            <p>Lets admins collect info and configure devices remotely.</p>
            <p>Helps monitor performance and detect faults.</p>
          </div>
        </li>

        <li className="faq-item">
          <h3 className="faq-question">11. What is Telnet?</h3>
          <div className="faq-answer">
            <p>Used for bidirectional text-based communication over a network.</p>
            <p>Allows remote login to devices.</p>
            <p>Not secure — transmits data in plain text. Replaced by SSH in modern systems.</p>
          </div>
        </li>

        <li className="faq-item">
          <h3 className="faq-question">12. What is RTP (Real-time Transport Protocol)?</h3>
          <div className="faq-answer">
            <p>Used for delivering audio and video over IP networks.</p>
            <p>Supports real-time data transmission with minimal delay.</p>
            <p>Common in streaming, video calls, and VoIP apps.</p>
          </div>
        </li>

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
