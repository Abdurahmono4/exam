import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/fireBaseConfig";
import { useState } from "react";

import { useContext } from "react";
import { GlobalContext } from "../context/useGlobalContext";
import { update } from "firebase/database";

function useSignup() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const { dispatch } = useContext(GlobalContext);

  const signupWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user); 
        dispatch({ type: "  SIGN_IN", payload: user });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const signupWithPasswordAndEmail = (name,email,photo,password) => {
    console.log(email,password);
    createUserWithEmailAndPassword(auth, email, password)
    .then(async(userCredential) => {
      await updateProfile(auth, userCredential,{
        displayName: name,
        photoURL: photo,
      })
        const user = userCredential.user;
        setUser(user);  
        dispatch({ type: "  SIGN_IN", payload: user }).catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
      }
    );
  };

  return { signupWithGoogle, user, error, signupWithPasswordAndEmail };
}

export { useSignup };
