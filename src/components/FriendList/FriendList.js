import PropTypes from 'prop-types';
import './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) =>
  friends.map(({ id, avatar, name, isOnline }) => (
    <ul key={id} className="friend-list">
      <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
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
