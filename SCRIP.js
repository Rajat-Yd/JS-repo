// let firstbatch = 5
// let secondbatch = 8

// let count = firstbatch - secondbatch 
// console.log(count)


// let MyAge = 30
// let humandogratio = 6/5

// let MyDogAge = MyAge*humandogratio
// console.log(MyDogAge)


// let a = 7
// let b = 8
// let c = 9

// let D = a*(b - c)
// console.log(D)


// let count = 50
// count  = count + 50
// console.log(count )

// count = count - 75
// console.log(count )

// count = count + 45
// console.log(count )


// function increment() {
//     console.log("The button was clicked ")
// }



//Initialise the functin herr by its name.
// function countdown(){
    // console.log(5)
    // console.log(4)
    // console.log(3)
    // console.log(2)
    // console.log(1)
// }

//Invoe or called the function by name it n'Times
// countdown()

//Again intialisingg the funtion in anotheer example.
// function Num(){
    // console.log(40)
// }

// Again calling the function by its name.
// Num()



//Writting the function to log out the summ of the numbers.
//Initialise

// function sum(){
//     let Num2= 5     //     [ They both can be called from outside of the funtion]
//     let Num1= 4     //     [ Or can be called from the global scope.]
   
//     console.log(Num1 + Num2)
// }

// //Invoke
// sum()


// let lapscompleted = 0

// function increment(){
//     lapscompleted = lapscompleted +1 
// }

// increment()
// increment()
// increment()

// console.log(lapscompleted)  //Or it can beplaced insid of the function fot ouput 1,2,3


// document.getElementById("Num").innerText = 5

// let count = 5
// count = count +1
// console.log()




// //storing string variale
//  let message= "You had three new notifications"
//  let username = "Rajat"
//  let messageTouser = message  + ", " + username + "!"
//  console.log(messageTouser)

//Challenge 
// let greeting = "Hi, my name is"
// let username = "Rajat!"
// let myAge = "and i am "+ 19 + " Years old"
// let myGreeting = greeting + " " + username + " " + myAge
// console.log(myGreeting)


// console.log(4+5) //9
// console.log("4" + "6") //46  //double quotes "" turns integer into strings
// console.log("7" + 2) //72
// console.log(10 + "20") //1020


//challenge for creating greeting page on web 
// let welcomeEl = document.getElementById("welcome-el")
// let username = "Rajat"
// let Greetng = "Welcome back, "

// console.log(welcomeEl.innerText = Greetng + username )
// welcomeEl.innerText = welcomeEl.innerText + "😊"



//CONGRATULATIONS TO MYSELF FRO BUILDING MY FIRST JS APP**
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("Num")  //This is called camel case
let count = 0

function increment(){
    count +=1
    countEl.textContent =  count 
}

function decrement(){
    count -=1
    countEl.innerText = count
}  

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr 
    countEl.textContent = 0
    count = 0
}

//Firscalculator in javascript!!!
let number1 = 8
let number2 = 2
document.getElementById("Num1").textContent = number1
document.getElementById("Num2").textContent = number2

let sumel = document.getElementById("text-el")

function add(){
   let result =  number1 +number2
   sumel.textContent = "Sum: " + result
}
function Sub(){
   let result =  number1 - number2
   sumel.textContent = "Sum: " + result
}
function Multi(){
   let result =  number1 * number2
   sumel.textContent = "Sum: " + result
}
function divide(){
   let result =  number1/number2
   sumel.textContent = "Sum: " + result
}

//Challenge for night club
let Age = 22

if (Age < 22){
    console.log("Sorry but you cannot enter the club !")
} else if(Age >= 22){
    console.log("Welcome!")
}

//Challenge for birthday card from the king 
let age = 102

if (age === 100){
    console.log("Here is your birthday card from the king!")
} else if(age > 100){
    console.log("You already have a birthday card from the kng!")
} else {
    console.log("You are not elegible for birthday card from the king !")
}
    
//Black jack game 

let cards = [] // an ordred array or list of items.
let sum  = 0
let hasBlackJack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-el")                                                              // let sumEL = document.getElementById("sum-el")
let newcdEl = document.querySelector("#card-btn")
let sumEL = document.querySelector("#sum-el")
let cardEl = document.querySelector('#card-el')
let player = {
      name : "Rajat",
      Chips : 145
}
let playerEl = document.getElementById("Name-el")

  playerEl.textContent = player.name + ": $" + player.Chips
 
function renderGame(){
    if (sum<=20){
        message = "You wanna draw a card ? 🤨"
     } else if (sum === 21) {
         message = "You have won the blackjack!🙌"
        hasBlackJack = true
     } else{
         message ="You have loose the game! 😢"
         isAlive = false
     } 
     cardEl.textContent = "cards: " 
     for(let i=0; i<cards.length; i++){
         cardEl.textContent += cards[i] + " "
     }
     sumEL.textContent = "Sum: " + sum
     messageEl.textContent = message
}

function newcard(){  
if( isAlive === true && hasBlackJack === false){
    let newCard = getRandomcard()
    sum += newCard
    cards.push(newCard)
    renderGame()   
   } 
}

function startGame(){
    let firstCard = getRandomcard()
    let secondCard = getRandomcard()
    cards = [firstCard + secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}



function getRandomcard(){
    let  randomNumber = Math.floor(Math.random()*13) + 1
    
    if (randomNumber > 10){
        return 10
    } else if(randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}


