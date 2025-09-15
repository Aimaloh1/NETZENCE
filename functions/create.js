"use strict";
const { DynamoDB } = require("aws-sdk");
const db = new DynamoDB.DocumentClient();

module.exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: Date.now().toString(),
      ...body,
    },
  };

  await db.put(params).promise();

  return {
    statusCode: 201,
    body: JSON.stringify(params.Item),
  };
};
