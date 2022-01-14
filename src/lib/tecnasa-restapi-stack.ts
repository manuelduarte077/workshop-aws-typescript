import { Stack, Construct, StackProps } from "@aws-cdk/core";
import { GateWayStack } from '../stacks/gateway-stack';
import { AuthServerlessStack } from "../stacks/auth-serverless-stack";
import { DynamoDBStack } from "../stacks/dynamo-db-stack";

interface RootStack extends StackProps {
  prefix: string;
}

export class TecnasaRestapiStack extends Stack {
  constructor(scope: Construct, id: string, props: RootStack) {
    super(scope, id, props);


    const dynamoDBStack = new DynamoDBStack(this, `${ props.prefix }DynamodbSt`, {
      prefix: props.prefix
    });

    const gatewayStack = new GateWayStack(this, `${ props.prefix }GatewaySt`, {
      prefix: props.prefix
    });


    const authServerlessStack = new AuthServerlessStack(this, `${ props.prefix }AuthServerlessSt`, {
      prefix: props.prefix
    });

  }
}