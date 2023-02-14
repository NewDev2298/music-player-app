const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Playlist {
    items: [ItemPlaylist]
  }

  type ItemPlaylist {
    id: ID
    name: String
    external_urls: ExternalUrl
  }

  type ExternalUrl {
    spotify: String
  }

  type Category {
    categories: CategoryData
  }

  type CategoryData {
    items: [ItemCategory]
  }

  type ItemCategory {
    id: ID
    name: String
  }

  type Track {
    items: [ItemTrack]
  }

  type ItemTrack {
    track: SecondTrack
  }

  type SecondTrack {
    album: Album
    preview_url: String
  }

  type Album {
    id: ID
    name: String
    external_urls: ExternalUrl
  }

  type CategoryPlaylist {
    playlists: Playlist
  }

  type Query {
    users: [User]!
    user(id: ID!): User
    searchUsers(term: String!): [User]!
    me: User
    playlist: Playlist
    categories: Category
    track: Track
    category_playlist: CategoryPlaylist
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
  }
`;

module.exports = typeDefs;
