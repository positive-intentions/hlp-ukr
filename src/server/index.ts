import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "../graphql/schemaMap";

const PORT = 4000;
const corsOptions = {
  origin: "http://localhost:1234",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
const server = new ApolloServer({
  schema,
});

server.start().then(() => {
  server.applyMiddleware({ app, path: "/graphql" });
  app.listen(PORT, () => {
    console.log(
      `\n🚀      GraphQL is now running on http://localhost:${PORT}/graphql`
    );
  });
});

export default {};
