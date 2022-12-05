const Pool = require('pg').Pool
const pool = new Pool({
    //these credentials are just copied from an example.
    //may need to change these to get the file to work.
  user: 'my_user',
  host: 'localhost',
  database: 'my_database',
  password: 'root',
  port: 5432,
});

const getMessages = () => {
    return new Promise(function(resolve, reject){
        pool.query('SELECT * FROM messages ORDER BY createdate ASC', (error, results) => {
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
        pool.query('INSERT INTO messages (id, userid, text, createddate) VALUES ($1, $2, $3, $4) RETURNING *', [id, userid, text, createddate], (error, results) => {
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