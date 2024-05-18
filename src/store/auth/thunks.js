import { loginwithEmailPassword, logoutFirebase, registerUserwithEmailPassword, signInWithGoogle } from "../../firebase/provider";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();
    // console.log({ result });

    if (!result.ok) return dispatch(logout(result));

    dispatch(login(result));
  }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const resp = await registerUserwithEmailPassword({ email, password, displayName });

    if (!resp.ok) return dispatch(logout(resp.errorMessage));
    dispatch(login(resp));
  }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await loginwithEmailPassword({ email, password });

    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  }
}

export const startLogout = () => {
  return async(dispatch) => {
    await logoutFirebase();
    dispatch(logout())
  }
}