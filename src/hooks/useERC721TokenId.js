import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { getAccount } from '@selectors/user.selectors';
import config from '@utils/config';
import useMaticPosClient from './useMaticPosClient';
import { useIsMainnet } from './useIsMainnet';
import usePollar from './usePollar';
import { useDTXBalance } from './useERC721Balance';

export function useDTXTokenIds() {
  const [dtxEthIds, setDtxEthIds] = useState([]);
  const [dtxMaticIds, setDtxMaticIds] = useState([]);

  const account = useSelector(getAccount);
  const isMainnet = useIsMainnet();

  const [posClientParent, posClientChild] = useMaticPosClient();

  const [dtxEthBalance, dtxMaticBalance] = useDTXBalance();

  const fetchDtxIds = useCallback(async () => {
    if (account && posClientParent && posClientChild) {
      const ethIds = await Promise.all(
        [...Array(parseInt(dtxEthBalance)).keys()].map((i) =>
          posClientChild.tokenOfOwnerByIndexERC721(
            account,
            config.DTX_ADDRESSES[isMainnet ? 'mainnet' : 'goerli'],
            i,
            { parent: true }
          )
        )
      );

      setDtxEthIds(ethIds);

      const maticIds = await Promise.all(
        [...Array(parseInt(dtxMaticBalance)).keys()].map((i) =>
          posClientParent.tokenOfOwnerByIndexERC721(
            account,
            config.DTX_ADDRESSES[isMainnet ? 'matic' : 'mumbai'],
            i,
            { parent: false }
          )
        )
      );

      setDtxMaticIds(maticIds);
    }
  }, [isMainnet, posClientParent, posClientChild, dtxEthBalance, dtxMaticBalance]);

  usePollar(fetchDtxIds);

  return [dtxEthIds, dtxMaticIds];
}
