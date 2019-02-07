import React from 'react';
import { MushroomTable } from '../components/MushroomTable';
import { Link } from 'react-router-dom';

export function PartOne(props) {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
      <section>
        <h1>Instructions</h1>
        <p>Write tests for the MushroomTable component.</p>
      </section>
      <MushroomTable />
      <Link style={{ float: 'right' }} to="/part-two">
        Part Two {'👉'}
      </Link>
    </div>
  );
}
