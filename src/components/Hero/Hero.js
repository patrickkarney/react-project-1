import React from 'react';
import styles from './Hero.scss';


class Hero extends React.Component {
    render() {
      return (
        <header className={styles.component}>
            <h2 className={styles.title}>Things to do!</h2>
            <img className={styles.image} src='https://images.pexels.com/photos/3607542/pexels-photo-3607542.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'></img>
        </header>
        )
    }
}

export default Hero;