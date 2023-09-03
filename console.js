// // //Intro to arrays  = These are the ordered list items 

// // let firstArray = ["a", "b", "c"]

// // //An array can store any type of data type.

// // let mySelf = [
// //     myname = "Rajat",  //String
// //     Age = 19,  //Integer
// //     likePizza = true //Boolean
// // ]
// // console.log(mySelf[0])
// // console.log(mySelf[1])
// // console.log(mySelf[2])

// // //Adding elements to an array
// // let num = [1, 2, 3]
// // num.pop(2) //To remove an item 
// // num.push(4) //To add a new item 
// // console.log(num)


// // //Counting in Javascript
// // //        start   Finish    steps taken
// //  for (let a=0;    a<=10;     a+=1)  {
// //     console.log(a)                                  //For loop
// //  }


// //  //CHallenge

// //  for (let i=10; i<=100; i+=10) {
// //    console.log(i)
// //  }

//  //Combining the array and for loops
//  let experience = [                             
//     'ex-Google',                                  //These both are the examples of an array.
//     'Ex-Microsoft', 
//     'B.Tech first year',
//     'a',
//     'b'
// ]

// for(let i=0; i<experience.length; i+=1){   
//    console.log(experience[i])
// }

// //Challenge 
// let cardM = [1, 2, 3, 4]
// for(let i=0; i<cardM.length; i+=1){
//       console.log(cardM[i])
// }

// let sentence = [
//         "Hey,",
//         "My",
//         "Name is",
//         "Rajat Yadav"
// ]
// let greeEl = document.getElementById("parra-el")
// for(let i=0; i<sentence.length; i++){
//     greeEl.textContent += sentence[i] + " "
// }

// Returning back values in the function
// let palyer1time = 102
// let player2time = 100

// function getFastestRaceTime(){
//     if(palyer1time < player2time){
//         return palyer1time
//     }  else if(palyer1time>player2time){
//         return player2time
//     }  else{
//         return palyer1time
//     }
// }

// let fastestrace = getFastestRaceTime()

// //challenge

// function getTtalRaceTime(){
//     return palyer1time + player2time
// }

// let Customer = getTtalRaceTime()
// console.log(Customer)

//genrating Random number with maths

// let RandomNumber = Math.random()*6 
//it Genrates Rndom number btw 0 and 1 (Not inclusive 1 )
 
// let floorNumber = Math.floor(3.4567)
// console.log(floorNumber)

// function rollDice(){
    // return diceNumber = Math.floor(Math.random()*6) + 1
// }
// console.log(rollDice())

//Logical operators &&
// let Hascompeletedcourse  = true
// let givesCertificate = true

// if(Hascompeletedcourse === true && givesCertificate === true){
//         generatesCertificate()
// }

// function generatesCertificate(){
//     console.log("Generating Certificate....!")
// } 


// //Challenge 

// let HasSolvedChallenge = false 
// let HasHintLeft = false 

// if(HasSolvedChallenge === false && HasHintLeft === false ){
//     return showSolution()
// } 
// function showSolution(){
//     console.log("Showing the solution...!!!")
// }

//Logical OR operator ||

// let likesDocumentries = true
// let LikeStartups = false

// if(likesDocumentries === true || LikeStartups === true ){
//     return recommendation()
// } 
// function recommendation(){
//     console.log("Recommending the movie...!!!")
// }


//Introduction to object --==> These are complex datatypes / Store data in depth.
// Key--Value Paires
// 
// let course = {
        //   title : "Learn CSS for free",
        //   lessons : "20",
        //   creator : "Rajat Yadav",
        //   Duration : "6 months",
        //   level : "Intermediate",
        //   isFree : true,
        //   tags : ["Html", "CSS"]
// }
// console.log(course.tags)

//challenge

// let age = 75
// if (age < 6){
//     console.log( "free")
// } else if(age < 17){
//    console.log( "Child-discount")
// } else if(age <26){
//     console.log( "Studeent discount")
// } else if(age < 66){
//     console.log( "Full price")
// } else {
//     console.log( "senior citizen discount")
// }

// console.log("Five largest countries in the world based on population:")
// let largecountry = ["China", "India", "USA", "Indonesia", "Pakistan"]

// for ( let i=0; i<largecountry.length; i++){
//      console.log("- " + largecountry[i]) 
// }



//Eventlistners

// let box = document.querySelector('.box')

//  box.addEventListener("click", function(){
//     console.log("Hello")
//  })


 //Templat strings // template litterals

 let customer = "Rajat "
 let sender = "Devesh"
 const email = `Hey ${customer} How is it going its ${sender} here`
 
 //Template strings on multiple lines 

 