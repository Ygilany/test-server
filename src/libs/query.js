
// const jsonify = require(`../Database`).jsonify;
const Bookshelf = require(`./database`).__bookshelf;

exports.runQuery = (query) => {
  return Bookshelf.knex.raw(query)
  .then(data => {
    // any data massaging or cleaning is done here
    return data[0];
  })
  .catch(err => {
    throw new Error(err);
  });
};