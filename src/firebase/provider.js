import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { firebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {

    const result = await signInWithPopup(firebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const {displayName, email, photoURL, uid} = result.user;

    return {
      ok: true, 
       // user info
       displayName, 
       email, 
       photoURL, 
       uid
    }
    
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorCode,
      errorMessage
    }
  }
}

export const registerUserwithEmailPassword = async ({ email, password, displayName }) => {
  try {
    const resp = await createUserWithEmailAndPassword(firebaseAuth,email, password);
    const { uid, photoURL } = resp.user;
    await updateProfile(firebaseAuth.currentUser, {
      displayName
    });

    return {
      ok: true,
      photoURL,
      email,
      displayName
    }
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message
    }
  }
}