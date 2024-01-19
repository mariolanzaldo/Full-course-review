import { gql } from "graphql-tag";


export const following = gql`
    extend type Subscription {
        following: FollowNotification
    }
`;

export default following;