// nav menu
const hamburger = document.querySelector(".header__hamburger");
const navMenu = document.querySelector(".header__nav-menu");
hamburger.addEventListener("click",function (){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })
  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", function (){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))


  
  // slider
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

  // more
  function showHideMore(event) {
    event.preventDefault();
  
    let odstavec = event.target.parentElement;
    let dots = odstavec.querySelector(".dots");
    let moreText = odstavec.querySelector(".more");
    let btnText = odstavec.querySelector(".myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Více";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Méně";
      moreText.style.display = "inline";
    }
  }

  import axios from "axios";

  // 1. Import the library
  import Botpoison from "@botpoison/browser";
  
  // 2. Create a new instance with your public key
  const botpoison = new Botpoison({
      publicKey: 'pk_1b04cd60-c7ab-4d30-a096-d38fef54f11a'
  });
  
  const sendMessage = async (message) => {
    // 3. Process a challenge
    const { solution } = await botpoison.challenge();
    await axios.post("https://masazemanon.cz/", {
      message,
      // 4. Forward the solution
      _botpoison: solution,
    });
  }
  var formElement = document.getElementById("form");
  var buttonElement = document.getElementById("button");
  formElement.addEventListener("botpoison-challenge-start", function () {
    buttonElement.setAttribute("disabled", "disabled");
  });
  formElement.addEventListener("botpoison-challenge-success", function () {
    buttonElement.removeAttribute("disabled");
  });
  formElement.addEventListener("botpoison-challenge-error", function () {
    buttonElement.removeAttribute("disabled");
  });