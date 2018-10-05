import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../store/actions/user';
import Loading from '../components/loading/LoadingMask';
import Profile from '../components/profile/Profile';
import styles from './Home.module.scss';

class HomePage extends React.PureComponent {
  state = {
    count: 1
  }

  componentDidMount() {
    this._onFetchUserHandler()
  }

  _onFetchUserHandler = () => {
    const {count} = this.state
    this.props.fetchUsers(count ? count : 1)
  }

  _onCountChangeHandler = (e) => {
    this.setState({
      count: e.target.value
    })
  }

  render() {
    const users = this.props.users.map(user => <Profile key={user.email} details={user} />)

    return (
      <div className={styles.container}>
        {this.props.loading ? <Loading /> : null}
        <h1>Test Users</h1>
        {users}
        <input type="text" value={this.state.count} onChange={this._onCountChangeHandler} />
        <button className={styles.button} onClick={this._onFetchUserHandler}>Button</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.user.users,
  loading: state.ui.loading
})

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: count => dispatch(fetchUsers(count))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
