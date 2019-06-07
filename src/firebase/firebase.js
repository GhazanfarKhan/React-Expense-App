import * as firebase from 'firebase';
//import moment from 'moment';
var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIRBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APPID
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase, googleAuthProvider, database as default };
// const expenses = [{
//     id: '1',
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0
// }, {
//     id: '2',
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: moment(0).subtract(4, 'days').valueOf()
// }, {
//     id: '3',
//     description: 'Credit Card',
//     note: '',
//     amount: 4500,
//     createdAt: moment(0).add(4, 'days').valueOf()
// }];
// for (let index = 0; index < expenses.length; index++) {
//     database.ref('expenses').push(expenses[index]);
// }

// database.ref('expenses')
//     .once('value')
//     .then((snapsot) => {
//         let expenses = [];
//         snapsot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses);

//     }).catch((error) => { });

// database.ref('notes').push({
//     id: 1,
//     title: 'A',
//     body: 'AAAA'
// });
// database.ref().on('value', (snapsot) => {
//     console.log(snapsot.val());
// });



// database.ref().set({
//     name: 'Ghazanfar',
//     age: 12,
//     location: {
//         country: 'Pakistan',
//         city: 'Karachi'
//     }
// }).then(() => {
//     console.log('saved');
// }).catch((error) => { console.log('error'); });

// database.ref().update({
//     name: 'ABC'
// })

// database.ref().remove()
//     .then(() => {
//         console.log("Remove succeeded.")
//     })
//     .catch((error) => {
//         console.log("Remove failed: " + error.message)
//     });