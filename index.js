import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import db from './_db.js';
//types
import { typeDefs } from './schema.js';

const resolvers = {
    Query: {
        homes() {
            return _db.homes
        },
        home(_, args) {
            return db.homes.find((home) => home.id === args.id)
        },
        residents () {
            return _db.residents
        },
        resident(_, args) {
            return db.residents.find((resident) => resident.id === args.id)
        },
        reviews() {
            return db.reviews
        },
        review(_, args) {
            return db.reviews.find((review) => review.id === args.id)
        }
    },
    Home: {
        reviews(parent) {
           return db.reviews.filter((r) => r.home_id === parent.id) 
        }
    },
    Resident: {
        reviews(parent) {
            return db.reviews.filter((r) => r.resident_id === parent.id)
        }
    },
    Review: {
        resident(parent) {
            return db.resident.find((a) => a.id === parent.resident_id)
        },
        home(parent) {
            return db.homes.find((h) => h.id === parent.home_id)
        }
    },
    Mutation: {
        deleteHome(_, args) {
            db.homes = db.homes.filter((h) => h.id !== args.id)

            return db.homes
        },
        addHome(_, args) {
            let home = {
                ...args.home,
                id: Math.floor(Math.random() * 10000).toString()
            }
            db.homes.push(home)

            return home
        },
        updateHome(_, args) {
            db.homes = db.homes.map((h) => {
                if (h.id === args.id) {
                    return {...h, ...args.edits}
                }

                return h
            })

            return db.homes.find((h) => h.id === args.id)
        }
    }
}

// server set up
const server = new ApolloServer ({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log('server ready on port 4000')