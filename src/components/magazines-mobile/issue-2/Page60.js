import React from 'react'
import styles from './page60.module.scss'
import Link from 'next/link';

const Page60 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/63_64/image3.png" className={styles.image3} />
      <img src="./magazine/1/63_64/image4.png" className={styles.image4} />
      <p className={styles.text1}>#DivingIntoSomniumSpace</p>
      <Link href="https://somniumspace.com/parcel/2701"><a>
      <img src="./magazine/1/63_64/image5.png" className={styles.image5} />
      </a>
      </Link>
      <Link href="https://somniumspace.com/parcel/752"><a>
      <img src="./magazine/1/63_64/image6.png" className={styles.image6} />
      </a>
      </Link>  
      <Link href="https://somniumspace.com/parcel/3250"><a>
      <img src="./magazine/1/63_64/image7.png" className={styles.image7} />
      </a>
      </Link>     
      <Link href="https://somniumspace.com/parcel/3461"><a>
      <img src="./magazine/1/63_64/image8.png" className={styles.image8} />
      </a>
      </Link>  
      <img src="./magazine/1/63_64/image9.png" className={styles.image9} />
      <img src="./magazine/1/63_64/image10.png" className={styles.image10} />
      <img src="./magazine/1/63_64/image11.png" className={styles.image11} />
      <p className={styles.text2}>Genesis VR Gallery</p>
      <p className={styles.text3}>360 Gallery</p>
      <p className={styles.text4}>Iron Giant</p>
      <p className={styles.text5}>Local Butterfly</p>
      <p className={styles.text6}>Somnium Waypoint</p>
      <p className={styles.text7}>Pablo Rodriguez-Fraile</p>
      <p className={styles.text8}>Magical Forest</p>
    </div>
  )
}

export default Page60