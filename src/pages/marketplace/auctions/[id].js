import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import HeroBar from '@components/hero-bar';
import ImageCard from '@components/image-card';
import ProductCard from '@components/product-card';
import styles from './index.module.scss';
import Container from '@components/container';
import { getCollectionGroupById, getDigitalaxMarketplaceV2Offers } from '@services/api/apiService';
import { useSelector } from 'react-redux';
import { getChainId } from '@selectors/global.selectors';
import HeroSection from '@components/hero-section';
import ProductInfoCard from '@components/product-info-card';

const Auctions = () => {
  const route = useRouter();
  const chainId = useSelector(getChainId);
  const [auctions, setAuctions] = useState([]);
  const { id } = route.query;
  const mainLogos = ['/images/metaverse/amongus-logo1.png'];

  useEffect(() => {
    const fetchCollectionGroup = async () => {
      const { digitalaxCollectionGroup } = await getCollectionGroupById(chainId, id);
      let aucs = [];
      digitalaxCollectionGroup.auctions.forEach((auction) => {
        aucs.push({
          ...auction,
          rarity: 'Exclusive',
        });
      });

      setAuctions(aucs);
    };

    fetchCollectionGroup();
  }, []);

  return (
    <div className={styles.wrapper}>
      <HeroSection logo="/images/metaverse/auctionsLogo.png" />

      {auctions.map((auction, index) => {
        if (index % 2 === 1) return <> </>;
        return (
          <section className={styles.productsSection} key={auction.id}>
            <video autoPlay muted loop className={styles.backVideo}>
              <source src="./images/metaverse/all_skins.mp4" type="video/mp4" />
            </video>
            <Container>
              <div className={styles.body}>
                <ProductInfoCard
                  product={auctions[index]}
                  price={auctions[index].topBid}
                  showRarity
                />
                {index + 1 < auctions.length ? (
                  <ProductInfoCard
                    product={auctions[index + 1]}
                    price={auctions[index + 1].topBid}
                    showRarity
                  />
                ) : null}
              </div>
            </Container>
          </section>
        );
      })}
    </div>
  );
};

export default Auctions;
