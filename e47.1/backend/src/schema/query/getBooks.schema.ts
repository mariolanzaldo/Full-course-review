import gql from "graphql-tag";

export const getBooks = gql`
    extend type Query {
        getBooks: [Book]
    }
`;

export default getBooks;