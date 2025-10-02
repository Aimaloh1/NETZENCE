## Assignment 1: Serverless Deployment

### Overview

This assignment implements a serverless CRUD API using AWS Lambda, API Gateway, and DynamoDB.

### Components

- **API Gateway**: Handles HTTP requests
- **Lambda functions**: `create`, `read`, `update`, `delete` in `functions/`

| Function Name | Purpose                 |
| ------------- | ----------------------- |
| `createItem`  | Create a new item       |
| `readItem`    | Read an item by ID      |
| `updateItem`  | Update an existing item |
| `deleteItem`  | Delete an item by ID    |

- **DynamoDB table**: Stores API

### - IAM Roles

- Lambda functions are configured with **least privilege** IAM roles to ensure security.

### - Environment Variables

- Environment variables such as `TABLE_NAME` and `STAGE` are configured in `serverless.yml`.

| HTTP Method | Endpoint      | Description    |
| ----------- | ------------- | -------------- |
| POST        | `/items`      | Create an item |
| GET         | `/items/{id}` | Read an item   |
| PATCH       | `/items/{id}` | Update an item |
| DELETE      | `/items/{id}` | Delete an item |

### Deployment

1. Install dependencies:

```bash
npm install

2. Deploy API:
npx serverless deploy

3. Lambda functions are located in functions/ :

curl -X POST https://<api-id>.execute-api.us-east-1.amazonaws.com/dev/items \
-H "Content-Type: application/json" \
-d '{"info":"My first item"}'


------------------


## Assignment 2: CI/CD Pipeline

### Overview
This project implements a CI/CD pipeline using **GitHub Actions** to automatically deploy the Lambda function whenever code is pushed to `main`.

## CI/CD Pipeline for Serverless Application

### Overview
This workflow automatically deploys the AWS Lambda function whenever code is pushed to the main branch. It uses GitHub Actions and Serverless Framework.

### Trigger
- Pipeline runs on push to the `main` branch.

### Steps
1. **Checkout code** – fetches the repository.
2. **Set up Node.js** – installs Node.js v18 for running Serverless.
3. **Install dependencies** – runs `npm install`.
4. **Lint code** – runs ESLint to ensure code quality.
5. **Configure AWS** – authenticates using secrets.
6. **Deploy Lambda** – deploys functions to `dev` stage.
7. **Run tests** – optional verification after deployment.
8. **Rollback on failure** – restores the previous stable deployment automatically.

### Secrets Required
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
```
