import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../routes/paths";

const firebaseConfig = {
  apiKey: "AIzaSyAmAW2cAPq24EGu3cGmcQqyBMYlli87JgQ",
  authDomain: "plantarium-3ebb4.firebaseapp.com",
  projectId: "plantarium-3ebb4",
  storageBucket: "plantarium-3ebb4.appspot.com",
  messagingSenderId: "555646865737",
  appId: "1:555646865737:web:392a3cd0b1f02116848a98",
  measurementId: "G-GMQTPR00NX",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export const authContext = createContext();
export const useAuth = () => {
  return useContext(authContext);
};

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const signUp = async (email, password, firstName, lastName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });
      setUser(user);
      navigate(paths.home);
      return user;
    } catch (error) {
      throw error;
    }
  };

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setUser(user);
      navigate(paths.home);
      return user;
    } catch (error) {
      alert(error);
    }
  };

  const signOutUser = () => signOut(auth).then(() => setUser(null));

  const values = {
    signUp,
    signIn,
    signOutUser,
    user,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
