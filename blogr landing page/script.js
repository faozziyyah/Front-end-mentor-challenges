
const slide = document.getElementById("slidingheader");
const hamburger = document.getElementById("hamburgericon");

//mobile navbar toggle
const togglebtn1 = document.getElementById("toggle1");
const content1 = document.getElementById("togglecontent1");
const togglebtn2 = document.getElementById("toggle2");
const content2 = document.getElementById("togglecontent2");
const togglebtn3 = document.getElementById("toggle3");
const content3 = document.getElementById("togglecontent3");
const form = document.getElementById("form");

//desktop navbar toggle
const firstLink = document.getElementById("list1");
const firstIcon = document.getElementById("icon1");
const firstContent = document.getElementById("iconcontent1");

const secondLink = document.getElementById("list2");
const secondIcon = document.getElementById("icon2");
const secondContent = document.getElementById("iconcontent2");

const thirdLink = document.getElementById("list3");
const thirdIcon = document.getElementById("icon3");
const thirdContent = document.getElementById("iconcontent3");


  slide.style.display = "none";
  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "none";
  
  iconcontent1.style.display = "none";
  iconcontent2.style.display = "none";
  iconcontent3.style.display = "none";
  
hamburger.addEventListener("click", toggleslide);
togglebtn1.addEventListener("click", togglecontentfirst);
togglebtn2.addEventListener("click", togglecontentsecond);
togglebtn3.addEventListener("click", togglecontentthird);

firstLink.addEventListener("mouseover", openfirstcontent);
firstLink.addEventListener("mouseout", closefirstcontent);

secondLink.addEventListener("mouseover", opensecondcontent);
secondLink.addEventListener("mouseout", closesecondcontent);

thirdLink.addEventListener("mouseover", openthirdcontent);
thirdLink.addEventListener("mouseout", closethirdcontent);

//show or hide the mobile navigation bar
function toggleslide(){

  if (slide.style.display === "none") {
    slide.style.display = "block";
    slide.style.transitionDuration = "4s";
    slide.style.transitionDelay = "2s";
  } else {
    slide.style.display = "none";
  }

  hamburger.classList.toggle("closeicon");
 
}

//show or hide the nav links content
function togglecontentfirst(){
  
  if (content1.style.display === "none") {
    content1.style.display = "block";
    slide.style.height = "110vh";
    togglebtn1.style.transform = "rotate(180deg)";
  } else {
    content1.style.display = "none";
    slide.style.height = "55vh";
    togglebtn1.style.transform = "rotate(0deg)";
  }
  
}

function togglecontentsecond(){
  
  if (content2.style.display === "none") {
    content2.style.display = "block";
    slide.style.height = "100vh";
    togglebtn2.style.transform = "rotate(180deg)";
  } else {
    content2.style.display = "none";
    slide.style.height = "55vh";
    togglebtn2.style.transform = "rotate(0deg)";
  }
  
}

function togglecontentthird(){
  
  if (content3.style.display === "none") {
    content3.style.display = "block";
    form.style.marginTop = "2em";
    slide.style.height = "100vh";
    togglebtn3.style.transform = "rotate(180deg)";
  } else {
    content3.style.display = "none";
    form.style.marginTop = "1em";
    slide.style.height = "55vh";
    togglebtn3.style.transform = "rotate(0deg)";
  }
  
}

//show or hide the desktop navigation contents
function openfirstcontent(){
  firstLink.style.textDecoration = "underline";
  iconcontent1.style.display = "block";
  icon1.style.transform = "rotate(180deg)";
  
}

function closefirstcontent(){
  firstLink.style.textDecoration = "none";
  iconcontent1.style.display = "none";
  icon1.style.transform = "rotate(0deg)";
  
}

function opensecondcontent(){
  secondLink.style.textDecoration = "underline";
  iconcontent2.style.display = "block";
  icon2.style.transform = "rotate(180deg)";
  
}

function closesecondcontent(){
  secondLink.style.textDecoration = "none";
  iconcontent2.style.display = "none";
  icon2.style.transform = "rotate(0deg)";
  
}

function openthirdcontent(){
  thirdLink.style.textDecoration = "underline";
  iconcontent3.style.display = "block";
  icon3.style.transform = "rotate(180deg)";
  
}

function closethirdcontent(){
  thirdLink.style.textDecoration = "none";
  iconcontent3.style.display = "none";
  icon3.style.transform = "rotate(0deg)";
  
}

// Wrap every letter in a span
var textWrapper = document.querySelector('.first');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.first .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.first',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  
  // Wrap every letter in a span
var textWrapper = document.querySelector('.second');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.second .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.second .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 2000,
    delay: (el, i) => 100 + 30 * i
  });

//1200
//1100