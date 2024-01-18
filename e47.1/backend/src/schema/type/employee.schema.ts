import gql from "graphql-tag";

export const Employee = gql`
    type Employee {
        _id: ID
        name: String
        location_city: String 
        location_state: String 
        exp: Int
        skills: [Skill]
        salary: Int
        category: String
        subcategory: String
        work_authorization: String
    }

    type Skill {
        skill: [String]
    }
`;