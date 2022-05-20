import {useContext,createContext, useState, useEffect} from 'react';
import { useUserOnAuth } from './userContext';
import { getUserById } from '../services/firebaseServices';

const ActiveUserContext=createContext();
const useActiveUser=()=>useContext(ActiveUserContext);

const ActiveUserProvider= ({children}) => {
    const [activeUser,setActiveUser]=useState({});
    const {user}=useUserOnAuth();
    useEffect(()=>{
        const getUserObjByUserId=async()=>{
            const [response]=await getUserById(user.uid);
            setActiveUser(response);
        }
        if(user?.uid){
            getUserObjByUserId();
        }
    },[user]);
  return (
      <ActiveUserContext.Provider value={{user:activeUser,setActiveUser}}>
          {children}
      </ActiveUserContext.Provider>
  )
}

export {useActiveUser,ActiveUserProvider}
