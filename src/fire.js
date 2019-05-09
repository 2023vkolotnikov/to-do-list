import firebase from 'firebase'
  var config = {
    apiKey: "AIzaSyAjjMMk6MK8cnOgjRrOtC3Cdq3UvJ6LOdI",
    authDomain: "to-do-list-93fa2.firebaseapp.com",
    databaseURL: "https://to-do-list-93fa2.firebaseio.com",
    projectId: "to-do-list-93fa2",
    storageBucket: "to-do-list-93fa2.appspot.com",
    messagingSenderId: "581563137657"
  };
  let fire = firebase.initializeApp(config)

  export default fire
