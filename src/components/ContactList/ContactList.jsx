import React from 'react';
import { Fragment } from 'react/cjs/react.development';

export default function ContactList({ contacts }) {
  return (
    <Fragment>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
