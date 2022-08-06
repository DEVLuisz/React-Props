import React from 'react';
import Logo from '../Assets/banner.png';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <header className={styles.banner}>
      <img src={Logo} alt='Banner' className={styles.bannerImg}/>
    </header>
  )
}

export default Banner
