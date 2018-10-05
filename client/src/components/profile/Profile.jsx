import React from 'react';
import styles from './Profile.module.scss';

class Profile extends React.PureComponent {
  render() {
    const {location, name, picture} = this.props.details
    return (
      <div className={styles.container}>
        <img src={picture.large} alt="profile" className={styles.picture}/>
        <div className={styles.details}>
          <p>Name: {name.first} {name.last}</p>
          <p>City: {location.city}</p>
          <p>State: {location.state}</p>
        </div>
      </div>
    )
  }
}

export default Profile;
