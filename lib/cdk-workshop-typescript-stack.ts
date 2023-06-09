import { App, Stack, StackProps } from "aws-cdk-lib";
import { LambdaRestApi } from "aws-cdk-lib/aws-apigateway";
import { Code, Function, FunctionProps } from "aws-cdk-lib/aws-lambda";
import { LambdaNodeService } from "./lambda/services/lambda-node.service";

export class CdkWorkshopTypescriptStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    // Create hello lambda function
/*     const lambdaProps: FunctionProps = {
      runtime: LambdaNodeService.getRuntimeNodeVersion(),
      code: Code.fromAsset("lambda"),
      handler: "hello.handler",
    };
    const hello = new Function(this, "HelloHandler", lambdaProps);

    // defines an API Gateway REST API resource backed by our "hello" function.
    const lambdaRestApiProps = {
      handler: hello,
    };
    const helloApiGateway = new LambdaRestApi(this, "HelloLambdaEndpoint", lambdaRestApiProps); */
  }
}