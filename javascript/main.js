console.log("hello world");

var raju_sir = "2082332862";
var me = "1548471825";

AOS.init();
var elms = document.getElementsByClassName('splide');

for (var i = 0; i < elms.length; i++) {
    new Splide(elms[i]).mount();
}
document.getElementById("feedback").addEventListener("click",()=>{
  
var text=document.getElementById("example").value;
var email = document.getElementById("email").value;

if(text){
  fetch( `https://api.telegram.org/bot6126270354:AAEWnz1lo1D9OkZook_7I-gr090eVe6F07k/sendMessage?chat_id=${raju_sir}&text=${email}:${text}`).then(()=>{
    fetch(`https://api.telegram.org/bot6126270354:AAEWnz1lo1D9OkZook_7I-gr090eVe6F07k/sendMessage?chat_id=${me}&text=${email}:${text}`);
    Swal.fire({
      icon: 'success',
      title: 'Thank you for your feedback',
      showConfirmButton: false,
      timer: 3000
    })
  });
}
  
});


