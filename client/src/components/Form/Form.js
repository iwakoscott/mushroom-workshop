import React from 'react';
import { TextField, Button, Card } from '@material-ui/core';

export function Form({ onSubmitEmail }) {
  const [email, setEmail] = React.useState('');

  // handlers
  const handleSubmit = event => {
    event.preventDefault();
    onSubmitEmail(email);
    setEmail('');
  };
  const textChangeHandler = event => setEmail(event.target.value);
  const isDisabled = () => email === '';

  return (
    <Card
      style={{
        width: '100%',
        maxWidth: 400,
        height: 400
      }}>
      <form
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100%'
        }}
        onSubmit={handleSubmit}>
        <h1>Enter your email!</h1>
        <TextField
          type="email"
          placeholder="email..."
          InputLabelProps={{ htmlFor: 'email-input' }}
          id="email-input"
          label="email"
          onChange={textChangeHandler}
          value={email}
        />
        <Button disabled={isDisabled()} type="submit">
          Submit
        </Button>
      </form>
    </Card>
  );
}
