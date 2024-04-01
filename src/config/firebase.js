import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDP0vcYOn8sZeI3llog65bW_SRM4Za37yo",
  authDomain: "moveis-login.firebaseapp.com",
  projectId: "moveis-login",
  storageBucket: "moveis-login.appspot.com",
  messagingSenderId: "410582282194",
  appId: "1:410582282194:web:d7e42b4978ddcbd60d220b",
  measurementId: "G-9L8XGV6SVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };

