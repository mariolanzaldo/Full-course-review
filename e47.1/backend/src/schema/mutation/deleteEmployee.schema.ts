import { gql } from "graphql-tag";

export const deleteEmployee = gql`
    input DeleteEmployeeInput {
        _id: ID
    }

    extend type Mutation {
        deleteEmployee(input: DeleteEmployeeInput!): Employee!
    }
`;

export default deleteEmployee;