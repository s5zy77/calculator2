import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut 
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  addDoc, 
  collection, 
  onSnapshot, 
  query, 
  orderBy, 
  limit, 
  serverTimestamp 
} from 'firebase/firestore';
import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from 'firebase/storage';

// SECURE FETCH LOGIC (Same as Vanilla version)
export const initFirebase = async () => {
  let firebaseConfig = null;
  try {
    const response = await fetch('http://localhost:5000/api/config');
    if (response.ok) {
      const data = await response.json();
      firebaseConfig = data.firebaseConfig;
    } else {
      throw new Error('Localhost backend unreachable');
    }
  } catch (err) {
    console.warn('⚠️ Fetching dynamic config failed. Falling back to public production config.', err);
    // Fallback config for GitHub Pages
    firebaseConfig = {
      apiKey: "AIzaSyAMqoT3WCr1z-7hjfQh_CwSO2xtwLyFwrI",
      authDomain: "sentinel-dbd53.firebaseapp.com",
      projectId: "sentinel-dbd53",
      storageBucket: "sentinel-dbd53.firebasestorage.app",
      messagingSenderId: "616231741193",
      appId: "1:616231741193:web:b87b6c06a3920805bc55d8",
      measurementId: "G-7X6SKTN2ER"
    };
  }

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  return { 
    auth, db, storage, 
    serverTimestamp,
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    signOut, 
    onAuthStateChanged,
    doc, getDoc, setDoc, updateDoc, addDoc, collection,
    onSnapshot, query, orderBy, limit, 
    ref, uploadBytes, getDownloadURL 
  };
};
