import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getFriendsByUid = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/friends.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const friendResults = results.data;
      const friends = [];
      Object.keys(friendResults).forEach((friendId) => {
        friendResults[friendId].id = friendId;
        friendResults[friendId].rsvpId = '';
        friendResults[friendId].statusId = 'status1';
        friends.push(friendResults[friendId]);
      });
      resolve(friends);
    })
    .catch(err => reject(err));
});

const addNewFriend = friendObject => axios.post(`${firebaseUrl}/friends.json`, friendObject);

const deleteFriend = friendId => axios.delete(`${firebaseUrl}/friends/${friendId}.json`);

export default { addNewFriend, getFriendsByUid, deleteFriend };
