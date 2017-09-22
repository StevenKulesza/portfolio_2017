import React, { Component } from 'react';

export default class Contact extends Component {

  render() {
    return (
      <div>
        <h1>Contact me. The date is {new Date().toLocaleTimeString()}</h1>
      </div>
    );
  }
}
