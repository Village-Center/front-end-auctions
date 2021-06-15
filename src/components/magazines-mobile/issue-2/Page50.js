import React from 'react';
import styles from './page50.module.scss';

const Page50 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/53_54_mobile.jpg" className={styles.back} />
      <div className={styles.text1}>WEB3 WIZARDS</div>
      <div className={styles.text2}>
        One of the biggest and most exciting updates for the entire Ethereum community is going live
        this summer. EIP-1559 changes the current mining structure to include both a base fee, which
        is burned, and an inclusion fee, which can be thought of as a tip for the miners. There is
        also the incorporation of elastic block sizes, which increase or decrease depending on the
        state of the network congestion.
        <br />
        <br />
        All of this sets up EIP-1559 to enable Ethereum in overcoming the current opaque and
        unreliable price auction model, where now, not only will a user have much more
        predictability and transparency as to the transaction costs of the network but they will
        also be afforded higher reliability in avoiding overpaying for transaction costs on the
        network.
        <br />
        <br />
        So, with that said, for this series of Web3 Wizards we are recognising some of the core
        contributors and front runners of EIP-1559— perhaps one of the most important economical
        updates for the entirity of Ethereum’s future and setting the ecosystem up for even more
        adoption success.
      </div>
      <div className={styles.text3}>Abdelhamid Bakhta.</div>
      <div className={styles.text4}>Project: EIP-1559.</div>
      <div className={styles.text5}>Tim Beiko.</div>
      <div className={styles.text6}>Project: EIP-1559.</div>
      <div className={styles.text7}>Pooja Ranjan.</div>
      <div className={styles.text8}>Project: EIP-1559.</div>
      <div className={styles.text9}>Alex Beregszaszi.</div>
      <div className={styles.text10}>Project: EIP-1559.</div>
      <img src="./magazine/2/images/53_54_image1.png" className={styles.image1} />
      <img src="./magazine/2/images/53_54_image2.png" className={styles.image2} />
      <img src="./magazine/2/images/53_54_image3.png" className={styles.image3} />
      <img src="./magazine/2/images/53_54_image4.png" className={styles.image4} />
    </div>
  );
};

export default Page50;
