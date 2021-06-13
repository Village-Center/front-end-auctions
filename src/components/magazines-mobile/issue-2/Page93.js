import React from 'react'
import styles from './page93.module.scss'
import Link from 'next/link';

const Page93 = () => {
  return (
    <div className={styles.wrapper}>
     <video className={styles.image2} loop autoPlay>
        <source src="./magazine/1/123_124/video1.mov" type="video/mp4" />
       </video>
       <p className={styles.text1}>F<br/><br/>
I<br/><br/>
R<br/><br/>
E<br/><br/><br/><br/>

S<br/><br/>
U<br/><br/>
I<br/><br/>
T</p>
<p className={styles.text2}>N<br/><br/>
A<br/><br/>
S<br/><br/>
H<br/><br/><br/>
 
R<br/><br/>
U<br/><br/>
C<br/><br/>
K<br/><br/>
M<br/><br/>
A<br/><br/>
N</p>
    </div>
  )
}

export default Page93