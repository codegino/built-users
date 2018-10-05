import React from 'react';
import styles from './Profile.module.scss';

class Profile extends React.PureComponent {
  render() {
    const {email, name, picture} = this.props.details
    return (
      <div className={styles.container}>
        <p>Name: {name.first} {name.last}</p>
        <p>Email: {email}</p>
        <img src={picture.large} alt="profile" />
      </div>
    )
  }
}

export default Profile;
