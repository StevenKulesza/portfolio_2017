import React, { Component } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
`;

export default class Home extends Component {

  render() {
    return (
      <div>
        <h1>Hi Home!</h1>
        <Image src={require('../assets/test.jpg')} alt="test"/>
        <p>
        Lorem Ipsum
        </p>
      </div>
    );
  }
}
