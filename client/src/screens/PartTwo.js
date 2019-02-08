import React from 'react';
import { Form } from '../components/Form';

export function PartTwo(props) {
  const callback = email => alert(`email sent to ${email}.`);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
      <Form onSubmitEmail={callback} />
    </div>
  );
}
