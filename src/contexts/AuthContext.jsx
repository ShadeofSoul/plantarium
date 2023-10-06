authContext.Provider// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";

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

export const authContext = createContext();
export const useAuth = () => {
  return useContext(authContext);
};

const AuthContextProvider = ({ children }) => {



    
    const values={

    }
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};
