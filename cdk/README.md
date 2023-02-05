## codebase for deployment using AWS-CDK

## steps:
1. run `pnpm build` in root folder
2. run `cdk deploy` to deploy the static site stack


## architecture
simple s3 static SPA website, hosted using cloudfront and route53

## To be consider
# For CICD preparation
  * seperate the storage path main branches based on branch names. e.g. `staging/5.1.2` branch files will be stored in path `staging/5.1.2`
  * seperate the storage path for each dev member. e.g. build from repo commited by account `chrisc` will be stored in `chrisc/{commitsha}`
# domain names
  * create A record for main branches per deployment to link to the deployment. e.g. `staging/*` branch will link to `staging.{domain}.com`
  * create A record for commit per dev member to link to the deployment. e.g. commited by account `chrisc` can link to `chrisc-dev.{devdomain}.com`