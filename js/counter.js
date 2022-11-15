// counter start commands
let startCommand_0 = false;
let startCommand_1 = false;
let startCommand_2 = false;
let startCommand_3 = false;
let startCommand_4 = false;
let reportSpan = document.querySelectorAll(".calc-counter");

window.addEventListener("scroll",function(){
    if(scrollY > (reportSpan[0].offsetTop - 500)){startCommand_0 = true};
    if(scrollY > (reportSpan[1].offsetTop - 500)){startCommand_1 = true};
    if(scrollY > (reportSpan[2].offsetTop - 500)){startCommand_2 = true};
    if(scrollY > (reportSpan[3].offsetTop - 500)){startCommand_3 = true};
    if(scrollY > (reportSpan[4].offsetTop - 500)){startCommand_4 = true};
});


function countFunction_0(){
    let startValue = 0;
    let endValue = parseInt(reportSpan[0].getAttribute("data-val"));
    let counter = setInterval(function(){
        if(startCommand_0 == true){
            startValue += 25;
        }
        reportSpan[0].innerHTML = startValue;
        if(startValue == 9950){
            clearInterval(counter);
            reportSpan[0].innerHTML = endValue;
        }
    },10)
};
function countFunction_1(){
    let startValue = 0;
    let endValue = parseInt(reportSpan[1].getAttribute("data-val"));
    let counter = setInterval(function(){
        if(startCommand_1 == true){
            startValue += 25;
        }
        reportSpan[1].innerHTML = startValue;
        if(startValue == 2200){
            clearInterval(counter);
            reportSpan[1].innerHTML = endValue;
        }
    },40)
};
function countFunction_2(){
    let startValue = 0;
    let endValue = parseInt(reportSpan[2].getAttribute("data-val"));
    let counter = setInterval(function(){
        if(startCommand_2 == true){
            startValue += 1;
        }
        reportSpan[2].innerHTML = startValue;
        if(startValue == endValue){
            clearInterval(counter);
            reportSpan[2].innerHTML = endValue;
        }
    },20)
};
function countFunction_3(){
    let startValue = 0;
    let endValue = parseInt(reportSpan[3].getAttribute("data-val"));
    let counter = setInterval(function(){
        if(startCommand_3 == true){
            startValue += 1;
        }
        reportSpan[3].innerHTML = startValue;
        if(startValue == endValue){
            clearInterval(counter);
            reportSpan[3].innerHTML = endValue;
        }
    },20)
};
countFunction_0();
countFunction_1();
countFunction_2();
countFunction_3();