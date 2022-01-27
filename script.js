// const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
// const colors = ['#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed','#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0']
const colors = ['voilet','indigo','blue','green','yellow','orange','red']

const container  = document.getElementById("container")
const clearButton =  document.getElementById("clearbutton")
const SQUARES = 848

clearButton.addEventListener("click",()=> removeColor())

for(let i=0;i<SQUARES;i++){
    const square = document.createElement("div")
    square.classList.add("square")

    square.addEventListener("mouseover",()=> setColor(square))
    

    container.appendChild(square)
}

function setColor(element){
    const color = randomColor()

    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}

function removeColor(){
    let allSquares = document.querySelectorAll(".square");
    for(let i=0;i<SQUARES;i++){
    allSquares[i].style.boxShadow = "0 0 2px #000";
    allSquares[i].style.backgroundColor = "#f6f1f5";
    }
}
function randomColor(){
    const index = Math.floor(Math.random()*colors.length)
    return colors[index]
}

let arr = [4,-1,1,4,2,1]
let arr2 = arr.map((ele)=>{
console.log(ele);
if(ele < 0)
return "shooru";
})
console.log(arr2);