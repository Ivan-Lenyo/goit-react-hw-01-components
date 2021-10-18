import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) =>
  friends.map(({ id, avatar, name, isOnline }) => (
    <ul key={id} className={s.friendlist}>
      <FriendListItem
        avatar={avatar}
        name={name}
        status={isOnline ? 'green' : 'red'}
      />
    </ul>
  ));

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
