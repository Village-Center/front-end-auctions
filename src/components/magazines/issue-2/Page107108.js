import React from 'react';
import styles from './page107108.module.scss';
import Link from 'next/link';

const Page107108 = () => {
  return (
    <div className={styles.wrapper}>
       <img src="./magazine/1/107_108/image1.png" className={styles.image1} />
       <img src="./magazine/1/107_108/image2.png" className={styles.image2} />
       <p className={styles.text1}>NIWT GNIHSINAV</p>
       <p className={styles.text2}>Off to the Metaverse</p>
       <Link href="https://www.instagram.com/stellaachenbach/"><a className={styles.text3}>
       Stella Achenbach
        </a>
       </Link>
       <Link href="https://www.instagram.com/serahreikka/"><a className={styles.text4}>
       MIA LOCKLACE
        </a>
       </Link>
    </div>
  );
};

export default Page107108;
