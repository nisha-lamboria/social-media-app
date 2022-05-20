import {createContext,useContext,useEffect, useState} from 'react';
import { FirebaseContext } from './firebasecontext';

const userOnAuthContext=createContext();
const useUserOnAuth=()=>useContext(userOnAuthContext);

const UserOnAuthProvider=({children})=>{
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('user')??null));
    const {firebaseInit}=useContext(FirebaseContext);
    useEffect(()=>{
        const authListener=firebaseInit.auth().onAuthStateChanged((user)=>{
            if(user){
                localStorage.setItem('user',JSON.stringify(user));
                setUser(user);
            }else{
                localStorage.removeItem('user');
                setUser(null)
            }
        })
        return ()=>authListener();
    },[firebaseInit])
    return (
        <userOnAuthContext.Provider value={{user,setUser}}>
            {children}
        </userOnAuthContext.Provider>
    )
}

export {useUserOnAuth,UserOnAuthProvider};