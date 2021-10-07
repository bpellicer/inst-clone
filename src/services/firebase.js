import { firebase, FieldValue } from '../lib/firebase';

export async function doesUsernameExist(username){
    const result = await firebase
     .firestore()
     .collection('users')
     .where('username','==',username)
     .get();
    
    return result.docs.map((user) => user.data().length > 0);
}

export async function doesEmailExist(email){
    const result = await firebase
     .firestore()
     .collection('users')
     .where('emailAddress','==',email)
     .get();
    
    return result.docs.map((user) => user.data().length > 0);
}