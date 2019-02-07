import { graphql } from 'react-apollo';
import { GET_MUSHROOMS } from './graphql';

export const withMushrooms = graphql(GET_MUSHROOMS);
