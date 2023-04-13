const lightbox = document.createElement("div");
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
})