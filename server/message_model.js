require('dotenv').config();
const Pool = require('pg').Pool
const pool = new Pool({
    //these credentials are just copied from an example.
    //may need to change these to get the file to work.
user: process.env.DB_USER,
host: process.env.DB_HOST,
database: process.env.DB_DATABASE,
password: process.env.DB_PASSWORD,
port: process.env.DB_PORT,
});

const getMessages = () => {
    return new Promise(function(resolve, reject){
        pool.query('SELECT * FROM messages', (error, results) => {
            if (error){
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

const createMessage = (body) => {
    return new Promise(function(resolve, reject) {
        const {user_id, message_text} = body;
        pool.query('INSERT INTO messages (user_id, message_text) VALUES ($1, $2) RETURNING *', [user_id, message_text], (error, results) => {
            if(error){
                reject(error)
            }
            resolve(results.rows[0])
        })
    })
}
const deleteMessage = (body) => {
    const { message_id } = body;
    return new Promise(function(resolve, reject) {
        pool.query('DELETE FROM messages WHERE message_id = $1', [message_id], (error, results) => {
            if(error){
                reject(error)
            }
            resolve(results)
        })
    })
}

module.exports = {
    getMessages,
    createMessage,
    deleteMessage
  }