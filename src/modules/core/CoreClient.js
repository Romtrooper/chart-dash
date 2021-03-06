import * as firebaseClient from 'firebase';
import firebaseConfig from '../../../config/firebase'


// Initialize Firebase
firebaseClient.initializeApp(firebaseConfig);


function login(username, password) {
	return firebaseClient.auth()
		.setPersistence(firebaseClient.auth.Auth.Persistence.LOCAL)
		.then(() => firebaseClient.auth().signInWithEmailAndPassword(username, password)
			.then(response => response.user)
			// .catch(error => error);
		);
}

function logout() {
	return firebaseClient.auth().signOut()
		.then(response => response);
	// .catch(error => error);
}

function checkCredentials() {
	return new Promise((resolve, reject) => {
		firebaseClient.auth().onAuthStateChanged(user => {
			if (user) {
				resolve('firebase');
			} else {
				reject(Error('not connected'));
			}
		});
	});
}


export {
	login,
	logout,
	checkCredentials,
}