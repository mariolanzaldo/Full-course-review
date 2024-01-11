import { ResolverFn } from "../../generated/graphql";

export const getBooks: ResolverFn<any, any, undefined, undefined>  = async function (_, __) {
    const books = [
      {
        title: 'The Awakening',
        author: 'Kate Chopin',
      },
      {
        title: 'City of Glass',
        author: 'Paul Auster',
      },
    ];
      return books;
  };


  export default getBooks;
