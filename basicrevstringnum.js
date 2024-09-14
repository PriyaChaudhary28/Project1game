let count=[]
let sum=0
let message=""
let hasblackjack=false
let isalive=false


// let sums=document.getElementById("sum1")
let mes=document.getElementById("message-el")      //method 1 to pass by id
let sums=document.querySelector("#sum1")    //by selectors name even by id class or name
// let sums=document.querySelector(".sum1")            //by class
// let sums=document.querySelector("body") 
let cardo=document.getElementById("card")
let pla={
    playername:"per",
    money:145
}
let players=document.getElementById("player")
players.textContent=pla.playername+": $"+pla.money
//function to get random num form 1 to 13
function getrandom(){
   let ran = Math.floor(Math.random()*13)+1

    if(ran > 10){
        return 10
    }else if(ran === 1){
        return 11
    }else{
        return ran
    }
}
function  startgame(){
    isalive=true
    let firstcard=getrandom()
    let secondcard=getrandom()
    count=[firstcard,secondcard]
    sum=firstcard +secondcard
    rendergame()
}
function rendergame(){
    sums.textContent="SUM:" +sum
    cardo.textContent="cards:"
    for(let i=0;i<count.length;i++){
        cardo.textContent+=count[i]+" "
    }
    if(sum<=20){
        message="do you want to pick another card"
    }
    else if(sum===21){
       message="wohoo you win and have a blackjack"
       hasblackjack=true
    }
    else{
       message="better next time you are out"
       isalive=false
    }
    mes.textContent=message
}

function newcard(){
    if(isalive===true && hasblackjack===false){
    let card=getrandom()
    sum+=card
    count.push(card)
    rendergame()}
}