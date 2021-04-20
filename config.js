import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBxJqX6CRjHBqRzms9ArgHvVsJvOSXguoU",
    authDomain: "barterapp-ed426.firebaseapp.com",
    projectId: "barterapp-ed426",
    storageBucket: "barterapp-ed426.appspot.com",
    messagingSenderId: "343219359660",
    appId: "1:343219359660:web:befadcfb922c0e608f7409"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore();