import React from 'react'
import Link from 'next/link'
import styles from './page31.module.scss'

const Page31 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.background} src='./magazine/4/images/3536_background1_mobile.png' />
      <img className={styles.image1} src='./magazine/4/images/3536_diamond.png' />
      <img className={styles.image2} src='./magazine/4/images/3536_diamond.png' />
      <img className={styles.image3} src='./magazine/4/images/3536_diamond.png' />
      <img className={styles.image4} src='./magazine/4/images/3536_diamond.png' />
      <img className={styles.image5} src='./magazine/4/images/3536_image1.png' />

      <div className={styles.text1}>
        DEFI GEMS        
      </div>

      <div className={styles.text2}>
        <span>XDEFI Wallet
          <Link href='https://twitter.com/xdefi_wallet'>
            <a target='_blank'>
              <img src='./magazine/4/images/3536_twitter.png'/>
            </a>
          </Link>
        </span><br />
        XDeFi Wallet is the ultimate cross compatible secure custody gateway to the decentralised web, built with DeFi power users in mind. The wallet is chain agnostic with support for Ethereum, Binance Smart Chain and Polygon Network among others. We’ve all experienced the headache of web3 asset management; some of us learnt the hardway through unfortunate hacks, loss of private keys or even as of more recently, IRL social engineering. We often don’t think about just how much goes into establishing secure non-custodial wallet solutions, and then to have this be fully interoperable through an intuitive interface just makes everything that much more complex. Think about how much logic the web queries, smart contract audits and the hours of user testing for slight UX improvements. XDeFi Wallet is still in BETA, but if you have had the chance to take a look under the hood of what they have come up with so far, it represents a very cool engineering step forward for the entire space.
        <br /><br />
        <span>Party PARROT
          <Link href='https://twitter.com/Rafi_0x/status/1405929490547712017'>
            <a target='_blank'>
              <img src='./magazine/4/images/3536_twitter.png'/>
            </a>
          </Link>
        </span><br />
        Party Parrot is a stablecoin project built on Solana. Much like MakerDAO, users can deposit different assets as collateral to mint a collateralised stablecoin $PAI. Parrot will allow Ethereum DeFi assets such as Sushi & Curve LP tokens, Aave & Compound interest bearing tokens, etc to be used as collateral to mint $PAI on Solana. This means users won’t have to choose between yield farming on ETH or on Solana. They’ll be able to do both—  its an ingenious solution for bridging liquidity from Ethereum to Solana. Parrot is also establishing into a broader lending market, and finally into a vAMM margin trading protocol, using $PAI as its main unit of account. So Parrot has geared up to become a full-fledged DeFi hub for Solana.
        <br /><br />
        <span>Parallel nft
          <Link href='https://twitter.com/Rafi_0x/status/1422969655715577860'>
            <a target='_blank'>
              <img src='./magazine/4/images/3536_twitter.png'/>
            </a>
          </Link>
        </span><br />
        Parallel will be a collectable card game using NFTs (think Magic The Gathering with NFTs) and imo it has the potential to play a big role in bringing mass adoption to NFTs. Instead of doing something like “a normal card game, but with NFTs instead of physical cards”, Parallel is really exploring the full potential of what mixing NFTs, AR and physical cards can bring. AR will be a major part of the game, and all NFT cards will be redeemable for physical cards, which apart from being collectibles on their own, will also act as AR markers. In the game story, Parallels are groups of humans that evolved separately across the universe over thousands of years, and are now fighting to take back control of Earth. There are 5 different Parallels to choose from: Earthen, Marcolian, Augencore, Kathari and Shroud. Each Parallel has their own set of cards, and in order to play the game, each player will need a deck of 40 cards containing only one of the 5 Parallel types + Universal cards. So Universal cards act a bit like a joker, and are the only ones that can work with any deck. Even though there is no official information on that yet, the game should also have a native currency, $PRIME, and one of the ways to earn $PRIME will likely be through the use of Prime Key cards, for which there is a limited supply of 1500.  Users should be able to burn Prime Keys for a percentage of the $PRIME supply, or combine them with Catalyst Drives (supply of 250) to create Prime Drives, which are expected to give holders passive income in $PRIME (but again, there is no official info released on that yet). 
      </div>

      <div className={styles.text3}>
        - rafi_0X
        <Link href='https://twitter.com/Rafi_0x'>
          <a target='_blank'>
            <img src='./magazine/4/images/3536_twitter.png'/>
          </a>
        </Link>
      </div>

      <div className={styles.text4}>
        diamond ha
      </div>
    </div>
  )
}

export default Page31