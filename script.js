let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let turnO = true;
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;





const winPattern = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const resetgame = ()=> {
    turnO = true
    enabledBoxes();
    msgContainer.classList.add("hide");
    count = 0;

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count ++;
        
        
        if (turnO) {
            box.innerText = "O";
            box.style.color ="black";
            turnO = false;
        } else{
            box.innerText = "x";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        
if(count === 9){
    msg.innerText = "Match is Draw";
    msgContainer.classList.remove("hide");
 }
    })
})

const disabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true
    }
}

const enabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
    box.innerText = "";
    }
}

const showWinner = (winner)=>{
    msg.innerText = `Congrualtions You are winner, ${winner}`
msgContainer.classList.remove("hide");
disabledBoxes();
};

const checkWinner = ()=> {
for( let pattern of winPattern){
    let pos1Val = boxes[pattern[0]].innerText
    let pos2Val = boxes[pattern[1]].innerText
    let pos3Val = boxes[pattern[2]].innerText

    if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
        if(pos1Val == pos2Val && pos2Val == pos3Val){
            
            showWinner(pos1Val);   
            
        }
    }
}
}

resetbtn.addEventListener("click", resetgame);
newGameBtn.addEventListener("click", resetgame)
