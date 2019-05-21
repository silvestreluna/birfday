import firebase from 'firebase/app';
import 'firebase/auth';
import util from '../../helpers/util';
import googleImage from './login.png';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};


const authPrint = () => {
  let printItem = '<button id="google-auth" class="btn btn-primary">';
  printItem += `<img src=${googleImage} />`;
  printItem += '</button';
  util.printToDom('auth', printItem);
  document.getElementById('google-auth').addEventListener('click', signMeIn);
};

export default { authPrint };
