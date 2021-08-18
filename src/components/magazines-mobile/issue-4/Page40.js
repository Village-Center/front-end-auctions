import React from 'react'
import styles from './page40.module.scss'

const Page40 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.back} src='/magazine/4/images/4546_image1_mobile.png' />
      <img className={styles.image1} src='/magazine/4/images/4546_image5_mobile.png' />
      <img className={styles.image2} src='/magazine/4/images/4546_image6.png' />
      <img className={styles.image3} src='/magazine/4/images/4546_image6.png' />
      <img className={styles.image4} src='/magazine/4/images/4546_image6.png' />
      <img className={styles.image5} src='/magazine/4/images/4546_image6.png' />
      <img className={styles.image6} src='/magazine/4/images/4546_image6.png' />
      <img className={styles.image7} src='/magazine/4/images/4546_image6.png' />

      <div className={styles.text1}>
        DeFi Staking Functionality        
      </div>

      <div className={styles.text2}>
        All NFTs can be staked in the DIGITALAX NFT Staking Contracts on Polygon for $MONA yield. This forms part of the broader Fashion x DeFi merger that DIGITALAX has undertaken to bring greater utility to metaversal fashion and also welcome multitudes more into web3 and DeFi. 
        <br /><br />
        What if you could earn more from what you wear? Wear to DeFi lets you put your fashion to work for you. We are melting the centralised exploitative crown to weave the fabric of a generative ecosystem.
      </div>

      <div className={styles.text3}>
        Unique PFP Collectible Avatar W/ In-Game Utility
      </div>

      <div className={styles.text4}>
        With every NFT enjoy a custom unique PFP Collectible Avatar that can be taken into The First Dungeon— an open source 2D battle royale game developed by Thijmen Happy. The game is launching through DIGITALAX’s ESPA esports platform mid September. 
        <br /><br />
        Take your character in-game to engage in The First Dungeon casual esports battles, rank on the leaderboard and earn $MONA as you level up from 0 to 1.  
        <br /><br />
        See more about <a>The First Dungeon here.</a> 
      </div>

      <div className={styles.text5}>
        3D Model FBX File Included
      </div>

      <div className={styles.text6}>
        All of the DIGITALAX digital fashion garment and accessory ERC-721 NFTs are backed by the underlying 3D model FBX file, stored in IPFS. This forms part of the platform’s broader pursuit for decentralising content distribution and access to it. The FBX file is one of the most popular and widely used 3D data interchange formats between 3D editors and game engines. There are still efficiency problems that exist with it, which DIGITALAX is working to solve through it’s DASH File Format architecture. 
      </div>

      <div className={styles.text7}>
        Fractional Garment ERC-1155 Open Source Pattern
      </div>

      <div className={styles.text8}>
        Fractional Garment Ownership (FGO) sets forth the standard and dress code for the manufacture of digital fashion along the content supply chain. FGO leverages ERC Protocol standards across the Ethereum Blockchain and Polygon (Matic Network) for breaking down a master ERC-721 digital garment into its programmable and composable ERC-1155 elements of materials, patterns and textures.
        <br /><br />
        Here, we are using a variant on the ERC-998 standard, where each ERC-721 token can hold a balance of ERC-1155 NFTs. We coin this respectively the Parent and Child NFTs. This allows for other designers to leverage off of the open source digital libraries, incorporating the patterns, materials and textures into their master garments.
      </div>

      <div className={styles.text9}>
        DressX Try On Functionality
      </div>

      <div className={styles.text10}>
        Take your digital fashion item and wear across the social media metaverse. DressX’s try on technology allows you to overlay your digital fashion itme onto a photo of your choosing. It’s the outift that doesn’t exist— physically at least! 
      </div>

      <div className={styles.text11}>
        Decentraland In-Game Digital Fashion Outfit
      </div>

      <div className={styles.text12}>
        Exclusive W3FW Decentraland In-Game Digital Fashion Memorabilia Bomber Jacket! View it also through the DressX AR Try On filter and head over to DRIP to purchase the physical varsity jacket version to rep IRL!        
      </div>

      <video autoPlay muted loop className={styles.video1}>
        <source src='./magazine/4/videos/4546_video2.mp4' type='video/mp4' />
      </video>

      <img className={styles.image8} src='/magazine/4/images/4546_image7.png' />
      <video autoPlay muted loop className={styles.video2}>
        <source src='./magazine/4/videos/4546_video3.mp4' type='video/mp4' />
      </video>
      <video autoPlay muted loop className={styles.video3}>
        <source src='./magazine/4/videos/4546_video4.mp4' type='video/mp4' />
      </video>
      <video autoPlay muted loop className={styles.video4}>
        <source src='./magazine/4/videos/4546_video5.mp4' type='video/mp4' />
      </video>
      <video autoPlay muted loop className={styles.video5}>
        <source src='./magazine/4/videos/4546_video6.mp4' type='video/mp4' />
      </video>
    </div>
  )
}

export default Page40