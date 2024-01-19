import { gql } from "graphql-tag";


export const followNotification = gql`

    type FollowNotification {
        following: Boolean!
        employee: Employee!
    }
`;

export default followNotification;