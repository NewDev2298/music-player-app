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

  type Category {
    _id: ID
    name: String
    description: String
    songs: [Song]
  }

  type Song {
    _id: ID
    name: String
    artist: String
    album: String
    video: String
  }

  type Query {
    users: [User]!
    user(id: ID!): User
    searchUsers(term: String!): [User]!
    me: User
    getAllCategories: [Category]
    getCategory(id: ID!): Category
    getAllSong: [Song]
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
  }
`;

module.exports = typeDefs;
