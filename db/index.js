const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGODBURL);
const CommonError = require("../validator/CommonError");

exports.mongoConnection = async () => {
  try {
    // Use connect method to connect to the server
    await client.connect();
    const db = client.db();
    return db;
  } catch (error) {
    return {
      error: new CommonError(error.message),
    };
  }
};
