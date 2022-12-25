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

const getUsers = () => {
    return new Promise(function(resolve, reject){
        pool.query('SELECT * FROM users', (error, results) => {
            if (error){
                reject(error)
            }
            resolve(results.rows);
        })
    })
}


const login = (body) => {
    return new Promise(function(resolve, reject){
        const {user_name} = body;
        pool.query(`SELECT * FROM users WHERE user_name = $1`, [user_name], (error,results) => {
            if (error){
                reject(error)
            }
            resolve(results.rows);
        })
    })
}


const createUser = (body) => {
    return new Promise(function(resolve, reject) {
        const {user_id, user_name, user_pass, created_date } = body;
        pool.query('INSERT INTO users (user_id, user_name, user_pass, created_date) VALUES ($1, $2, $3, $4) RETURNING *', [user_id, user_name, user_pass, created_date], (error, results) => {
            if(error){
                reject(error)
            }
            resolve(`A new user has been added: ${results.rows[0]}`)
        })
    })
}


module.exports = {
    getUsers,
    login,
    createUser,
  }