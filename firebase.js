// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_TKcjCX3vhJW7ErcUh9A8MdH4tpjhVgI",
    authDomain: "jjrmonteir0.firebaseapp.com",
    projectId: "jjrmonteir0",
    storageBucket: "jjrmonteir0.appspot.com",
    messagingSenderId: "420345259057",
    appId: "1:420345259057:web:1791546ba69f6eaf29a110",
    measurementId: "G-4DFDTNZLEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to get the switch state
export async function getData(data) {
    const switchRef = ref(database, data);
    try {
        const snapshot = await get(switchRef);
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log('No data available: ', data);
            return null;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}
