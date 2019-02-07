const { ApolloServer, gql } = require("apollo-server");
const mushroomAPI = require("./mushroomAPI");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Location {
    name: String!
  }

  type Consensus {
    name: String!
  }

  type Mushroom {
    id: ID!
    date: String!
    latitude: String!
    longitude: String!
    consensus: Consensus
    location: Location
  }

  type Query {
    getMushroomsFrom(
      north: Float
      east: Float
      south: Float
      west: Float
    ): [Mushroom!]!
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    getMushroomsFrom: async (
      _,
      { north, east, south, west },
      { dataSources }
    ) => dataSources.mushroomAPI.getMushroomsFrom({ north, east, south, west })
  }
};

const server = new ApolloServer({
  typeDefs,
  dataSources: () => ({
    mushroomAPI: new mushroomAPI()
  }),
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
