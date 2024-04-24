let startBox = document.querySelector('.start');
let bright= document.querySelector(".bright");


let holes = document.querySelectorAll('.hole');
let character = document.querySelectorAll('.character');
let tries = document.querySelector('.tries');
let random;

let hearts = document.querySelectorAll('.hearts img');
let lifeAmount= document.querySelector(".lifeAmount");
let totalOfLives= 5;

let imgToScore;

let toEarn = document.querySelectorAll(".earn");
let scoreHtml = document.querySelector(".end span");
let finalScore = 0;

let endBox = document.querySelector(".end");
let btnEnd = document.querySelector(".end button");

let holeArray = Array.from(holes)
let characterArray = Array.from(character)
function initGame(){
    bright.style.display = 'none';
    startBox.style.display = 'none';
}

function hideImage() {
    this.style.display = "none"; 
}   

function removeLife(){
    Array.prototype.map(hearts, heart => --totalOfLives);
}


function clickMole(){
	random = Math.floor(Math.random() * holeArray.length);
	characterArray.forEach((img) => {
		 if(characterArray.indexOf(img) === random){       
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


startBox.addEventListener("click", () => initGame())

holeArray.forEach((hole) => {
    hole.addEventListener("click", (e) =>{
        clickMole();
        if(hole){
            const earnArray = Array.from(toEarn);
            const correctHole = holeArray.indexOf(hole) === random ? earnArray[random].style.display = 'block' : earnArray[random].style.display = 'none';
            
				if (hole.classList.contains("e100")) {
					finalScore += 100;
					console.log(finalScore)
			  } else if (hole.classList.contains("e200")) {
					finalScore += 200;
					console.log(finalScore)
			  } else{
				finalScore += 0;
			  }
            
           scoreHtml.innerHTML = finalScore;         
          

            if (totalOfLives > 0) {
					 totalOfLives -= 1;
                lifeAmount.innerText = totalOfLives;
                hearts[totalOfLives].src = "images/emptyheart.png";    
            }

            if(totalOfLives === 0){
                bright.style.display = 'block';
                endBox.style.display = 'block';
                tries.innerHTML = 0;
                finalScore = 0;
            }
          }
        } 
      )
   }
)

btnEnd.addEventListener("click", () => {
	 totalOfLives = 5;
    lifeAmount.innerText = totalOfLives;
    finalScore = 0;
	 console.log('finaaal' + finalScore)
    bright.style.display = 'none';
    endBox.style.display = 'none';
  
    hearts.forEach((heart) => {
        heart.src = "images/heartFull.png";
    })
  }  
)

