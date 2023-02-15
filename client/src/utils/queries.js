import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query User {
  users {
    _id
    email
    songCount
    username
    password
    songList {
      _id
      album
      artist
      category
      name
      video
    }
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
  query User($userId: ID!) {
  user(id: $userId) {
    _id
    email
    password
    songCount
    songList {
      _id
      album
      artist
      category
      video
      name
    }
  }
}
`;

export const QUERY_ME = gql`
query Me {
  me {
    _id
    email
    songCount
    songList {
      _id
      album
      artist
      category
      name
      video
    }
    username
    password
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
query GetAllCategories {
  getAllCategories {
    _id
    name
  }
}
`;

export const QUERY_A_CATEGORY = gql`
query GetSongsByCategory($term: String!) {
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
