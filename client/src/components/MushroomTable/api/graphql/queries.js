import gql from 'graphql-tag';

export const GET_MUSHROOMS = gql`
  query getMushrooms {
    getMushroomsFrom {
      id
      date
      longitude
      latitude
      consensus {
        name
      }
      location {
        name
      }
    }
  }
`;
