import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cn from 'classnames';
import { DESIGNERS } from '@constants/router-constants';
import styles from './styles.module.scss';

const SmallPhotoWithText = ({
  id,
  name,
  photo,
  address,
  className,
  addressLink,
  addressText,
  children,
}) => (
  <div className={cn(styles.designerPhotoWrapper, className)}>
    {photo && <img className={styles.designerPhoto} src={photo} alt="" />}
    {id && (
      <Link href={`${DESIGNERS}${id}`}>
        <a className={cn(styles.designerName, styles.designerNameLink)}>{name}</a>
      </Link>
    )}
    {address && <p className={cn(styles.hashAddress, 'smallPhotoWithText__hashAddress')} title={address}>{address}</p>}
    {addressLink && (
      <a
        className={styles.hashAddress}
        href={addressLink}
        target="_blank"
        rel="noreferrer"
        title={addressText}
      >
        {addressText}
      </a>
    )}
    {children}
  </div>
);

SmallPhotoWithText.propTypes = {
  className: PropTypes.string,
  photo: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  address: PropTypes.string,
  addressLink: PropTypes.string,
  addressText: PropTypes.string,
  children: PropTypes.any,
};

SmallPhotoWithText.defaultProps = {
  className: '',
  photo: '',
  name: '',
  id: '',
  address: '',
  addressLink: '',
  addressText: '',
  children: null,
};

export default memo(SmallPhotoWithText);
