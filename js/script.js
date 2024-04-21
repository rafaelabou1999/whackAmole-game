let startBox = document.querySelector('.start');
let bright = document.querySelector(".bright");
let btnBox = document.querySelector(".start button");

function initGame(){
    
    bright.style.display = 'none';
    startBox.style.display = 'none';
}
btnBox.addEventListener("click", () => initGame())











let holes = document.querySelectorAll('.hole');
let imgs = document.querySelectorAll('.character');
let tries = document.querySelector('.tries');
let random;

let hearts = document.querySelectorAll('.hearts img');
let heartScore = document.querySelector(".heartScore");



let holesArray = Array.from(holes);
let imgsArray = Array.from(imgs);

let imgToScore;

let earn100 = document.querySelectorAll(".earn100");
let earn200 = document.querySelectorAll(".earn200");
let earn = document.querySelectorAll(".earn");


function clickMole(){
    random = Math.floor(Math.random() * holesArray.length);
    imgsArray.forEach((img) => {
        if(imgsArray.indexOf(img) === random){       
            img.style.display = 'block';
            imgToScore = img;
            let triesNumber = parseFloat(tries.innerHTML); // Extract the current value
            tries.innerHTML = triesNumber + 1; // 
            tries.style.fontSize = '1.2rem';
            
            function hideImage() {
                img.style.display = "none"; // Set the display property to "none"
              }   
            setTimeout(hideImage, 900);
        } else{
            img.style.display = 'none';
        }
        setScore(random);       
    })   

    
}

let score = 0;
function setScore(random, img){
    console.log('foi')
    holesArray.forEach((hole) => {
        imgsArray.forEach((img) => {
           if(imgsArray.indexOf(img) === holesArray.indexOf(hole) === random){
              
           }
        })
    })
    
}

let heartPoint = 5;
function removeLife(){
    heartArray.forEach((heart) => {
      console.log("heart aq")
    console.log(--heartPoint);
    })
}

let lostBox = document.querySelector(".lost");
let btnLost = document.querySelector(".lost button");

holesArray.forEach((hole) => {
    hole.addEventListener("click", (e) =>{
        clickMole();
        if(hole){
           if(holesArray.indexOf(hole) === random){
            
                earn.forEach((each) => {
                    let earnArray = Array.from(earn)
                    earnArray[random].style.display = 'block';
                })
                if(hole.classList.contains("earn100")){
                    score += 100;
                } else if(hole.classList.contains("earn200")){
                    score += 200;
                }
          console.log(score);
            
            console.log("GANHOUUUUUUUUUUUUU")
           
           } else{
           
            if (heartPoint > 0) {
                heartPoint -= 1;
                heartScore.innerText = heartPoint;
                hearts[heartPoint].src = "images/emptyheart.png";
                
            }

            if(heartPoint === 0){
                bright.style.display = 'block';
                lostBox.style.display = 'block';
                tries.innerHTML = 0;
            }
           }
        } 
       
    } )
})



console.log(score);
btnLost.addEventListener("click", () => {
    heartPoint = 5;
    heartScore.innerText = heartPoint;
   
    bright.style.display = 'none';
    lostBox.style.display = 'none';
  
    hearts.forEach((heart) => {
        heart.src = "images/heartFull.png";
    })
})
