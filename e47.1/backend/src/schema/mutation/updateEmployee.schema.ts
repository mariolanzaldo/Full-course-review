import { gql } from "graphql-tag";

export const updateEmployee = gql`
    input UpdateEmployeeInput {
        name: String
        location_city: String
        location_state: String
        exp: Int
        skills: [String]
        salary: Int
        category: String
        subcategory: String
        work_authorization: String
    }

    extend type Mutation {
        updateEmployee(input: UpdateEmployeeInput!): String!
    }
`;

export default updateEmployee;