import * as firebaseClient from 'firebase';


export function fetchDatas() {
	return firebaseClient.database().ref('/overview')
		.once('value')
		.then(snapshot => snapshot.val());
}
