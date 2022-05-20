import {FieldValue, firebaseInit} from "../firebase";

export const userExists=async(userName)=>{
    const result=await firebaseInit
    .firestore()
    .collection('users')
    .where('username','==', userName.toLowerCase())
    .get();
    return result.docs.length;
} 

export const getUserById=async(userId)=>{
    const result=await firebaseInit
    .firestore()
    .collection('users')
    .where('userId','==',userId)
    .get();
    const user= result.docs.map(item=>({
        ...item.data(),
        docid:item.id
    }))
    return user;
}

export const getsuggestedProfiles=async(userId,following)=>{
    let collection=firebaseInit.firestore().collection('users');

    if(following.length>0){
        collection=collection.where('userId','not-in',[...following,userId])
    }else{
        collection=collection.where('userId','!=',userId)
    }

    const result=await collection.limit(10).get();

    const profiles=result.docs.map(user=>({
        ...user.data(),
        docid:user.id

    }))
    return profiles;
}

export const updateActiveUserFollowing=async(activeUserDocId,profileId,isActiveFollowingProfile)=>{
    const result=firebaseInit
    .firestore()
    .collection('users')
    .doc(activeUserDocId)
    .update({
        following:isActiveFollowingProfile?FieldValue.arrayRemove(profileId):FieldValue.arrayUnion(profileId)
    })
    return result;

}

export const updateFollowedUserFollowers=async(profileDocId,userId,isActiveFollowingProfile)=>
{
    const result=firebaseInit
    .firestore().collection('users').doc(profileDocId)
    .update({
        followers:isActiveFollowingProfile?FieldValue.arrayRemove(userId):FieldValue.arrayUnion(userId)
    })
    return result;

}