import React, { Component } from 'react';
import { FaTwitter } from 'react-icons/fa';

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontFamily: `'Bungee Inline', cursive`
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
      </div>
    );
  }
}

export default App;
