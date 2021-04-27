import { MaticPOSClient } from '@maticnetwork/maticjs';
import { useSelector } from 'react-redux';
import { getAccount } from '@selectors/user.selectors';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import config from '@utils/config';
import RootChain from '@maticnetwork/maticjs/lib/root/RootChain';
import ExitManager from '@maticnetwork/maticjs/lib/common/ExitManager';
import { useIsMainnet } from './useIsMainnet';

// DEV NOTE:
// THIS CODE IS BASED ON CODE PROVIDED BY MATIC, should be reviewed closely as we are using typescript import, not js require, and different params
// const matic_raw = require("./maticjs")
// const config = require("./config.json")
// const ext_mngr = require("./maticjs/lib/common/ExitManager")
// // console.log(ext_mngr)
// const root_chain = require("./maticjs/lib/root/RootChain.js")
// // console.log(root_chain)
// const { default: ExitManager } = require("./maticjs/lib/common/ExitManager")
// const { default: RootChain } = require("./maticjs/lib/root/RootChain.js")
// const params = {
//   network: "testnet",
//   version: "mumbai",
//   maticProvider: config.MATIC_PROVIDER,
//   parentProvider: config.PARENT_PROVIDER,
//   posRootChainManager: config.ROOTCHAIN_MANAGER_PROXY,
//   posERC721Predicate: config.ERC721_PREDICATE_PROXY,
//   posERC1155Predicate: config.ERC1155_PREDICATE_PROXY,
// }
// async function exec() {
//   const pos_client = new matic_raw.MaticPOSClient(params)
//   // console.log(pos_client)
//   const mgr = new ExitManager(RootChain, params, pos_client)
//   const temp = mgr.web3Client.posRootChainManager.exitManager
//   // console.log(temp)
//   const payload = await temp.buildPayloadForExit(
//       "0xbb87a5deab9484e41e880a11e3b65346df0c7974a643f6ec294baa4d7b943b9c", //burntrxhash
//       "0x8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b036")// eventsignal- event type
//   console.log(payload)
// }
// exec()

export default function useMaticPosClient() {
  const account = useSelector(getAccount);
  const isMainnet = useIsMainnet();

  const [posExitManager, setPosExitManager] = useState();

  useEffect(() => {
    const web3 = new Web3(window.ethereum);

    if (account) {
      const options = {
        network: isMainnet ? 'mainnet' : 'testnet',
        version: isMainnet ? 'v1' : 'mumbai',
        parentProvider: web3,
        maticProvider: isMainnet ? config.WEB3_URLS.MATIC : config.WEB3_URLS.MUMBAI,
        parentDefaultOptions: { from: account },
        maticDefaultOptions: { from: account },
      };
      const client = new MaticPOSClient(options);
      const mgr = new ExitManager(RootChain, options, client);
      const temp = mgr.web3Client.posRootChainManager.exitManager;
      setPosExitManager(
        temp,
      );
    }
  }, [account, isMainnet]);

  return [posExitManager];
}
