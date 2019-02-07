import React from 'react';
import { fireEvent, wait } from 'react-testing-library';
import { renderWithApollo, providerOptions } from '../../../utils/testHelpers';
import { MushroomTable } from '../';
import { GET_MUSHROOMS } from '../api/graphql';

describe(`<MushroomTable />`, () => {
  const fakeDataA = {
    id: '81732',
    date: '2011-11-06',
    longitude: '-122.8045',
    latitude: '38.0452',
    consensus: {
      name: 'Phaeoclavulina curta'
    },
    location: {
      name: 'Point Reyes National Seashore, Marin Co., California, USA'
    }
  };

  const fakeDataB = {
    id: '265941',
    date: '2016-12-31',
    longitude: '-122.805',
    latitude: '38.0456',
    consensus: {
      name: 'Entoloma subgenus Cyanula'
    },
    location: {
      name:
        'Horse Trail, Point Reyes National Seashore, Point Reyes Station, California, USA'
    }
  };

  const getMushroomsFrom = [fakeDataA, fakeDataB];

  const getProviderOptions = () =>
    providerOptions({
      query: GET_MUSHROOMS,
      data: {
        getMushroomsFrom
      }
    });

  it(`renders without crashing...`, async () => {
    const options = getProviderOptions();
    const { container } = renderWithApollo(<MushroomTable />, options);
    await wait(() => 'flush promise');
    expect(container).toMatchSnapshot();
  });

  it(`displays the data in a table`, async () => {
    const options = getProviderOptions();
    const { container } = renderWithApollo(<MushroomTable />, options);

    await wait(() => 'flush promises');

    // DOM Nodes
    const tableRowNodes = container.querySelectorAll('tr');

    expect(tableRowNodes).toHaveLength(getMushroomsFrom.length + 1); // includes the header

    // since we are turning the data into a table we expect all data properties to be in the table
    getMushroomsFrom.forEach(data => {
      Object.values(data).forEach(value =>
        expect(container.innerHTML).toMatch(new RegExp(value))
      );
    });
  });
});
