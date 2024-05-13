# Photo Gallery Backend

## Description
Backend is a serverless backend application built using AWS SAM (Serverless Application Model) framework. It provides APIs for managing photos, including uploading, viewing, listing, and deleting. The application utilizes AWS Lambda functions, Amazon DynamoDB for data storage, and Amazon S3 for storing uploaded images. It is written in TypeScript and includes Jest for testing.

## Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.

## Usage
- Run `npm run deploy` to deploy the application to AWS.
- Run `npm test` to execute tests.

## Deployment
To deploy the project, ensure the following steps:
1. Set up environment variables:
   - `STACK_NAME`: The name of the AWS CloudFormation stack.
   - `S3_BUCKET_NAME`: The name of the S3 bucket where images will be stored.
   - `DYNAMODB_TABLE_NAME`: The name of the DynamoDB table for storing photo data.
2. Ensure AWS CLI is configured with appropriate permissions.
3. Run `npm run deploy`.

## Configuration
- Environment variables are defined in the `template.yaml` file.

## Dependencies
- **aws-lambda**: ^1.0.7
- **lambda-multipart-parser-v2**: ^1.0.3

## Development Dependencies
- **TypeScript**: ^5.4.5
- **Jest**: ^28.0.0
- **ts-jest**: ^28.0.0

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

## License
This project is licensed under the [MIT License](LICENSE).
