import { auth } from '../../firebase/config';
import { signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from 'firebase/auth';
import { authSlice } from './authReducer';

const { updateUserProfile, authStateChange, authSignOut } = authSlice.actions;

// export const authSignUpUser = ({ userEmail, password, nickName }) => async (
//   dispatch,
//   getState
// ) => {
//   try {
//     await createUserWithEmailAndPassword(auth, userEmail, password);
//     await updateProfile(auth.currentUser, {
//       displayName: nickName,
//     });

//      const { displayName, uid, email} =  auth.currentUser;
      
//     const userUpdateProfile = {
//       nickName: displayName, 
//       userId: uid,
//       userEmail: email,
//     };

//     dispatch(updateUserProfile(userUpdateProfile));
//     dispatch(authStateChange({ stateChange: true }));
//   } catch (error) {
//     console.log("error", error);
//     console.log("error.message", error.message);
//   }
// };

export const authSignUpUser =
  (body) => async (dispatch) => {
    const { avatar, userEmail, nickName, password } = body;

    try {
      await createUserWithEmailAndPassword(auth, userEmail, password);

      const user = auth.currentUser;

      if (user) {
        await updateProfile(user, {
          displayName: nickName,
          photoURL: avatar,
        });
      }

      const newUser = auth.currentUser;

      if (newUser !== null) {
        const {
          displayName: nickName,
          email: userEmail,
          photoURL: avatar,
          uid: userId,
        } = newUser;

        const userData = { nickName, userEmail, avatar, userId };

        dispatch(updateUserProfile(userData));
      }
    } catch (error) {
      console.log("error", error);
     console.log("error.message", error.message);
    }
  };
// export const authSignInUser = ({ email, password }) => async (
//   dispatch,
//   getState
// ) => {
//   try {
//     const user = await signInWithEmailAndPassword(auth, email, password);
//     console.log("user", user);
//   } catch (error) {
//     console.log("error", error);
//     console.log("error.code", error.code);
//     console.log("error.message", error.message);
//   }
// };


export const authSignInUser =
  (body) => async (dispatch) => {
    const { userEmail, password } = body;

    try {
      await signInWithEmailAndPassword(auth, userEmail, password);

      const user = auth.currentUser;

      if (user !== null) {
        const {
          displayName: nickName,
          email: userEmail,
          photoURL: avatar,
          uid: userId,
        } = user;

        const userData = { nickName, userEmail, avatar, userId };

        dispatch(updateUserProfile(userData));
      }
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
  };


// export const authStateCahngeUser = () => async (dispatch, getState) => {
//   await auth.onAuthStateChanged((user) => {
//     if (user) {
//       const userUpdateProfile = {
//         nickName: user.displayName,
//         userId: user.uid,
//       };
//       dispatch(authStateChange({ stateChange: true }));
//       dispatch(updateUserProfile(userUpdateProfile));
//     }
//   });
// };

export const authStateCahngeUser = () => async (dispatch) => {
  try {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        const {
          displayName: nickName,
          email: userEmail,
          photoURL: avatar,
          uid: userId,
        } = user;

        const userData = { nickName, userEmail, avatar, userId };

        dispatch(updateUserProfile(userData));
        dispatch(authStateChange({ stateChange: true }));
      }
    });
  } catch (error) {
    console.log("error", error);
    console.log("error.message", error.message);
  }
};

export const authSignOutUser = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(authSignOut());
  } catch (error) {
    console.log("error", error);
    console.log("error.message", error.message);
  }
};
































