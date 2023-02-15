import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
    }
  }
`;

export const SEARCH_USERS = gql`
  query searchUsers($term: String!) {
    searchUsers(term: $term) {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_ALL_SONGS = gql`
  query getAllSong {
    getAllSong {
      _id
      album
      artist
      category
      name
      video
    }
  }
`;
export const QUERY_ALL_CATEGORIES = gql`
  query getAllCategories {
    getAllCategories {
      _id
      name
      songs {
        album
        artist
        name
        video
      }
    }
  }
`;
export const QUERY_A_CATEGORY = gql`
  query getSongsByCategory($term: String!) {
    getSongsByCategory(term: $term) {
      _id
      album
      artist
      category
      name
      video
    }
  }
`;
