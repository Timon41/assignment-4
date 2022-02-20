function myFucntion() {
      new Audio('https://www.fesliyanstudios.com/play-mp3/387').play();
    }

    var btn = document.querySelector(".head-btn");
  var nav = document.querySelector(".navigation");

  btn.addEventListener("click", () =>{
  btn.classList.toggle("active");
  nav.classList.toggle("active");
});