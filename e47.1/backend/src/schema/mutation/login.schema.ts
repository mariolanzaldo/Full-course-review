import { gql } from "graphql-tag";

export const login = gql`
    input LoginInput {
        username: String!
        password: String!
    }

    extend type Mutation {
        login(input: LoginInput!): User!
    }
`;

export default login;