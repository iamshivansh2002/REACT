import React, { Component } from 'react';
import Profile from './ProfileClass';

class About extends Component {
  constructor(props) {
    super(props);
    // Constructor of parent
    console.log('parent constructor');
  }

  componentDidMount() {
    // Called after all children have mounted
    console.log('parent componentDidMount');
  }

  render() {
    // Called before mounting child components
    console.log("parent render");

    return (
      <div>
        <h1>About us page</h1>
        {/* Two child components */}
        <Profile name={"First child"} xyz="abc" />
        <Profile name={"Second child"} xyz="abc" />
      </div>
    );
  }
}

export default About;
