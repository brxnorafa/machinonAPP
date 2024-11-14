// firebaseConfig.js

import { initializeApp, getApp, getApps } from 'firebase/app'; // Modificado para verificar se já existe
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCz0O-c4Hly6BlHSmV-93oD_G6f4jjzvuE",
    authDomain: "machinon-14b72.firebaseapp.com",
    projectId: "machinon-14b72",
    storageBucket: "machinon-14b72.appspot.com",
    messagingSenderId: "566449820785",
    appId: "1:566449820785:web:40774586192f6de46bf7d0"
};

// Inicializa o Firebase, se ainda não foi inicializado
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Inicializa o Firebase Auth com persistência usando AsyncStorage
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

// Inicializa o Firestore
const firestore = getFirestore(app);

// Exporta as instâncias do Auth e Firestore
export { auth, firestore };
