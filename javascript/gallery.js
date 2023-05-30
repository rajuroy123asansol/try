import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getStorage, ref , listAll , getDownloadURL, getMetadata} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-storage.js";

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
const storage = getStorage(app);
const container = document.getElementById("imgcon")
const listRef = ref(storage, 'images');

// Find all the prefixes and items.
listAll(listRef)
  .then((res) => {
    console.log(res.items);
    res.prefixes.forEach((folderRef) => {
      // All the prefixes under listRef.
      // You may call listAll() recursively on them.
    });
    res.items.forEach((itemRef) => {
      getDownloadURL(itemRef).then((link)=>{
    
        var parent = document.createElement("div");
        parent.setAttribute("class","card p-0 m-3");
        var text ='';
        var Date_of_event = "";
        getMetadata(itemRef).then((data) => {
          Date_of_event= data.customMetadata.Date;
          text= data.customMetadata.Description;
          console.log(data.customMetadata.Description);
          console.log(text);
        parent.innerHTML=`<img src="${link}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text"><small class="text-muted">${Date_of_event}</small></p>            <p class="card-text">${text}</p>`;
        container.appendChild(parent);
        
        })
        
        
      }) 
      
    });
  }).catch((error) => {
    // Uh-oh, an error occurred!
    console.log("oops");
  });









/*const lightbox = document.createElement("div");
lightbox.id="lightbox";
document.body.appendChild(lightbox);
const images = document.querySelectorAll("img");
images.forEach((image)=>{
 image.addEventListener("click",(e)=>{
   lightbox.style.display="flex";
   while (lightbox.firstChild) {
     lightbox.removeChild(lightbox.firstChild);
   }
   const img = document.createElement("img");
   const close = document.createElement("i");
   close.classList.add("bi");
   close.classList.add("bi-x");
   close.id="close"
   img.src =image.src;
   lightbox.appendChild(img);
   lightbox.appendChild(close);
   close.addEventListener("click",()=>{lightbox.style.display="none"})

 }) 
})*/