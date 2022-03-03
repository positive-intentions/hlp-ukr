import fs from "fs";
import xmlParser from "xml2json";
import {
  QueryHerdArgs,
  QueryStockArgs,
  Stock,
  LabYak,
  MutationOrderArgs,
} from "../generated/graphql";
import { calculateHerd, calculateStock, DatabaseResponse } from "./utils";

// this doesnt have to be async, but im doing it this way because
// this is how it would work with a proper database.
const getDatabaseReponse = () =>
  new Promise((resolve, reject) => {
    fs.readFile(__dirname + "/herd.xml", (err, data) => {
      if (err) return reject(err);
      const json = xmlParser.toJson(data) as DatabaseResponse;
      resolve(json);
    });
  });

export const resolvers = {
  Query: {
    async stock(_: void, args: QueryStockArgs): Promise<Stock> {
      const databaseResponse = (await getDatabaseReponse()) as string;

      const stock = calculateStock(
        args.timeInDays,
        JSON.parse(databaseResponse)
      );

      return stock;
    },
    async herd(_: void, args: QueryHerdArgs): Promise<LabYak[]> {
      const databaseResponse = (await getDatabaseReponse()) as DatabaseResponse;

      const herd = calculateHerd(args.timeInDays, databaseResponse);

      return herd;
    },
  },
  Mutation: {
    async order(_: void, args: MutationOrderArgs): Promise<Stock> {
      console.log("mutation called", args);
      return {
        milk: 11,
        skins: 1,
      };
    },
  },
};
