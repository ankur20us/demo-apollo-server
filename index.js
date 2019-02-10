const { ApolloServer, makeExecutableSchema } = require('apollo-server');

const typeDefs = require('./schema/types/')
const resolvers = require('./schema/resolvers/')
const schema = makeExecutableSchema({ typeDefs, resolvers })
const server = new ApolloServer({schema});
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});