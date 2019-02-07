import React from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Card,
  CircularProgress
} from '@material-ui/core';
import { withMushrooms } from './api';

function _MushroomTable({ data: { getMushroomsFrom, loading } }) {
  if (loading)
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}>
        <CircularProgress size={75} />
      </div>
    );
  return (
    <Card style={{ padding: '1em', margin: '1em' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Mushroom Name</TableCell>
            <TableCell>Date Posted</TableCell>
            <TableCell>Longitude</TableCell>
            <TableCell>Latitude</TableCell>
            <TableCell>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getMushroomsFrom.map(
            ({ id, date, longitude, latitude, consensus, location }) => (
              <TableRow key={id} hover>
                <TableCell>{id}</TableCell>
                <TableCell>{consensus.name}</TableCell>
                <TableCell>{date}</TableCell>
                <TableCell>{longitude}</TableCell>
                <TableCell>{latitude}</TableCell>
                <TableCell>{location.name}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </Card>
  );
}

export const MushroomTable = withMushrooms(_MushroomTable);
