import React, { useState } from 'react';
import Router from 'next/router';

import Hint from '@components/hint';
import { useMonaBalance } from '@hooks/useMonaBalance';

import styles from '../styles.module.scss';
import parentStyles from '../styles.module.scss';
import CurrencyInput from '@components/currency-input';
import Button from '@components/buttons/button';
import useApproveForMatic from '@hooks/useApproveForMatic';
import useDepositToMatic from '@hooks/useERC20DepositToMatic';

export default function Deposit() {
  const [monaEthBalance] = useMonaBalance();
  const [transferAmount, setTransferAmount] = useState('0');

  const { approved, approveCallback } = useApproveForMatic(transferAmount);

  const depositCallback = useDepositToMatic();

  return (
    <div className={styles.depositWithdrawWrapper}>
      <div className={styles.bridgeTitle}>DEPOSIT $MONA TO MATIC</div>
      <div>
        <div style={{ marginBottom: 15, display: 'flex', justifyContent: 'center' }}>
          <Hint
            title="BALANCE"
            hintText="IT TAKES UP TO 10 MINUTES FOR YOUR BALANCE TO BE REFLECTED ON MATIC, ONCE THE TRANSACTION IS CONFIRMED ON ETHEREUM."
          />
        </div>

        <div style={{ marginBottom: 30, marginLeft: 'auto', marginRight: 'auto' }}>
          <div className={`${styles.amount} ${parentStyles.ethColor}`}>
            {parseFloat(monaEthBalance).toFixed(6)} $MONA
          </div>
        </div>

        <CurrencyInput
          color={parentStyles.ethColor}
          placeHolder="$MONA"
          max={monaEthBalance}
          value={transferAmount}
          setValue={setTransferAmount}
        />

        <button
          className={styles.transferButton}
          onClick={() => {
            if (!approved) {
              approveCallback();
            } else {
              depositCallback(transferAmount);
            }
          }}
          style={{ marginTop: 40 }}
        >
          <div className={styles.actionText}>
            {!approved ? 'APPROVE TRANSFER' : 'DEPOSIT TO MATIC'}
          </div>
        </button>
      </div>
      <Button className={styles.backButton} background="#777777" onClick={() => Router.push(`/bridge`)}>
        <span>RETURN TO BRIDGE</span>
      </Button>
    </div>
  );
}
