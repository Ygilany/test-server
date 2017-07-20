const Query = require(`../libs/query`);
const ErrorHandler = require(`../libs/error-handler`);
const ResponseHandler = require(`../libs/response-handler`);

const BASE_URL = `/query`;

module.exports = server => {
  
  server.get(
    `${ BASE_URL }/`,
    async(req, res) => {
      try {
        const results = await Query.runQuery(req.params.query);
  
        ResponseHandler(
          res,
          `Successfully got results`,
          { results }
        );
      } catch (err) {
        ErrorHandler(res, err);
      }
    }
  );

  server.get(
    `${ BASE_URL }/random`,
    async(req, res) => {
      try {
        const results = await Query.getRandom();
  
        ResponseHandler(
          res,
          `Successfully got results`,
          { results }
        );
      } catch (err) {
        ErrorHandler(res, err);
      }
    }
  );
};