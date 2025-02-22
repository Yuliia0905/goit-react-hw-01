import css from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendListItem}>
      <img src={avatar} alt={name} width="48" />
      <p className={css.friendName}>{name}</p>
      <p
        className={clsx(css.friendStatus, isOnline ? css.online : css.offline)}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
