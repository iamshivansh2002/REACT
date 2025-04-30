import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log("child constructor " + this.props.name);
  }

  componentDidMount() {
    // Called once after the component is mounted (commit phase)
    console.log("child componentDidMount " + this.props.name); 
  }

  render() {
    const { count } = this.state;
    console.log("child render " + this.props.name);

    return (
      <div>
        <h1>Profile class component</h1>
        <h2>Name: {this.props.name}</h2>
        <h2>xyz: {this.props.xyz}</h2>
        <h2>count: {count}</h2>
        {/* Button to trigger state update */}
        <button onClick={() => this.setState({ count: 1 })}>Increment</button>
      </div>
    );
  }
}

export default Profile;
