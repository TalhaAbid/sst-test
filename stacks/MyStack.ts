import {StackContext, Api} from 'sst/constructs'


export const API = (StackContext: StackContext) => {
  const api = new Api(StackContext.stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler"
    }
  })
}