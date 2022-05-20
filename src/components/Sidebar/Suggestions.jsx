import {useEffect,useState} from 'react';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';
import { getsuggestedProfiles } from '../../services/firebaseServices';
import {SuggestedProfile} from './SuggestedProfile';

// Suggestions.propTypes = {
//     userId: PropTypes.string,
//     following: PropTypes.array,
//     activeUserDocId: PropTypes.string
// };


const Suggestions = ({userId,following,activeUserDocId}) => {
    const [profiles,setProfiles]=useState(null);
    // console.log(profiles);

    useEffect(()=>{
        const suggestedProfiles=async()=>{
            const response=await getsuggestedProfiles(userId,following);
            setProfiles(response)
        }
        if(userId){
            suggestedProfiles();
        }
    },[userId,following])
  return !profiles?(
    <Skeleton count={1} height={150} className="mt-5 bg-red-medium"/>
  ):profiles.length>0?(
    <div className="rounded flex flex-col">
        <div className="text-sm flex items-center align-items justify-between mb-2">
        <p className="font-bold text-gray-base text-red-medium">Suggestions to follow</p>
      </div>
      <div className="mt-4 grid gap-5">
        {profiles.map((profile) => (
          <SuggestedProfile
            key={profile.docid}
            profileDocId={profile.docid}
            username={profile.username}
            profileId={profile.userId}
            userId={userId}
            activeUserDocId={activeUserDocId}
          />
        ))}
      </div>

    </div>
  ):null
}

export {Suggestions}