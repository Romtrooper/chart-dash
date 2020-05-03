import * as firebaseClient from 'firebase';

export function fetchDatas(category, dateBegin, dateEnd) {
	return firebaseClient.database().ref(`/${category}`)
		.once('value')
		.then(snapshot => snapshot.val());
}
export function fetchBestDatas(type, category, dateBegin, dateEnd) {
	return firebaseClient.database().ref('/top')
		.once('value')
		.then(snapshot => snapshot.val());
}
