# ECR Docker Process

### Login Command to ECR:

`aws ecr get-login-password --region ap-south-1 --profile Personal | docker login --username AWS --password-stdin 230596564060.dkr.ecr.ap-south-1.amazonaws.com`

### Creating Repository:

`aws ecr create-repository --repository-name ecstest --image-scanning-configuration scanOnPush=true --image-tag-mutability IMMUTABLE --region ap-south-1 --profile Personal`

### Tagging Image for Remote

`docker tag ecstest:latest 230596564060.dkr.ecr.ap-south-1.amazonaws.com/ecstest:v1`

### Pushing to ECR

`docker push 230596564060.dkr.ecr.ap-south-1.amazonaws.com/ecstest:v1`

#### Reference
<a href="https://medium.com/bb-tutorials-and-thoughts/how-to-run-nodejs-apis-on-aws-ecs-f50c003b6921">Medium Blog</a>