// Give account of when the game numbers is low than secret number
// Give account of when the game numbers is higher than secret number
// If score is reduce to 0 Alert lose of game!!!
'use strict'
//Variable holding random secret number to guess
let score = 3
let highScore = 0
let deviceRoll = Math.trunc(Math.random()*3) + 1
console.log(deviceRoll)
document.querySelector(".score-guess").textContent = score
document.querySelector(".good-guess").textContent = highScore
document.querySelector(".click").addEventListener("click",rollDice) 
document.querySelector(".correct-num").style.color= "white"
// Creating event listener to listen to the click 
// Passing event handler function into the eventlistener
function rollDice(){
    // if input is empty flash the empty notification!!!
 let inputVaue = document.querySelector(".pt").value
   if(!Number(inputVaue)){
      document.querySelector(".correct-num").textContent = "Please enter a number ......"
    
    
   }else if(Number(inputVaue) === deviceRoll ){
    //checking if the input value match with the random secret number: line 13
    //if device match score need to be increase
    document.querySelector(".correct-num").textContent = "You won!!!"
    document.querySelector(".good-guess").textContent+=1
    document.querySelector("body").style.backgroundColor="green"
   }else if(Number(inputVaue) !== deviceRoll){
       //if the number of input does not match the device roll we need descrease the score
      document.querySelector(".flash-back").textContent= ""
      document.querySelector(".correct-num").textContent = `sorry your score reduce!!!${score-=1}`
      document.querySelector(".score-guess").textContent = score
      document.querySelector("body").style.backgroundColor="red"
    

    
   // }if (score < 1){
   //    document.querySelector(".correct-num").textContent= `WoW!! You lost the Game ):`
      
      
   }else if(Number(inputVaue) > deviceRoll){
      
      document.querySelector(".correct-num").textContent = "Your Number is too High!!" 
      
   }else if ( Number(inputVaue) < deviceRoll){
      
      document.querySelector(".correct-num").textContent = "Your Number is too Low!!"
   
   }
   
    if(score < 0){

      document.querySelector(".correct-num").textContent = "Sorry you lost the Game!!"
      
    }
}

document.querySelector(".reset").addEventListener("click",resetFun)
function resetFun(){
   score = 3
   //this handler function is going to reset all games back to default.
   deviceRoll = Math.trunc(Math.random()*3) + 1
   document.querySelector(".correct-num").style.color= "white"
   document.querySelector("body").style.backgroundColor = "blueviolet"
   document.querySelector(".pt").value = ""
   document.querySelector(".score-guess").textContent = score
   document.querySelector(".correct-num").textContent = "Start Guessing ...."
}