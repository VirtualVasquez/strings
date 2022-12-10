const Pool = require('pg').Pool
const pool = new Pool({
    //these credentials are just copied from an example.
    //may need to change these to get the file to work.
  user: 'postgres',
  host: 'localhost',
  database: 'chat_app',
  password: 'sword2gun',
  port: 5432,
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
        const {id, userid, text, createddate } = body;
        pool.query('INSERT INTO messages (message_id, user_id, message_text, created_date) VALUES ($1, $2, $3, $4) RETURNING *', [message_id, user_id, message_text, created_date], (error, results) => {
            if(error){
                reject(error)
            }
            resolve(`A new message has been created: ${results.rows[0]}`)
        })
    })
}


module.exports = {
    getMessages,
    createMessage
  }