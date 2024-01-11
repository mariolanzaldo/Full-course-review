import gql from "graphql-tag";

export const bookType = gql`
type Book {
    title: String
    author: String
}
`;

export default bookType;