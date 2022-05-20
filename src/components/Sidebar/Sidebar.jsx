import React from 'react';
import { useActiveUser } from '../../context/activeUserContext';
import { Suggestions } from './Suggestions';
import { User } from './User';

const Sidebar = () => {
  const {user:{docid='',fullName,username,userId,following}={}}=useActiveUser();
  // console.log(user)
  return (
    <div>
      <User username={username} fullname={fullName}/>
      <Suggestions userId={userId} following={following} activeUserDocId={docid} />
    </div>
  )
}

export {Sidebar}