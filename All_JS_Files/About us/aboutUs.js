var btn = document.querySelector(".head-btn");
  var nav = document.querySelector(".navigation");

  btn.addEventListener("click", () =>{
  btn.classList.toggle("active");
  nav.classList.toggle("active");
});
