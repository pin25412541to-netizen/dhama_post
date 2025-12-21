import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyCqZ9ektyzgI7zlwbGEHWohplXSqsR_kdg",
  authDomain: "dhama-1095f.firebaseapp.com",
  projectId: "dhama-1095f",
  storageBucket: "dhama-1095f.firebasestorage.app",
  messagingSenderId: "377776492558",
  appId: "1:377776492558:web:17e6b714183bef98b36c5f",
  measurementId: "G-7ER6Z9WTJE"
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ]
};
