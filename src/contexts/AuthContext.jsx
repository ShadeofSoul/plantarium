import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

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
  const signUp = async (email, password, firstName, lastName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await user.updateProfile({
        displayName: `${firstName} ${lastName}`,
      });
      setUser(user);
      return user;
    } catch (error) {
      throw error;
    }
  };

  const values = {
    signUp,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
