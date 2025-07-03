import React, { useEffect } from 'react';

import 'prismjs/themes/prism.css';
import '../styles/mongodb.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Mongodb = () => {
  useEffect(() => {

    // Add hash link scroll functionality
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="mongodb-documentation">
      <section id="introduction">
        <h1>What is MongoDB?</h1>

        <h3>
          {`MongoDB is a NoSQL database
It stores data in a document-oriented format
It stores data in BSON format (Binary JSON), which is a binary representation of JSON-like documents`}
        </h3>

      </section>

      <section id="difference">
        <h2>Difference Between MongoDB and MySQL</h2>

        <h3>When to Use MongoDB:</h3>
        <p><strong>✔ Unstructured or semi-structured data:</strong> Ideal for handling flexible or changing data formats.</p>
        <p><strong>✔ Dynamic schema:</strong> Useful when your data structure may evolve frequently.</p>
        <p><strong>✔ High scalability:</strong> Best for real-time analytics, social platforms, IoT apps, and content-heavy apps.</p>
        <p><strong>✔ Fast development:</strong> Perfect for agile workflows where rapid iteration is needed.</p>

        <h3>When to Use MySQL:</h3>
        <p><strong>✔ Structured data:</strong> Best suited when relationships and data types are clearly defined.</p>
        <p><strong>✔ Data integrity:</strong> Strong in scenarios requiring strict schemas and ACID compliance.</p>
        <p><strong>✔ Complex queries:</strong> Ideal when using joins, aggregations, and reporting logic.</p>
        <p><strong>✔ Traditional systems:</strong> A proven choice for ERP, CRM, banking, and finance apps.</p>

        <h3>Terminology Comparison: MySQL vs MongoDB</h3>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>MySQL</th>
              <th>MongoDB</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Table</td>
              <td>Collection</td>
            </tr>
            <tr>
              <td>Row</td>
              <td>Document</td>
            </tr>
            <tr>
              <td>Column</td>
              <td>Field</td>
            </tr>
            <tr>
              <td>Schema</td>
              <td>Dynamic Schema (schema-less)</td>
            </tr>
            <tr>
              <td>Primary Key</td>
              <td>_id</td>
            </tr>
            <tr>
              <td>JOIN</td>
              <td>Embedding or Manual Referencing</td>
            </tr>
            <tr>
              <td>SQL</td>
              <td>MQL (Mongo Query Language)</td>
            </tr>
            <tr>
              <td>Transactions</td>
              <td>Atomic Ops or Multi-document Transactions</td>
            </tr>
          </tbody>
        </table>

      </section>


      <section id="commands">
        <h2>MongoDB Commands</h2>
        <h3>Check MongoDB Version</h3>

        <SyntaxHighlighter language="javascript" style={atomDark}>{`mongosh --version`}</SyntaxHighlighter>


        <h3>Create a New Database</h3>

        <SyntaxHighlighter language="javascript" style={atomDark}>{`use blog`}</SyntaxHighlighter>


        <h3>Create Collection</h3>

        <SyntaxHighlighter language="javascript" style={atomDark}>{`// Method 1: Using createCollection
db.createCollection("posts")

// Method 2: During the insert process
db.posts.insertOne(object)`}</SyntaxHighlighter>


        <h3>Insert a Document</h3>

        <SyntaxHighlighter language="javascript" style={atomDark}>{`// Insert one document
db.posts.insertOne(object)

// Insert multiple documents
db.posts.insertMany([object1, object2])`}</SyntaxHighlighter>


        <h3>Find Data</h3>

        <SyntaxHighlighter language="javascript" style={atomDark}>{`// Find all documents
db.posts.find()

// Find one document
db.posts.findOne()`}</SyntaxHighlighter>


        <h3>Querying Data</h3>

        <SyntaxHighlighter language="javascript" style={atomDark}>{`// Example query to filter documents
db.users.find({idAdmin: false})

// Projection to include/exclude fields
db.posts.find({}, { title: 1, date: 1 })`}</SyntaxHighlighter>


        <h3>Update Documents</h3>

        <SyntaxHighlighter language="javascript" style={atomDark}>{`// Update one document
db.posts.updateOne({ title: "Post Title 1" }, { $set: { likes: 2 } })

// Insert if not found
db.posts.updateOne(
  { title: "Post Title 5" },
  { $set: { title: "Post Title 5", body: "Body of post.", category: "Event", likes: 5, tags: ["news", "events"], date: Date() } },
  { upsert: true }
)

// Update multiple documents
db.posts.updateMany({}, { $inc: { likes: 1 } })`}</SyntaxHighlighter>


        <h3>Delete Documents</h3>

        <SyntaxHighlighter language="javascript" style={atomDark}>{`// Delete one document
db.posts.deleteOne({ title: "Post Title 1" })

// Delete multiple documents
db.posts.deleteMany({ likes: { $lt: 0 } })`}</SyntaxHighlighter>

      </section>

      <section id="operators">
        <h2>MongoDB Query Operators</h2>

        <SyntaxHighlighter language="javascript" style={atomDark}>{`// Comparison Operators
db.collection.find({ age: { $eq: 30 } }) // $eq: Values are equal  
db.collection.find({ age: { $ne: 30 } }) // $ne: Values are not equal
db.collection.find({ age: { $gt: 25 } }) // $gt: Value is greater than another value
db.collection.find({ age: { $gte: 25 } }) // $gte: Value is greater than or equal to another value
db.collection.find({ age: { $lt: 30 } }) // $lt: Value is less than another value
db.collection.find({ age: { $lte: 30 } }) // $lte: Value is less than or equal to another value
db.collection.find({ age: { $in: [20, 30, 40] } }) // $in: Value is matched within an array

// Logical Operators
db.collection.find({ $and: [{ age: { $gt: 25 } }, { age: { $lt: 35 } }] }) // $and: Returns documents where both queries match
db.collection.find({ $or: [{ age: 25 }, { age: 30 }] }) // $or: Returns documents where either query matches
db.collection.find({ $nor: [{ age: 25 }, { age: 30 }] }) // $nor: Returns documents where both queries fail to match
db.collection.find({ age: { $not: { $gt: 30 } } }) // $not: Returns documents where the query does not match`}</SyntaxHighlighter>

      </section>

      <section id="aggregation">
        <h2>Aggregation Pipelines</h2>

        <SyntaxHighlighter language="javascript" style={atomDark}>{`// 1. $match - Filters documents where status is active
db.collection.aggregate([{ $match: { status: "active" } }])

// 2. $group - Groups by category and sums amount
db.collection.aggregate([{ $group: { _id: "$category", total: { $sum: "$amount" } } }])

// 3. $project - Reshapes documents to include only specified fields
db.collection.aggregate([{ $project: { name: 1, totalAmount: { $sum: "$amount" } } }])

// 4. $sort - Sorts documents by age in descending order
db.collection.aggregate([{ $sort: { age: -1 } }])

// 5. $limit - Limits results to 10 documents
db.collection.aggregate([{ $limit: 10 }])

// 6. $lookup - Joins documents from another collection
db.collection.aggregate([{ $lookup: { from: "orders", localField: "customerId", foreignField: "_id", as: "orders" } }])

// 7. $skip - Skips the first 5 documents
db.collection.aggregate([{ $skip: 5 }])

// 8. $unwind - Deconstructs an array field to output a document for each element
db.collection.aggregate([{ $unwind: "$tags" }])

// 9. $addFields - Adds new fields to documents
db.collection.aggregate([{ $addFields: { total: { $multiply: ["$price", "$quantity"] } } }])

// 10. $out - Writes the results to a new collection
db.collection.aggregate([{ $out: "newCollection" }])

// 11. $count - Counts the number of documents and outputs a single document with the count
db.collection.aggregate([{ $count: "totalCount" }])

// 12. $sortByCount - Sorts by count of occurrences
db.collection.aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }, { $sortByCount: "$count" }])

// 13. $merge - Merges results into another collection
db.collection.aggregate([{ $merge: { into: "finalCollection", whenMatched: "merge", whenNotMatched: "insert" } }])

// 14. $bucket - Categorizes documents into age groups
db.collection.aggregate([{ $bucket: { groupBy: "$age", boundaries: [0, 18, 35, 65, 100], default: "Other", output: { count: { $sum: 1 } } } }])

// 15. $bucketAuto - Automatically creates buckets based on price
db.collection.aggregate([{ $bucketAuto: { groupBy: "$price", buckets: 4 } }])

// 16. $facet - Allows multiple pipelines to be processed in parallel
db.collection.aggregate([{ $facet: { 
    sales: [{ $match: { status: "A" } }, { $group: { _id: "$item", total: { $sum: "$amount" } } }],
    inventory: [{ $match: { status: "A" } }, { $group: { _id: "$item", count: { $sum: "$quantity" } } }] 
} }])

// 17. $replaceRoot - Replaces the existing document with the specified document
db.collection.aggregate([{ $replaceRoot: { newRoot: "$customer" } }])

// 18. $replaceWith - Replaces the existing document with a new document
db.collection.aggregate([{ $replaceWith: { newRoot: { name: "$name", age: "$age" } } }])

// 19. $redact - Filters documents based on a condition
db.collection.aggregate([{ $redact: { $cond: [{ $eq: ["$status", "A"] }, "$$KEEP", "$$PRUNE"] } }])

// 20. $sample - Returns a random sample of documents
db.collection.aggregate([{ $sample: { size: 5 } }])

// 21. $geoNear - Returns documents sorted by proximity to a point
db.collection.aggregate([{ $geoNear: { near: { type: "Point", coordinates: [-73.99279, 40.719296] }, distanceField: "dist.calculated", maxDistance: 10000, spherical: true } }])

// 22. $graphLookup - Performs a recursive search to find related documents
db.collection.aggregate([{ $graphLookup: { from: "employees", startWith: "$employeeId", connectFromField: "employeeId", connectToField: "managerId", as: "hierarchy" } }])

// 23. $indexStats - Returns statistics about the indexes on a collection
db.collection.aggregate([{ $indexStats: {} }])

// 24. $currentOp - Returns information about currently running operations in the database
db.currentOp()

// 25. $collStats - Returns statistics about a collection
db.runCommand({ collStats: "collectionName" })

// 26. $set - Adds new fields to documents or updates existing fields
db.collection.aggregate([{ $set: { status: "active" } }])

// 27. $unset - Removes a field from documents
db.collection.aggregate([{ $unset: "fieldName" }])

// 28. $switch - Chooses a value based on conditions
db.collection.aggregate([{ $project: { status: { $switch: { branches: [{ case: { $eq: ["$status", "A"] }, then: "Active" }, { case: { $eq: ["$status", "I"] }, then: "Inactive" }], default: "Unknown" } } } }])

// 29. $mergeObjects - Merges multiple documents into one
db.collection.aggregate([{ $project: { combined: { $mergeObjects: ["$address", "$contact"] } } }])

// 30. $expr - Allows use of aggregation expressions within the query language
db.collection.aggregate([{ $match: { $expr: { $gt: ["$price", "$cost"] } } }])

// 31. $arrayElemAt - Gets the element at the specified array index
db.collection.aggregate([{ $project: { firstTag: { $arrayElemAt: ["$tags", 0] } } }])
`}
        </SyntaxHighlighter>


        <h3>Example Usage of $group</h3>

        <SyntaxHighlighter language="javascript" style={atomDark}>{`db.users.aggregate([
  {
    $group : {
      _id : "$name",
      totalAge: { $sum: "$age" },
      count: { $sum: 1 },
      avgHeight: { $avg: "$height" }
    }
  }
])`}</SyntaxHighlighter>

      </section>

      <section id="validation">
        <h2>Schema Validation</h2>

        <SyntaxHighlighter language="javascript" style={atomDark}>{`// Creating a collection with schema validation
db.createCollection("posts", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "body"],
      properties: {
        title: {
          bsonType: "string",
          description: "Title of post - Required."
        },
        body: {
          bsonType: "string",
          description: "Body of post - Required."
        },
        category: {
          bsonType: "string",
          description: "Category of post - Optional."
        },
        likes: {
          bsonType: "int",
          description: "Post like count. Must be an integer - Optional."
        },
        tags: {
          bsonType: ["string"],
          description: "Must be an array of strings - Optional."
        },
        date: {
          bsonType: "date",
          description: "Must be a date - Optional."
        }
      }
    }
  }
})`}</SyntaxHighlighter>

      </section>

      <section id="nodejs">
        <h2>Using MongoDB in Node.js</h2>

        <SyntaxHighlighter language="javascript" style={atomDark}>{`// Install MongoDB Driver
npm install mongodb

const { MongoClient } = require('mongodb');
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('sample_mflix');
    const collection = db.collection('movies');
    const first = await collection.findOne();
    console.log(first);
  } finally {
    await client.close();
  }
}
run().catch(console.error);`}</SyntaxHighlighter>

      </section>

      <section id="mongoose">
        <h2>Difference Between MongoDB and Mongoose</h2>
        <ul>
          <li><strong>MongoDB:</strong>
            <ul>
              <li>MongoDB is a NoSQL database that stores data in JSON-like documents.</li>
              <li>It provides a rich query language and allows for flexible schema design.</li>
              <li>It requires manual handling of data validation and relationships.</li>
              <li>Direct interactions with the database are performed using the native MongoDB driver.</li>
              <li>Schema-less, allowing for dynamic data models.</li>
            </ul>
          </li>
          <li><strong>Mongoose:</strong>
            <ul>
              <li>Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.</li>
              <li>It provides a schema-based solution to model application data.</li>
              <li>Mongoose supports data validation, middleware, and hooks for better data integrity.</li>
              <li>It simplifies interactions with MongoDB by providing an API that models data using schemas.</li>
              <li>Enforces a structured schema, making it easier to manage relationships and data validation.</li>
            </ul>
          </li>
        </ul>

        <h2>Connecting Mongoose in a Node.js and Express Application</h2>

        <SyntaxHighlighter language="javascript" style={atomDark}>{`// Install Mongoose
npm install mongoose

const mongoose = require('mongoose');

// Connect to MongoDB
const uri = 'your_mongodb_connection_string';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a Schema
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  director: String
});

// Create a Model
const Movie = mongoose.model('Movie', movieSchema);

// Example of using the Model
app.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).send(err);
  }
});`}</SyntaxHighlighter>

      </section>
    </div>
  );
};

export default Mongodb;
