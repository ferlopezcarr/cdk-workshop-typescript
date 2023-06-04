import { Runtime } from "aws-cdk-lib/aws-lambda";

export type LambdaNodeVersion = "14" | "16" | "18";

export const LAMBDA_NODE_VERSIONS: Map<LambdaNodeVersion, Runtime> = new Map([
    ["14", Runtime.NODEJS_14_X],
    ["16", Runtime.NODEJS_16_X],
    ["18", Runtime.NODEJS_18_X]
]);
