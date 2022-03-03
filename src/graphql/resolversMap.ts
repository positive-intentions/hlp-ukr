import { merge } from "lodash";
import { resolvers } from "./resolvers/resolver";

const resolverMap = merge(resolvers);
export default resolverMap;
