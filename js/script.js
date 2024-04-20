let holes = document.querySelectorAll('.hole');
let imgs = document.querySelectorAll('.character');
let points = document.querySelector('p');

let random;
let holesArray = Array.from(holes);
let imgsArray = Array.from(imgs);
let imgToScore;
console.log(holesArray)

function initGame(){
    random = Math.floor(Math.random() * holesArray.length);
    imgsArray.forEach((img) => {
        if(imgsArray.indexOf(img) === random){
            img.style.display = 'block';
            imgToScore = img;
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
holesArray.forEach((hole) => {
    hole.addEventListener("click", (e) =>{
        initGame();
        if(hole){
           if(holesArray.indexOf(hole) === random){
            score += 1;
            points.innerText = score;
            console.log("GANHOUUUUUUUUUUUUU")
           }
        }
       
    } )
})


holesArray.forEach((hole) => {

})