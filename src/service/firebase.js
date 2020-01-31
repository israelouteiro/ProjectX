import firebase from 'firebase';

//camada de conexão com o firebase, baixa as credenciais do app e inicializa o firebase

const config = {
    apiKey: "AIzaSyAFJOg8df8_mV3e91gj-SHGEnaBEpPto3k",
    authDomain: "projectx-bb2cd.firebaseapp.com",
    databaseURL: "https://projectx-bb2cd.firebaseio.com",
    projectId: "projectx-bb2cd",
    storageBucket: "projectx-bb2cd.appspot.com",
    messagingSenderId: "605616243254",
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();