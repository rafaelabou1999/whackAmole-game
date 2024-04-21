let startBox = document.querySelector('.start');
let bright = document.querySelector(".bright");


let holes = document.querySelectorAll('.hole');
let imgs = document.querySelectorAll('.character');
let tries = document.querySelector('.tries');
let random;

let hearts = document.querySelectorAll('.hearts img');
let heartScore = document.querySelector(".heartScore");
let heartPoint = 5;

let imgToScore;

let earn100 = document.querySelectorAll(".earn100");
let earn200 = document.querySelectorAll(".earn200");
let earn = document.querySelectorAll(".earn");
let scoreHtml = document.querySelector(".end span");
let score = 0;

let endBox = document.querySelector(".end");
let btnEnd = document.querySelector(".end button");


//Converting to array
let holesArray = Array.from(holes);
let imgsArray = Array.from(imgs);





//=================== FUNCTIONS ===========================
function initGame(){
    bright.style.display = 'none';
    startBox.style.display = 'none';
}

function clickMole(){
    random = Math.floor(Math.random() * holesArray.length);
    imgsArray.forEach((img) => {
        if(imgsArray.indexOf(img) === random){       
            img.style.display = 'block';
            imgToScore = img;
            let triesNumber = parseFloat(tries.innerHTML);
            tries.innerHTML = triesNumber + 1; // 
            tries.style.fontSize = '1.2rem';
            
            function hideImage() {
                img.style.display = "none"; 
              }   
            setTimeout(hideImage, 1100);
        } else{
            img.style.display = 'none';
        }    
    })      
}

function removeLife(){
    heartArray.forEach((heart) => {
      console.log("heart aq")
    console.log(--heartPoint);
    })
}


//=================== EVENTS ===========================
startBox.addEventListener("click", () => initGame())

holesArray.forEach((hole) => {
    hole.addEventListener("click", (e) =>{
        clickMole();
        if(hole){
           if(holesArray.indexOf(hole) === random){
            
                earn.forEach((each) => {
                    let earnArray = Array.from(earn)
                    earnArray[random].style.display = 'block';
                })
                if(hole.classList.contains("e100")){
                    score += 100;
                } else if(hole.classList.contains("e200")){
                    score += 200;
                }
        
                scoreHtml.innerHTML = score;
           } else{
           
            if (heartPoint > 0) {
                heartPoint -= 1;
                heartScore.innerText = heartPoint;
                hearts[heartPoint].src = "images/emptyheart.png";
                
            }

            if(heartPoint === 0){
                bright.style.display = 'block';
                endBox.style.display = 'block';
                tries.innerHTML = 0;
                score = 0;
            }
           }
        } 
       
    } )
})

btnEnd.addEventListener("click", () => {
    heartPoint = 5;
    heartScore.innerText = heartPoint;
   
    bright.style.display = 'none';
    endBox.style.display = 'none';
  
    hearts.forEach((heart) => {
        heart.src = "images/heartFull.png";
    })
})

