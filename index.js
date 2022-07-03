

//hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

//home-nav-link color to orangered
const inputUrl = window.location.href;
const homeLink = document.getElementById("home-link");

function changeHomeColor() {
    if (inputUrl == "http://192.168.0.102:5500/index.html") {
        homeLink.style.color = "orangered";
    }
};
changeHomeColor();

//translate(DE-ENG) welcome msg on skillset paragraph
const welcomeMsg =document.getElementById("welcome-msg");
function translateMsg(x){
    welcomeMsg.innerHTML = "warm welcome! &nbsp &nbsp &nbsp&nbsp&nbsp";
    welcomeMsg.style.color = "#101010";
}
function unTranslateMsg(x){
    welcomeMsg.innerHTML = "herzlich willkommen!";
    welcomeMsg.style.color = "#69D6F4";
}

/*
const welcomeMsg = document.getElementById("welcome-msg");
const newWelcomemsg = "Warm Welcome"
welcomeMsg.addEventListener("click", function(){
    welcomeMsg.innerHTML = newWelcomemsg;
});
*/

//a the local pdf file in /root/docs folder. but I#ll leave the file there
const cvBtn = document.getElementById("btn2");
cvBtn.addEventListener("click", function(){
    window.open("docs/resume-file.pdf",  "_blank")
});

//go to URL- contact.index in root folder
function toContactPage(){
    location.href="contact.html"
};


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
