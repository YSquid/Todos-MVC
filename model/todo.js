const pool = require('./database');

const create = (description) => {
  pool.query('INSERT INTO todos (description) VALUES ($1) RETURNING *', [
    description,
  ]);
};

const get = () => {
   return pool.query('SELECT * FROM todos')
};

const remove = (id) => {
    pool.query("DELETE FROM todos WHERE todo_id = $1", [id])
};

module.exports = {
    create,
    get,
    remove
}
