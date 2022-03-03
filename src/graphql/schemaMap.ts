import "graphql-import-node";
import { readFileSync } from "fs";
import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./resolversMap";
import { GraphQLSchema } from "graphql";

const schemaTypeDefs = readFileSync(
  "./src/graphql/schemas/schema.graphql"
).toString("utf-8");

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [schemaTypeDefs],
  resolvers,
});

export default schema;
