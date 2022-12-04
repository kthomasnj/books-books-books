import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation
  addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput!) {
    saveBook(saveBook: BookInput) 
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook(
    $bookId: ID!
    ) {
    removeBook(
      bookId: ID
      ) {
        token
        user {
          _id
        }
      }    
    }
`;

export const SEARCH_BOOK = gql`
  mutation removeBook(
    $bookId: ID!
    ) {
    searchBook(
      bookId: ID
      ) {
        token
        user {
          _id
        }
      }    
    }
`;