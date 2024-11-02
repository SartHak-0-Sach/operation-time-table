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
export const createHospitalProfile = async (HospitalAuth,Images,additionalData) => {
  if(!HospitalAuth) return;
  const userRef = firestore.doc(`hospitals/${HospitalAuth.uid}`);
  const snapshot = await userRef.get();
  let newImages = [];

  for(let i=0;i<Images.length;i++){
    let response = await fetch(Images[i]);
    let blob = await response.blob();
    let ref = Firebase.storage().ref().child(`hospitals/${Date.now()}`);
    await (ref.put(blob));
    let link = await ref.getDownloadURL();
    newImages.push(link);
  }

  if(!snapshot.exists){
    const {email} = HospitalAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        id:HospitalAuth.uid,
        email,
        createdAt,
        Images : newImages,
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