import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Constants  from 'expo-constants';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

//Intialize firebase

const firebaseConfig ={
    apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId
}

let Firebase = firebase.initializeApp(firebaseConfig);


export const firestore = firebase.firestore();


//create hospital
export const createUserProfile = async (user,Images,additionalData) => {
  if(!user) return;
  const userRef = firestore.doc(`AppUsers/${user.uid}`);
  const snapshot = await userRef.get();
  let newImages = [];

  for(let i=0;i<Images.length;i++){
    let response = await fetch(Images[i]);
    let blob = await response.blob();
    let ref = Firebase.storage().ref().child(`AppUsers/${Date.now()}`);
    await (ref.put(blob));
    let link = await ref.getDownloadURL();
    newImages.push(link);
  }

  if(!snapshot.exists){
    const {email} = user;
    const createdAt = new Date();

    try{
      await userRef.set({
        id:user.uid,
        email,
        createdAt,
        photoUrl : newImages[0],
        ...additionalData
      })
    }catch(err){
      console.log('Error while creating User ',error.message);
    }
  }

  return userRef;

}

//appointment handle approve

export default Firebase; 