import { Outlet } from 'react-router-dom';
import Profile from './ProfileClass';
import ProfileFunctionalComponent from './Profile';
import { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About us page</h1>
        <Profile name={'First child'} />
      </div>
    );
  }
}
export default About;
