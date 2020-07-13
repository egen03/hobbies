import React, { Component } from 'react';
import './App.css';
import Hobbies from './components/Hobbies1';


class App extends Component {
  constructor() {
    super();

    this.state = {
      hobbyname1: 'Running',
      description1: 'Using two legs to walk really fast',
      image1: 'pic1.jpg'
    }
  }

render() {
  return (
    <div>
      <Hobbies />

      <h2>Hobby 1</h2>
      <p>Hobby Name: {this.state.hobbyname1}</p>
      <p>Description: {this.state.description1}</p>
      <p>Image: {this.state.image1}</p>

     
       
    </div>
  );
}



};

export default App;

