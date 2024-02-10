import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyB3EGrhPlcQ87WjT8AxtvIcQFtYWQpZHOk',

  authDomain: 'music-4b742.firebaseapp.com',

  projectId: 'music-4b742',

  storageBucket: 'music-4b742.appspot.com',

  appId: '1:143050804523:web:93d7ec9565231ffef9c96e'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

const db = firebase.firestore()

const storage = firebase.storage()

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`)
})

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, usersCollection, storage, songsCollection, commentsCollection }
