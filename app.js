const comPick = document.getElementById("com-pick")
const yourPick = document.getElementById("your-pick")
const result = document.getElementById("result")
const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorBtn = document.getElementById("scissor")


const comChoices = ["rock", "scissor", "paper"]
let comChoise
let yourChoise 
let resultState

rockBtn.addEventListener("click", ()=>{
        const randomNum = Math.floor(Math.random() * 3)
        comChoise = comChoices[randomNum]
        yourChoise = "rock"
        comPick.innerText = comChoise
        yourPick.innerText = yourChoise
        deterineResult()
})
paperBtn.addEventListener("click", ()=>{
        const randomNum = Math.floor(Math.random() * 3)
        comChoise = comChoices[randomNum]
        yourChoise = "paper"
        comPick.innerText = comChoise
        yourPick.innerText = yourChoise
        deterineResult()

})
scissorBtn.addEventListener("click", ()=>{
        const randomNum = Math.floor(Math.random() * 3)
        comChoise = comChoices[randomNum]
        yourChoise = "scissor"
        comPick.innerText = comChoise
        yourPick.innerText = yourChoise
        deterineResult()

})

function deterineResult(){

    if(comChoise == "rock" && yourChoise == "paper"){
        resultState = "You Won! :)"
    }else if(comChoise == "rock" && yourChoise == "scissor"){
        resultState = "You Lost! :("
    }else if(comChoise == "paper" && yourChoise == "rock"){
        resultState = "You Lost! :("
    }else if(comChoise == "paper" && yourChoise == "scissor"){
        resultState = "You Won! :)"
    }else if(comChoise == "scissor" && yourChoise == "paper"){
        resultState = "You Lost! :("
    }else if(comChoise == "scissor" && yourChoise == "rock"){
        resultState = "You Won! :)"
    }else if(comChoise == yourChoise){
        resultState = "Opps...it's a draw :|"
    }
    result.innerText = resultState
}