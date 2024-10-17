import pool from '../Model/connectDB.js';

async function connect() {
    let conn;
    try {
        // Get a connection from the pool
        conn = await pool.getConnection();

        // Query to fetch all messages from the Message table
        const rows = await conn.query("SELECT * FROM Message");

        // Return the fetched messages
        return rows;
    } catch (err) {
        console.error('Error: ', err);
        throw err; // Re-throw the error to handle it in the route
    } finally {
        // Always release the connection back to the pool
        if (conn) conn.release();
    }
}

export default connect;
