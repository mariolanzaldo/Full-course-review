import gql from "graphql-tag";

export const LogoutResponse = gql`
type LogoutResponse {
    success: Boolean
    }
`;

export default LogoutResponse;