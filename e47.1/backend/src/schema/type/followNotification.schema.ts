import { gql } from "graphql-tag";


export const followNotification = gql`

    type UpdateEmployee {
        following: Boolean!
        employee: Employee!
    }
`;

export default followNotification;