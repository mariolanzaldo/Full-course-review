import { gql } from "graphql-tag";

export const follow = gql`
    input FollowInput {
        _id: ID
    }

    extend type Mutation {
        follow(input: FollowInput!): User!
    }
`;

export default follow;