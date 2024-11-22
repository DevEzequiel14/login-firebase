import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp } from 'firebase/app';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBpM0MbdL1bbe5AfKKOWstvZ4R6iz28ZzE",
  authDomain: "login-firebase-159a5.firebaseapp.com",
  projectId: "login-firebase-159a5",
  storageBucket: "login-firebase-159a5.firebasestorage.app",
  messagingSenderId: "246791805010",
  appId: "1:246791805010:web:00ec1062895163b2cb678b"
};

initializeApp(firebaseConfig)

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),
  importProvidersFrom(
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  )
  ]
};
