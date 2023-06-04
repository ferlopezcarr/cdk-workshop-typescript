import { App, Stack, StackProps } from "aws-cdk-lib";
import { Code, Function, FunctionProps } from "aws-cdk-lib/aws-lambda";
import { LambdaNodeService } from "./lambda/services/lambda-node.service";

export class CdkWorkshopTypescriptStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    // Create hello lambda function
    const lambdaProps: FunctionProps = {
      runtime: LambdaNodeService.getRuntimeNodeVersion(),
      code: Code.fromAsset("lambda"),
      handler: "hello.handler",
    };
    const hello = new Function(this, "HelloHandler", lambdaProps);
  }
}
