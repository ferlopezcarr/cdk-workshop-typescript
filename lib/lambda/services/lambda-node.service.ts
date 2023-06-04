import { Runtime } from "aws-cdk-lib/aws-lambda";
import { LAMBDA_NODE_VERSIONS, LambdaNodeVersion } from "../constants/lambda-node-versions";

export class LambdaNodeService {

    private static DEFAULT_NODE_VERSION: LambdaNodeVersion = "16";

    public static getRuntimeNodeVersion(): Runtime {
        const nodeVersion: string = process.env.NODE_VERSION_ENV ?? LambdaNodeService.DEFAULT_NODE_VERSION;
        const runtimeNodeVersion = LAMBDA_NODE_VERSIONS.get(nodeVersion as LambdaNodeVersion);
        if (!runtimeNodeVersion) {
            throw new Error(`Invalid node version: ${nodeVersion}`);
        }
        return runtimeNodeVersion;
    }
}