var btn = document.querySelector(".head-btn");
  var nav = document.querySelector(".navigation");
  btn.addEventListener("click", () =>{
  btn.classList.toggle("active");
  nav.classList.toggle("active");
});


var NavSlider = function(manual){
  navig.forEach((btn) => {
    btn.classList.remove("active");
  });
} 

navig.forEach((btn, i) => {
   btn.addEventListener("click", () =>{
    NavSlider(i);
 });
});