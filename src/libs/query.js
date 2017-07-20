const jsonify = require(`./database`).jsonify;
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

exports.getRandom = () => {
  return Bookshelf.knex.raw(
    `SELECT * FROM test.quotes ORDER BY rand() LIMIT 1`
  )
  .then(data => {
    return {
      id: data[0][0].id,
      text: data[0][0].text
    }
  })
  .catch(err => {
    throw new Error(err);
  })
};