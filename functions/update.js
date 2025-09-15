"use strict";
const { DynamoDB } = require("aws-sdk");
const db = new DynamoDB.DocumentClient();

module.exports.handler = async (event) => {
  const id = event.pathParameters.id;
  const body = JSON.parse(event.body);

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: { id },
    UpdateExpression: "set info = :info",
    ExpressionAttributeValues: {
      ":info": body.info || null,
    },
    ReturnValues: "ALL_NEW",
  };

  const result = await db.update(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(result.Attributes),
  };
};
