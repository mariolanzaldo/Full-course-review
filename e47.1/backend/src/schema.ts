import gql from "graphql-tag";
import { writeFileSync } from 'fs';
import { print, DocumentNode } from 'graphql';
import { mergeTypeDefs } from "@graphql-tools/merge";
import * as schema from "./schema/index";

const root = gql`
type Void {
    null: Boolean
}
type Query
type Mutation
`;

const typeDefs: DocumentNode = mergeTypeDefs([root, ...Object.values(schema)]);

writeFileSync('./src/schema.graphql', print(typeDefs));


export default typeDefs;