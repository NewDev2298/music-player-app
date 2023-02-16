import { gql } from '@apollo/client';

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

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_SONG = gql`
mutation Mutation($songId: ID!) {
  saveSong(songID: $songId) {
    _id
    email
    songCount
    username
    songList {
      _id
      album
      artist
      cover
      category
      name
      video
    }
  }
}
`;

export const REMOVE_SONG = gql`
mutation Mutation($songId: ID!) {
  removeSong(songID: $songId) {
    _id
    email
    songCount
    songList {
      _id
      album
      category
      cover
      artist
      name
      video
    }
    username
  }
}
`;
