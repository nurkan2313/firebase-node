
require('dotenv').config();
const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://megacomfun.firebaseio.com"
});

let topic = "test"
let data = {
	"notification": {
		"title": "title nodejs",
		"text": "this is the notification message from nodejs"
	} 
}

admin.messaging().sendToTopic(topic, data)
.then(function(response) {
    console.log("Successfully sent message:", response);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
  });
