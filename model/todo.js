const pool = require('./database');

const create = (description) => {
  pool.query('INSERT INTO todos (description) VALUES ($1) RETURNING *', [
    description,
  ]);
};

const get = () => {
    pool.query('SELECT * FROM todos')
};

const remove = (id) => {
    pool.query("DELETE FROM todos WHERE id = $1", [id])
};

module.exports = {
    create,
    get,
    remove
}
