import { gql } from "graphql-tag";


export const updatedEmployee = gql`
    extend type Subscription {
        updatedEmployee: Employee

    }
`;

export default updatedEmployee;