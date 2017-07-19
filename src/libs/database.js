const config = require(`../../config.json`);
const knex = require(`knex`)({
  client: config.database.dialect,
  connection: {
    host     : config.database.host,
    port     : config.database.port,
    user     : config.database.username,
    password : config.database.password,
    database : config.database.name,
    charset  : `utf8`
  }
});

const bookshelf = require(`bookshelf`)(knex);

exports.__bookshelf = bookshelf;
exports.jsonify = (ele) => { return ele.toJSON(); };