"use strict";
const { DynamoDB } = require("aws-sdk");
const db = new DynamoDB.DocumentClient();

module.exports.delete = async (event) => {
  const id = event.pathParameters.id;
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: { id },
  };

  await db.delete(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Item ${id} deleted` }),
  };
};
