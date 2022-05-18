import {firebaseInit,FieldValue} from "../firebase";

export const userExists=async(userName)=>{
    const result=await firebaseInit
    .firestore()
    .collection('users')
    .where('username','==', userName.toLowerCase())
    .get();
    // console.log(result.docs)
    return result.docs.length;
} 