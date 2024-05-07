export const typeDefs = 
`#graphql
    type Home {
        id: ID!,
        title: String!,
        location: [String]!,
        reviews: [Review!]
    }
    type Review {
        id: ID!,
        rating: Int!,
        content: String!,
        home: Home!,
        resident: Resident!
    }
    type Resident {
        id:ID!,
        name: String!,
        verified: Boolean!,
        reviews: [Review!]
    }
    type Query {
        reviews: [Review],
        review(id: ID!): Review,
        homes: [Home],
        home(id: ID!): Home,
        residents: [Resident],
        resident(id: ID!):Resident
    }
    type Mutation {
        addHome(home: AddHomeInput!): Home
        deleteHome(id: ID!): [Home]
        updateHome(id: ID!, edits: EditHomeInput!): Home
    }
    input AddHomeInput {
        title: String!,
        location: [String!]!
    }
    input EditHomeInput {
        title: String!,
        location: [String!]!
    }
`

