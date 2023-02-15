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

  type Song {
    _id: ID
    name: String
    artist: String
    album: String
    video: String
    category: String
  }

  type Category {
    _id: ID
    name: String
  }

  type Query {
    users: [User]!
    user(id: ID!): User
    searchUsers(term: String!): [User]!
    me: User
    getSongsByCategory(term: String!): [Song]!
    getAllSong: [Song]
    getAllCategories: [Category]
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
  }
`;

module.exports = typeDefs;
