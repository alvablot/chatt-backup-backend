const { Client } = require("pg");

const db_url =
  process.env.DATABASE_URL ||
  "postgres://ckvmwvwcywojff:deb51638a11cd98b3806986c29c33dad82a5cd3c71497d9b698285fd9fe16dad@ec2-54-75-26-218.eu-west-1.compute.amazonaws.com:5432/d7nl1gfl5uifv1";

const client = new Client({
  connectionString: db_url,
  ssl: {
    rejectUnauthorized: false, // Använd inte i produktion
  },
});

client.connect();

const messagesTable = `
  CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    message TEXT,
    sender TEXT,
    room TEXT
  )
`;

client.query(messagesTable);

module.exports = client;
