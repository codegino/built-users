import React from 'react';
import { connect } from 'react-redux';
import './Home.scss';

class HomePage extends React.PureComponent {
  render() {
    const users = this.props.users.map(user => <div>{user}</div>)
    return (
      <div className='container'>
        {users}
        <button className='button'>Button</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.user.users
})

export default connect(mapStateToProps)(HomePage);
