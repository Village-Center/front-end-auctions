import React from 'react'
import styles from './page3940.module.scss'

const Page3940 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image1} src='./magazine/4/images/3940_image1.png' />
      <h1>
        FASHION FOR THE METAVERSE      
      </h1>
      <div class={styles.text1}>
        WHAT ARE YOU WEARING?        
      </div>
      <div class={styles.text2}>
        WHAT ARE YOU WEARING?        
      </div>
      <div class={styles.text3}>
        WHAT ARE YOU WEARING?        
      </div>
      <div class={styles.text4}>
        WHAT ARE YOU WEARING?        
      </div>
      <div class={styles.text5}>
        WHAT ARE YOU WEARING?        
      </div>
      <div className={styles.back1}></div>
      <video autoPlay muted loop className={styles.video1}>
        <source src='./magazine/4/videos/3940_video1.mp4' type='video/mp4' />
      </video>
      <img className={styles.image2} src='./magazine/4/images/3940_image2.png' />
    </div>
  )
}

export default Page3940
