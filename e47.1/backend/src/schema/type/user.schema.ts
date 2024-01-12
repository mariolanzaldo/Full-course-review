import gql from "graphql-tag";

export const User = gql`
type User {
    id: ID
    username: String
    following: [String]
}
`;

export default User;