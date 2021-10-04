import React from 'react'
import styles from './styles.module.scss'

const UserList = props => {
  const { userLimit, className, users, onClickSeeAll } = props
  // const users = [1,2,3,4,5,6,7,8,9,10]
  console.log('users: ', users)
  const length = Math.min(users.length, userLimit || 1)
  
  return (
    <div className={[styles.wrapper, className].join(' ')}>
      <div className={styles.background}></div>
      <div className={styles.usersWrapper}>
        {
          users.slice(0, length).map((item, index) => {
            console.log('item: ', item)
            const { avatar } = item
            return (
              <a href='' key={item.name}>
                <img src={`${avatar && avatar != '' ? avatar : '/images/user-avatar.png'}`} key={index} />
              </a>
            )
          })
        }
      </div>
      <button type='button' className={styles.seeAllButton} onClick={onClickSeeAll}>
        See All
      </button>
    </div>
  )
}

export default UserList