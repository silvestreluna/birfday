import firebase from 'firebase/app';
import auth from './components/auth/auth';
import birfday from './components/birfday/birfday';
import apiKeys from './helpers/apiKeys.json';
import myNavBar from './components/myNavBar/myNavBar';
import authData from './helpers/data/authData';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  myNavBar.navbarEvents();
  authData.checkLoginStatus();
  auth.authPrint();
  birfday.birfdayPrint();
};

init();
