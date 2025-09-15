"use strict";
const { DynamoDB } = require("aws-sdk");
const db = new DynamoDB.DocumentClient();

module.exports.handler = async (event) => {
  const id = event.pathParameters.id;
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: { id },
  };

  const result = await db.get(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(result.Item || {}),
  };
};
