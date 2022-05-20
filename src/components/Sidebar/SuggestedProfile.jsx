import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useActiveUser } from "../../context/activeUserContext";
import { getUserById } from "../../services/firebaseServices";
import {updateActiveUserFollowing,updateFollowedUserFollowers} from "../../services/firebaseServices"; 

const SuggestedProfile = ({
  profileDocId,
  username,
  profileId,
  userId,
  activeUserDocId,
}) => {
  const { setActiveUser } = useActiveUser();
  const [followed, setFollowed] = useState(false);

  const handleFollowUser=async()=>{
      setFollowed(true);
      await(updateActiveUserFollowing(activeUserDocId,profileId,false),updateFollowedUserFollowers(profileDocId,userId,false));
      const [user]=await getUserById(userId);
      setActiveUser(user);
  }

  return (
    !followed && (
      <div className="flex flex-row items-center align-items justify-between text-red-medium">
        <div className="flex items-center justify-between">
          <img
            className="rounded-full w-8 flex mr-3"
            src={`/images/avatars/${username}.jpg`}
            alt=""
          />
          <Link to={`/profile/${username}`}>
            <p className="font-bold text-sm">{username}</p>
          </Link>
        </div>
        <button
          className="text-xs font-bold text-red-medium"
          type="button"
          onClick={handleFollowUser}
        >
          Follow
        </button>
      </div>
    )
  );
};

export { SuggestedProfile };
