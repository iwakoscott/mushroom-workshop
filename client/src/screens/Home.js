import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Home(props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: `'Cutive', serif`
      }}>
      <h1>
        {'🍄'} <code>react-testing-library</code> workshop
      </h1>
      <i>
        (using <code>material-ui</code> and <code>react-apollo</code>)
      </i>
      <section>
        <h2>By Scott Iwako</h2>
        <FaTwitter /> @theisomorphic
      </section>
      <br />
      <Link to="/table">Get Started {'🍄'}</Link>
    </div>
  );
}
