import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import { getStorage , ref , uploadBytesResumable } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-storage.js";

console.log("hi");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClL7pE-1kTSr2ouTpFHnwdvhW36rLgX2s",
  authDomain: "jnvcob.firebaseapp.com",
  databaseURL: "https://jnvcob.firebaseio.com",
  projectId: "jnvcob",
  storageBucket: "jnvcob.appspot.com",
  messagingSenderId: "69566502508",
  appId: "1:69566502508:web:be3e4ad98d78924cb7aa49",
  measurementId: "G-BH23ZFD2KB"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const buton = document.getElementById("butt");
var progr = document.getElementById("pro");




buton.addEventListener("click", () => {
  progr.style.display="block";
 var file = document.getElementById("form").files[0];
 console.log(file);
 var dates = document.getElementById("date").value;
 var about = document.getElementById("description").value;
 var extension = file.name.split(".").pop();
 // 'file' comes from the Blob or File API
var fileName = generateUniqueFileName()+"."+extension;
 const storageRef = ref(storage, "images/"+fileName);
const metadata = {
  customMetadata: {
    'Date': dates,
    'Description': about
  }
};
var uploadTask=uploadBytesResumable(storageRef, file, metadata);
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    
    progr.style.width=progress+"%";
    /*switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }*/
  }, 
  (error) => {
    // Handle unsuccessful uploads
    Swal.fire({
      icon: 'error',
      title: "Couldn't upload the photo. please try again later" ,
      showConfirmButton: true,
    })
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    Swal.fire({
      icon: 'success',
      title: 'Photo uploaded successfully',
      showConfirmButton: true
    })
    progr.style.display="none";
   
  }
);


});







function generateUniqueFileName() {
  const timestamp = Date.now().toString(); // Get current timestamp as a string
  const randomString = Math.random().toString(36).substring(2, 8); // Generate a random string

  const uniqueFileName = timestamp + 'S' + randomString; // Combine timestamp and random string

  return uniqueFileName;
}

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
