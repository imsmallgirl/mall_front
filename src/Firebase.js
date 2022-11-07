import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBkkvKRL063jbaLxY9zCCXeo-A-rU2l_aU",
  authDomain: "shoptest-323de.firebaseapp.com",
  projectId: "shoptest-323de",
  storageBucket: "shoptest-323de.appspot.com",
  messagingSenderId: "664027607988",
  appId: "1:664027607988:web:a2f038c9cdaba9b68e38e1",
  measurementId: "G-KXZK6GTWY0",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
