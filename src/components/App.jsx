import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';

class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    console.log(data);
  };
  // handleNameChange = event => {
  //   console.log(event.currentTarget.value);
  //   this.setState({ name: event.currentTarget.value });
  // };
  // handleNumberChange = event => {
  //   this.setState({ number: event.currentTarget.value });
  // };

  render() {
    return (
      <div>
        <Form onSubmit={this.formSubmitHandler} />
        <ul>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default App;
