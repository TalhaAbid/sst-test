import { Bucket, StackContext, Table } from 'sst/constructs'


export const StorageStack = (stackContext: StackContext) => {
    const bucket = new Bucket(stackContext.stack, "Uploads");
    const table = new Table(stackContext.stack, "Notes", {
        fields: {
            userId: "string",
            noteId: "string",
        },
        primaryIndex: { partitionKey: "userId", sortKey: "noteId" }
    });

    return { bucket, table }
}