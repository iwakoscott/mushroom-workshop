import React from 'react';
import { MockedProvider } from 'react-apollo';
import { render } from 'react-testing-library';

export const renderWithApollo = (
  ui,
  { mocks = [], addTypename = false } = {}
) => ({
  ...render(
    <MockedProvider mocks={mocks} addTypename={addTypename}>
      {ui}
    </MockedProvider>
  )
});

export const providerOptions = ({
  query,
  variables,
  data,
  addTypename = false
}) => ({
  mocks: [
    {
      request: {
        query,
        variables
      },
      result: {
        data
      }
    }
  ],
  addTypename
});
