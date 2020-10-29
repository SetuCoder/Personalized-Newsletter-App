import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAi2ltCawG1aWtUW2N1QRQ8HokaS5bpy8s",
    authDomain: "setu-newsletter.firebaseapp.com",
    databaseURL: "https://setu-newsletter.firebaseio.com",
    projectId: "setu-newsletter",
    storageBucket: "setu-newsletter.appspot.com",
    messagingSenderId: "1042279119689",
    appId: "1:1042279119689:web:f6427984d744f198513898"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.database();