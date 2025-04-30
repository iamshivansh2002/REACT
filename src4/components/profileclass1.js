import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Initializing state with dummy values before the API call
    this.state = {
      userInfo: {
        name: 'dummy',
        bio: 'dummy',
        avatar_url: 'dummy',
      },
    };
    console.log('child constructor ' + this.props.name);
  }

  // Called once after the component mounts (good for API calls)
  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/iamshivansh2002');
    const json = await data.json();
    console.log(json); // Log the fetched data
    this.setState({ userInfo: json }); // Update state and trigger re-render
    console.log('child componentDidMount ' + this.props.name);
  }

  // Called after every update (setState or props change)
  componentDidUpdate() {
    this.timer = setInterval(() => {
      console.log('causing re-render');
    }, 1000);
    console.log('componentDidUpdate');
  }

  // Called right before the component unmounts (good for cleanup)
  componentWillUnmount() {
    clearInterval(this.timer); // Clear the interval to prevent memory leaks
    // Log when the component unmounts
    console.log('componentWillUnmount');
  }

  // Render method: Re-renders every time the state or props change
  render() {
    // Log when the component renders
    console.log('child render ' + this.props.name);

    return (
      <div>
        <h1>Profile class component</h1>
        <img
          src={this.state.userInfo.avatar_url}
          alt="avatar"
          className="avatar"
        />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Bio: {this.state.userInfo.bio}</h2>
      </div>
    );
  }
}

export default Profile;
