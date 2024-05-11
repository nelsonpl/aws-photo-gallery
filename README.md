# AWS Photo Gallery

## Overview

This project is a web application consisting of a backend and a frontend part. The backend is responsible for providing services and APIs, while the frontend is the user interface of the application.

### Backend

The `backend` folder contains the source code of the backend of the application. It is developed in TypeScript and uses some popular tools for development and deployment.

#### Technologies Used:

- **Node.js**: Server-side JavaScript runtime environment.
- **AWS Lambda**: Serverless cloud computing platform.
- **SAM (Serverless Application Model)**: Framework for building and managing serverless applications on AWS.
- **Jest**: JavaScript testing framework.

#### Required Packages:

- **DevDependencies**:
  - `@types/aws-lambda`: TypeScript types for AWS Lambda.
  - `@types/jest`, `@types/mocha`, `@types/node`: TypeScript types for testing.
  - `@types/uuid`: TypeScript types for UUID.
  - `jest`, `ts-jest`, `typescript`: Tools for testing and TypeScript compilation.

- **Dependencies**:
  - `aws-lambda`: AWS Lambda package.
  - `lambda-multipart-parser-v2`: Multipart parser for AWS Lambda.

#### Scripts:

- `deploy`: Compiles TypeScript code, packages, and deploys to AWS SAM.
- `test`: Runs tests using Jest.

## How to Run

To run this project locally, follow these steps:

- Navigate to the `backend` folder.
- Run `yarn install` to install the dependencies.
- Run `yarn deploy` to compile, package, and deploy to AWS SAM.
