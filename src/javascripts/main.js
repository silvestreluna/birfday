import firebase from 'firebase/app';
import auth from './components/auth/auth';
import birfday from './components/birfday/birfday';
import apiKeys from './helpers/apiKeys.json';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.authPrint();
  birfday.birfdayPrint();
};

init();
