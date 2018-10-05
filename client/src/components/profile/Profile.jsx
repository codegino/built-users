import React from 'react';
import styles from './Profile.module.scss';

class Profile extends React.PureComponent {
  render() {
    const {location, name, picture, cell, gender, phone, email} = this.props.details
    return (
      <div className={styles.container}>
        <div className={`${styles.face} ${styles.faceFront}`}>
         <img src={picture.large} alt="profile" className={styles.picture}/>
         <div className={styles.details}>
           <p>Name: {name.first} {name.last}</p>
           <p>City: {location.city}</p>
           <p>State: {location.state}</p>
         </div>
        </div>
        <div className={`${styles.face} ${styles.faceBack}`}>
          <p>Phone: {phone}</p>
          <p>Email: {email}</p>
          <p>Cell: {cell}</p>
          <p>Gender: {gender}</p>
        </div>
      </div>
    )
  }
}

export default Profile;
