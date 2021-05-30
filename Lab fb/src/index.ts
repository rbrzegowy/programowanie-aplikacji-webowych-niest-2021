import './main.scss';
import firebase from 'firebase';
import { firebaseConfig } from './config';

const hello = "yep, it's workin still sick";
document.body.innerHTML = hello;

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


//dodawn
const note = {
    tytul: 'Second note from code',
    tresc: 'AAACA'
};
// addNote(note);
async function addNote(note: any) {
    const res = await db.collection('notatki').add(note)
}
async function deleteNote(id: string) {
    const res = db.collection('notatki').doc(id).delete();
}
async function getNote(id: string): Promise<any> {
    return db.collection('notatki').doc(id).get().then(data => ({id: data.id, data: data.data()}));
}
async function updateNote(id: string, data: any): Promise<any> {
    return db.collection('notatki').doc(id).update(note);
}


// console.log('get')
// getNote('7OmRIuywnlkNX2cfX5mq').then(data=> console.log(data));

console.log('getCollection')
getNotes().then(data=> console.log(data));
async function getNotes(): Promise<any> {
    return db.collection('notatki').get().then(d => d.docs.map(doc => doc.data()));
}

