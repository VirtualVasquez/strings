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
        pool.query('SELECT user_name, user_id FROM users', (error, results) => {
            if (error){
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

const getUser = (userID) => {
    return new Promise(function(resolve, reject){
        pool.query('SELECT user_name FROM users WHERE user_id = $1', [userID], (error, results) => {
            if (error){
                reject(error)
            }
            if(results){
                resolve(results.rows);
            }
        })
    })
}


const login = (body) => {
    return new Promise(function(resolve, reject){
        const {user_name, user_pass} = body;
        pool.query(`SELECT * FROM users WHERE user_name = $1`, [user_name], (error,results) => {
            if (error){
                reject(error)
            }
            if(user_pass != results.rows[0].user_pass){
                resolve("The provided password is incorrect");
            }
            if(user_pass === results.rows[0].user_pass){
                resolve(results.rows[0]);
            }
        })
    })
}


const createUser = (body) => {
    return new Promise(function(resolve, reject) {
        const {user_name, user_pass, pass_check } = body;
        pool.query('INSERT INTO users (user_name, user_pass) VALUES ($1, $2) RETURNING *', [user_name, user_pass], (error, results) => {
            if(error){
                reject(error)
            }
            if(user_pass != pass_check){
                resolve("The two passwords do not match.")
            }
            if(user_pass === pass_check){
                resolve(results);
            }

            resolve(`A new user has been added`)
        })
    })
}


module.exports = {
    getUsers,
    getUser,
    login,
    createUser,
  }