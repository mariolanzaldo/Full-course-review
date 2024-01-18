import { gql } from "graphql-tag";

export const  addEmployee = gql `
  input AddEmployeeInput {
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
    addEmployee(input: AddEmployeeInput!): Employee!
  }

`;

export default addEmployee;