let canvasDropdownBtn = document.querySelectorAll(".canvas-dropdown-btn");
let arrowDownIcons = document.querySelectorAll(".canvas-dropdown-btn .fa-chevron-down");
let arrowUpIcons = document.querySelectorAll(".canvas-dropdown-btn .fa-chevron-up");
let canvasDropdownMenu = document.querySelectorAll(".canvas-dropdown-menu");

canvasDropdownBtn[0].addEventListener("click", function () {
    if (arrowDownIcons[0].classList.contains("d-none") == false) {
    arrowDownIcons[0].classList.add("d-none");
    arrowUpIcons[0].classList.remove("d-none");
    canvasDropdownMenu[0].classList.remove("d-none");
    
  } else {
    arrowDownIcons[0].classList.remove("d-none");
    arrowUpIcons[0].classList.add("d-none");
    canvasDropdownMenu[0].classList.add("d-none");

  }

  if(arrowDownIcons[1].classList.contains("d-none") == true){
    arrowUpIcons[1].classList.add("d-none");
    arrowDownIcons[1].classList.remove("d-none");
    canvasDropdownMenu[1].classList.add("d-none");
  }
  if(arrowDownIcons[2].classList.contains("d-none") == true){
    arrowUpIcons[2].classList.add("d-none");
    arrowDownIcons[2].classList.remove("d-none");
    canvasDropdownMenu[2].classList.add("d-none");
  }if(arrowDownIcons[3].classList.contains("d-none") == true){
    arrowUpIcons[3].classList.add("d-none");
    arrowDownIcons[3].classList.remove("d-none");
    canvasDropdownMenu[3].classList.add("d-none");
  }
});

canvasDropdownBtn[1].addEventListener("click", function () {
    if (arrowDownIcons[1].classList.contains("d-none") == false) {
    arrowDownIcons[1].classList.add("d-none");
    arrowUpIcons[1].classList.remove("d-none");
    canvasDropdownMenu[1].classList.remove("d-none");
    
  } else {
    arrowDownIcons[1].classList.remove("d-none");
    arrowUpIcons[1].classList.add("d-none");
    canvasDropdownMenu[1].classList.add("d-none");

  }

  if(arrowDownIcons[0].classList.contains("d-none") == true){
    arrowUpIcons[0].classList.add("d-none");
    arrowDownIcons[0].classList.remove("d-none");
    canvasDropdownMenu[0].classList.add("d-none");
  }
  if(arrowDownIcons[2].classList.contains("d-none") == true){
    arrowUpIcons[2].classList.add("d-none");
    arrowDownIcons[2].classList.remove("d-none");
    canvasDropdownMenu[2].classList.add("d-none");
  }if(arrowDownIcons[3].classList.contains("d-none") == true){
    arrowUpIcons[3].classList.add("d-none");
    arrowDownIcons[3].classList.remove("d-none");
    canvasDropdownMenu[3].classList.add("d-none");
  }
});

canvasDropdownBtn[2].addEventListener("click", function () {
    if (arrowDownIcons[2].classList.contains("d-none") == false) {
    arrowDownIcons[2].classList.add("d-none");
    arrowUpIcons[2].classList.remove("d-none");
    canvasDropdownMenu[2].classList.remove("d-none");
    
  } else {
    arrowDownIcons[2].classList.remove("d-none");
    arrowUpIcons[2].classList.add("d-none");
    canvasDropdownMenu[2].classList.add("d-none");

  }

  if(arrowDownIcons[0].classList.contains("d-none") == true){
    arrowUpIcons[0].classList.add("d-none");
    arrowDownIcons[0].classList.remove("d-none");
    canvasDropdownMenu[0].classList.add("d-none");
  }
  if(arrowDownIcons[1].classList.contains("d-none") == true){
    arrowUpIcons[1].classList.add("d-none");
    arrowDownIcons[1].classList.remove("d-none");
    canvasDropdownMenu[1].classList.add("d-none");
  }if(arrowDownIcons[3].classList.contains("d-none") == true){
    arrowUpIcons[3].classList.add("d-none");
    arrowDownIcons[3].classList.remove("d-none");
    canvasDropdownMenu[3].classList.add("d-none");
  }
});

canvasDropdownBtn[3].addEventListener("click", function () {
    if (arrowDownIcons[3].classList.contains("d-none") == false) {
    arrowDownIcons[3].classList.add("d-none");
    arrowUpIcons[3].classList.remove("d-none");
    canvasDropdownMenu[3].classList.remove("d-none");
    
  } else {
    arrowDownIcons[3].classList.remove("d-none");
    arrowUpIcons[3].classList.add("d-none");
    canvasDropdownMenu[3].classList.add("d-none");

  }

  if(arrowDownIcons[0].classList.contains("d-none") == true){
    arrowUpIcons[0].classList.add("d-none");
    arrowDownIcons[0].classList.remove("d-none");
    canvasDropdownMenu[0].classList.add("d-none");
  }
  if(arrowDownIcons[1].classList.contains("d-none") == true){
    arrowUpIcons[1].classList.add("d-none");
    arrowDownIcons[1].classList.remove("d-none");
    canvasDropdownMenu[1].classList.add("d-none");
  }if(arrowDownIcons[2].classList.contains("d-none") == true){
    arrowUpIcons[2].classList.add("d-none");
    arrowDownIcons[2].classList.remove("d-none");
    canvasDropdownMenu[2].classList.add("d-none");
  }
});

let navDropBtn = document.querySelectorAll(".nav-drop-btn");
let navDropMenu = document.querySelectorAll(".nav-drop-menu");
for(let i = 0; i < navDropBtn.length;i++){
  (function(index){
    navDropBtn[i].addEventListener("mouseover",function(){
      navDropMenu[index].classList.remove("d-none");
    })
    navDropBtn[i].addEventListener("mouseout",function(){
      navDropMenu[index].classList.add("d-none");
    })
  })(i);
}

let body = document.querySelector("body");
let pageUpScrollBtn = document.getElementById("page-up-scroll-btn");

body.onscroll = function(){
    
    if(scrollY > 500){
        pageUpScrollBtn.classList.remove("d-none");
    }else{
        pageUpScrollBtn.classList.add("d-none");
    }
}

pageUpScrollBtn.onclick = function(){
    window.scrollTo(0,0);
}

let spanValuesFast = document.querySelectorAll(".counter-fast");
let spanValuesLow = document.querySelectorAll(".counter-low");

setTimeout(function(){
  spanValuesFast.forEach((spanValue) => {
    let startValue = 0;
    let endValue = parseInt(spanValue.getAttribute("data-val"));
    let counter = setInterval(function(){
      startValue += 25;
      spanValue.innerHTML = startValue;
      if(startValue == endValue){
        clearInterval(counter);
        spanValuesFast[0].innerHTML = 9968;
        spanValuesFast[1].innerHTML = 2219;
      }
    },1)
  })
  
  spanValuesLow.forEach((spanValue) => {
    let startValue = 0;
    let endValue = parseInt(spanValue.getAttribute("data-val"));
    let counter = setInterval(function(){
      startValue += 1;
      spanValue.innerHTML = startValue;
      if(startValue == endValue){
        clearInterval(counter)
      }
    },1)
  })
},2000)

