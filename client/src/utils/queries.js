import { gql } from "@apollo/client";

export const GET_ME = gql`
query me {
    me {
      username
      savedBooks {
        title
        link
        image
        description
        bookId
        authors
      }
      email
      bookCount
      _id
    }
  }
`