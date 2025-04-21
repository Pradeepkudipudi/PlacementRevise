


// //day4 task


// Day 4 Task 
// �
// � Task: Employee Bonus Calculator (Web-based Interactive Task)   
// This task will cover the following concepts: 
// • Call, Apply, Bind: Dynamically setting this context to calculate bonuses using 
// call, optionally using apply and bind 
// • Array Methods: Processing employee data using map, filtering high earners 
// using filter, and totaling bonuses with reduce 
// • Rest & Spread Operators: Using spread syntax to clone and update employee 
// objects while keeping code clean and immutable 
// • ES6 Concepts: Writing modern JavaScript using arrow functions, template 
// literals, destructuring, let and const, and default parameters 
// �
// �
//  ️ Sample Output: 
// Alice earns ₹50000 and got a bonus of ₹5000 
// Charlie earns ₹60000 and got a bonus of ₹6000 
// Total Bonus Given: ₹15000 
// (Bob is not listed because his salary is ≤ 45000 and was filtered out)



const obj =[ {
    name : "Alice",
    salary : 50000
}
,
{
    name : "Charlie",
    salary : 60000
},{
    name : "Bob",
    salary : 45000    
}

]



// let storage  = function(){
    
//   if(this.salary>45000){

//     console.log(`${this.name} earns ${this.salary} got a bonus of ${this.bonus}`)
//   }

//     }
    
    
// obj.map((val)=>{

//     val["bonus"] = val.salary*0.1
// storage.call(val)


// })


// total = obj.reduce((acc,value)=>{
// if(value.salary>45000){
// summ=  acc + value.salary*0.1
// }
// return summ
// },0)





// storer = function(){
//     sum=0
//     this.map((val)=>{

       
        
//         val["bonus"] = val.salary*0.1
//         if(val.salary>45000){
         
//         }
//       console.log(`${val.name} earns salary of ${val.salary} got a bonus of ${val.bonus}`)

//     })
    


  
 
   

   
// }




// storer.call(obj)


// console.log(`total bonus are given ${total}`)

























// let totalBonus = obj.reduce((intial,val)=>{
//     if(val.salary>45000){
//         sum= intial + val.salary*0.1
//     }
//     return sum
// },0)


// console.log(totalBonus)


// let namee = {
//     firstname:"pradeep",
//     secondname : "kudipudi",
   
// }

// const printFullname =  function(para){
//     console.log(para + " " + this.firstname + " " + this.secondname)
// }

// printFullname.call(namee, "good morning")


// printFullname.apply(namee,["hello"])


// let printer = printFullname.bind(namee,"huhu")


// printer()




























