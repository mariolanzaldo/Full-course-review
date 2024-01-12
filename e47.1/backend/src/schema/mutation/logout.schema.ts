import gql from "graphql-tag";

export const logout = gql`
input cookieInput {
    name: String
}

extend type Mutation {
    logout(input: cookieInput): LogoutResponse
}
`;

export default logout;