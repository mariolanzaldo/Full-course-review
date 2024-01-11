import { gql } from "graphql-tag";

export const createUser = gql`
    input createUserInput {
        username: String!
        password: String!
    }

    extend type Mutation {
        createUser(input: createUserInput!): Void!
    }
`;

export default createUser;