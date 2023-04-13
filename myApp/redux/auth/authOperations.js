import { auth } from '../../firebase/config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { authSlice } from './authReducer';

const { updateUserProfile, authStateChange, authSignOut } = authSlice.actions;
 
export const authSignUpUser = ({ email, password, login }) => async (
  dispatch,
  getState
) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const user =  auth.currentUser;
    await user.updateProfile({
      displayName: login,
    });

    const { displayName, uid } = await auth.currentUser;

    const userUpdateProfile = {
      login: displayName,
      userId: uid,
    };
    
    dispatch(updateUserProfile(userUpdateProfile));
  } catch (error) {
    console.log("error", error);
    console.log("error.message", error.message);
  }
};

 export const authSignInUser = ({ email, password }) => async (
  dispatch,
  getState
) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log("user", user);
    } catch (error) {
    console.log("error", error);
    console.log("error.code", error.code);
    console.log("error.message", error.message);
  }
};

export const authSignOutUser = () => async (dispatch, getState) => {
   await auth.signOut();
   dispatch(authSignOut());
};

export const authStateCahngeUser = () => async (dispatch, getState) => {
  await auth.onAuthStateChanged((user) => {
    if (user) {
      const userUpdateProfile = {
        nickName: user.displayName,
        userId: user.uid,     
    };

    dispatch(authStateChange({ stateChange: true }));
    dispatch(updateUserProfile(userUpdateProfile)); 
  }  
});
};
    























//   export const authSignInUser = () => async (dispatch, getSatte) => {};

//   export const authSignOutUser = () => async (dispatch, getSatte) => {};

//   import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";












// const authSignUpUser = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });