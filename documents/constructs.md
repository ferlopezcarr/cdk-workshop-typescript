# AWS Constructs

The AWS CDK is shipped with an extensive library of constructs called the AWS Construct Library. The construct library is divided into modules, one for each AWS service.

## Definition

The class constructors of both CdkWorkshopStack and lambda.Function (and many other classes in the CDK) have the signature (scope, id, props). This is because all of these classes are constructs.

**Constructs** are the basic building block of CDK apps, representing abstract “cloud components” which can be composed together into higher level abstractions via scopes. Scopes can include constructs, which in turn can include other constructs, etc.

## Elements

Constructs are always created in the scope of another construct and must always have an identifier which must be unique within the scope it’s created. Therefore, construct initializers (constructors) will always have the following signature:

* **scope**: is always the scope in which this construct is created. In almost all cases, you’ll be defining constructs *within the scope of current construct*, which means you’ll usually just want to pass *this* for the first argument.
* **id**: is the local identity of the construct. It’s an ID that *has to be unique amongst construct within the same scope*. The CDK uses this identity to calculate the CloudFormation Logical ID for each resource defined within this scope.
* **props**: the last (sometimes optional) argument is always a set of initialization properties. Those are specific to each construct.

    *Example*: the lambda.Function construct accepts properties like runtime, code and handler.

