import React, { Component } from 'react';
import Form from './Form/Form';

class App extends Component {
  state = {
    contacts: [],
  };

  addContact = data => {
    console.log(data);
  };

  render() {
    return <Form onSubmit={this.addContact} />;
  }
}

export default App;
