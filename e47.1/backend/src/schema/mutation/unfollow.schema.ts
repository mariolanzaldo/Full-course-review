import { gql } from "graphql-tag";

export const unfollow = gql`
    extend type Mutation {
        unfollow(input: FollowInput!): User!
    }
`;

export default unfollow;