import React, { memo, useMemo } from 'react';
import cn from 'classnames';
// import Link from 'next/link';
import { useSelector } from 'react-redux';
import { getAllDesigners } from '@selectors/designer.selectors';
import styles from './styles.module.scss';
// import DesignerCard from './designer-card';

const DesignerList = () => {
  const designerList = useSelector(getAllDesigners());
  const sortedList = useMemo(() => designerList
    .toJS()
    .sort((a, b) => parseInt(a.id, 10) < parseInt(b.id, 10)), [designerList]);
  console.log('sortedList', sortedList);
  return (
    <div className={cn(styles.wrapper)}>
      <h2 className={styles.title}>Global Designer Network</h2>
      <div className={styles.container}>{}</div>
    </div>
  );
};

export default memo(DesignerList);
