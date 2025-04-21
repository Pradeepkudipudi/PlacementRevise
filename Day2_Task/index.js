
// <!-- Day 2 Task 
 
// �
// � Task: Secret Number Game 
//        Objective: 
//  Write a JavaScript program where: 
// • The player gets 3 chances to guess a secret number. 
// • Use if/else for feedback (conditional statements). 
// • Use a closure to protect the secret number. 
// • Demonstrate hoisting and the temporal dead zone (TDZ). 
// • Use different types of functions (normal, arrow, IIFE). 
// • Use a for loop to manage attempts. 
 
 
// SAMPLE OUTPUT : 
 
//      Welcome to the Secret Number Game! 
  
// Attempt 1: Guess the secret number (1-10) 
// > User enters: 4   
//     Too low! 
  
// Attempt 2: Guess the secret number (1-10) 
// > User enters: 9   
//     Too high! 
  
// Attempt 3: Guess the secret number (1-10) 
// > User enters: 7   
//               Correct!

const prompt = require("prompt-sync")();

  



function outer(){

    for(i=1;i<=10;i++){
        num = Math.floor(Math.random(i)*10)
    }
    
    if(num>0){
        secret = num
    }
    
    console.log(secret)
    
    
    // const  secret = 7


    function inner(){
        
     
for(let i=0;i<3;i++){
var input= prompt("enter number")
 if(input == secret){
    console.log("correct guesss")
    break
 }      
else if(input<secret){
    console.log(" too low ")
}else if(input>secret){
    console.log("   too high")
}

}

if(input!==secret) {
    console.log("try again")
}

    }

    return inner()

}


let k=outer
k()


