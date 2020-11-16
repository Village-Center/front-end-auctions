import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import BigNumber from 'bignumber.js';
import PropTypes from 'prop-types';
import Button from '@components/buttons/button';
import Modal from '@components/modal';
import InputWithArrows from '@components/input-with-arrows';
import { closePlaceBidModal } from '@actions/modals.actions';
import bidActions from '@actions/bid.actions';
import { getModalParams } from '@selectors/modal.selectors';
import { getMinBidIncrement, getBidWithdrawalLockTime } from '@selectors/global.selectors';
import styles from './styles.module.scss';

const ModalPlaceBid = ({
  className, title, text, textForSelect, buttonText,
}) => {
  const dispatch = useDispatch();

  const { id, priceEth } = useSelector(getModalParams);
  const minBidIncrement = useSelector(getMinBidIncrement);
  const bidWithdrawalLockTime = useSelector(getBidWithdrawalLockTime);

  const minBid = new BigNumber(priceEth).plus(new BigNumber(minBidIncrement));

  const [inputPriceEth, setInputPriceEth] = useState(minBid);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showError, setShowError] = useState(null);

  const handleClose = () => {
    dispatch(closePlaceBidModal());
  };

  const handleClick = () => {

    if (minBid.toNumber() > Number(inputPriceEth)) {
      setShowError(`You must bid at least ${minBid.toString(10)}ETH higher than the current highest bid`);
      return;
    }
    setShowError(null);
    setIsDisabled(true);
    dispatch(bidActions.bid(id, inputPriceEth))
      .then(() => handleClose())
      .catch((e) => setShowError(e.message))
      .finally(() => setIsDisabled(false));

  };

  text[1] = text[1].replace('{minutes}', bidWithdrawalLockTime / 60);

  return (
    <>
      {createPortal(
        <Modal onClose={() => handleClose()} title={title} text={text} className={className}>
          <div className={styles.footer}>
            <p className={styles.footerCaption}>
              <span>{textForSelect}</span>
              <span> {minBid.toString(10)} ETH</span>
            </p>
            <div className={styles.selectWrapper}>
              <div>
                <InputWithArrows
                  minBidIncrement={minBidIncrement}
                  onChange={setInputPriceEth}
                  className={styles.inputWithArrows}
                  value={inputPriceEth}
                />
                {showError && <p className={styles.error}>{showError}</p>}
              </div>
              <Button isDisabled={isDisabled} background="black" onClick={() => handleClick()} className={styles.button}>
                {buttonText}
              </Button>
            </div>
          </div>
        </Modal>,
        document.body,
      )}
    </>
  );
};

ModalPlaceBid.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.array,
  textForSelect: PropTypes.string,
  buttonText: PropTypes.string,
};

ModalPlaceBid.defaultProps = {
  className: '',
  title: 'Place a Bid',
  // eslint-disable-next-line max-len
  text: ['Your ETH will be escrowed into a Smart Contract until the live auction ends or you choose to withdraw it. If another bidder outbids you, your ETH will be immediatley transferred back into your wallet.', 'After placing a bid, you will be unable to withdraw for {minutes} minutes.'],
  textForSelect: 'Minimum Bid:',
  buttonText: 'PLACE A BID',
};

export default ModalPlaceBid;
