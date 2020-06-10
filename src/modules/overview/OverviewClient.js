import * as firebaseClient from 'firebase';


function fetchDatas() {
	return firebaseClient.database().ref('/overview')
		.once('value')
		.then(snapshot => snapshot.val());
}

export default fetchDatas;