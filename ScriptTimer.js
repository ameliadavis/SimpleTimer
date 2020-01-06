console.log("hi");

var timerEl = document.getElementById("timer").textContent;
var currentTime = 5; /// global variable, to keep track of current time 

function downDown(){
    console.log(currentTime);
        var timTimeEl = setInterval(function(){   
            currentTime--; 
            document.getElementById("timer").textContent = currentTime;
            if(currentTime <= 0) { currentTime=1}
            console.log(currentTime);
        },1000);
        console.log(timTimeEl);   
}

function upUp(){
    console.log(currentTime);
        var timeTim = setInterval(function(){   
            currentTime++; 
            document.getElementById("timer").textContent = currentTime;
            // if(currentTime <= 0) { currentTime=1}
            console.log(currentTime);
        },1000);
        console.log(timeTim);
}

function setReset(){
        clearTimeout(upUp() );
        clearTimeout(downDown() );
        currentTime=5;
        document.getElementById("timer").textContent = timerEl;
}

document.getElementById("countDown").addEventListener("click", downDown);
document.getElementById("countUp").addEventListener("click", upUp);
document.getElementById("reset").addEventListener("click", setReset);


// ========== My Original Code =============

// function downDown(){
//     setInterval(function() {
//         timerEl--; 
//         document.getElementById("timer").textContent = timerEl;
//         if(timerEl <= 0) { timerEl=1}
//     },1000);
// }
// function upUp(){
//     setInterval(function(){
//         timerEl++;
//         document.getElementById("timer").textContent =timerEl;

//     },1000);
// }

// function upUp(){
//         timerEl++;
//         document.getElementById("timer").textContent =timerEl;
// }


// document.getElementById("countDown").addEventListener("click", downDown);
// document.getElementById("countUp").addEventListener("click", setInterval(upUp, 1000));
// document.getElementById("reset").addEventListener("click",clearInterval(setReset,1000));


