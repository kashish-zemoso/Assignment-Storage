let localScore = 0;
let btn1 = document.getElementById("btn1");
let dp1 = document.getElementById('display1')

if(localStorage.getItem('localScore')){
    localScore = localStorage.getItem('localScore');
}
else{
    localScore = 0;
}

dp1.innerHTML = localScore;

btn1.addEventListener('click', (e) => {
    localScore++
    localStorage.setItem('localScore',localScore);
    dp1.innerHTML = localScore;
});




let sessionScore = 0;
let btn2 = document.getElementById("btn2");
let dp2 = document.getElementById("display2");

if(sessionStorage.getItem("sessionScore") == null){
    sessionStorage.setItem('sessionScore',"0");
}

btn2.addEventListener('click', (e) => {
    sessionScore++
    sessionStorage['sessionScore'] = sessionScore;
    dp2.innerHTML = sessionScore;
});