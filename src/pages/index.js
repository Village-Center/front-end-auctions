import React, { memo } from 'react';
import styles from './styles.module.scss';
import UButton from '@components/buttons/ubutton'
import MobilePanel from '@components/mobile-panel'

const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navBack}>
        <video autoPlay loop>
          <source src={`/video/BGVIDEO-MARKETPLACE.mp4`} type="video/mp4" />
        </video>
        <div className={styles.buttonWrapper}>
          <UButton caption='go to the og marketplace >' link="/marketplace" />
        </div>
      </div>
      <div className={styles.promoteWrapper}>
        <div style={{
          display: 'flex'
        }}>
        <h1>MARKETPLACE</h1>
        <img src="/images/social-icons/white-logo.svg" alt="white-logo" />
        </div>
        <h2>WE ARE THE FIRST DIGITAL FASHION NFT MARKETPLACE. OVER 1300 ETH IN SALES. <br />A GLOBAL DESIGNER NETWORK.</h2>
        <h5>DeFi X NFTs: Stake Fashion NFTs for $MONA<br /> Pioneering Fractional Garment Ownership.</h5>
      </div>
      <div className={styles.descriptionWrapper}>
        <h1>ALL DESIGNS  ARE HANDMADE BY OUR GLOBAL DESIGNER NETWORK AND INFUSED WITH THE SPECIAL ATTENTION OF OUR IN HOUSE FASHION STUDIO.</h1>
        <h2>ALL NFTs BACKED BY THE 3D FILE. ALL METADATA DECENTRALIZED.</h2>
      </div>
      <MobilePanel style={{ padding: 0 }}>
        <div className={styles.fashionWrapper}>
          <img src="/images/fashion/fashion-1.png" alt="fashion-1" />
          <img src="/images/fashion/fashion-2.png" alt="fashion-2" />
          <img src="/images/fashion/fashion-3.png" alt="fashion-3" />
          <img src="/images/fashion/fashion-4.png" alt="fashion-4" />
        </div>
      </MobilePanel>
      <MobilePanel
        backgroundColor={'white'}
        color={'black'}
        style={{
          paddingRight: 20
        }}
      >
        <div className={styles.mobilePromoteWrapper}>
          <div className={styles.title}>
            <h1>MARKETPLACE</h1>
            <h2>We are the first digital fashion NFT marketplace over 1300 ETH in sales. A global designer network.</h2>
          </div>
          <img src="/images/logo.jpg" alt="black-logo" />
        
        </div>
      </MobilePanel>
      <MobilePanel
        style={{
          textAlign: 'center',
          letterSpacing: 1,
          fontSize: 11
        }}
      >
        ALL DESIGNS  ARE HANDMADE BY OUR GLOBAL DESIGNER NETWORK AND INFUSED WITH THE SPECIAL ATTENTION OF OUR IN HOUSE FASHION STUDIO.
      </MobilePanel>
      <MobilePanel 
        backgroundColor={'#74A3F3'}
        color={'white'}
        style={{
          textAlign: 'center',
          letterSpacing: 2,
          fontSize: 14
        }}
      >
        ALL NFTs BACKED BY THE 3D FILE. <br/> ALL METADATA DECENTRALIZED.
      </MobilePanel>
      <MobilePanel 
        backgroundColor={'white'}
        color={'black'}
        style={{
          textAlign: 'center',
          letterSpacing: 1,
          fontSize: 12
        }}
      >
        DeFi X NFTs: Stake Fashion NFTs for $MONA
      </MobilePanel>
    </div>
  )
}

export default memo(LandingPage)

