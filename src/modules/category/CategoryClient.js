import * as firebaseClient from 'firebase';

function fetchDatas(category, /*dateBegin, dateEnd*/) {
	return firebaseClient.database().ref(`/${category}`)
		.once('value')
		.then(snapshot => snapshot.val());
}

function fetchBestDatas(/*type, category, dateBegin, dateEnd*/) {
	return firebaseClient.database().ref('/top')
		.once('value')
		.then(snapshot => snapshot.val());
}

export { fetchDatas, fetchBestDatas }