let boxes=document.querySelectorAll(".box");
let button=document.querySelector("#resetbutton");
let newgamebtn=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let turnO=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,7],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame =()=>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turnO){
            box.innerText="0";
            turnO=false;
        }
        else {
            box.innerText="x";
            turnO=true;
        

        }
 box.disabled=true;
 checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const Showwinner=(winner)=>{
    msg.innerText=`Congratulation,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner =()=>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
       let pos3val = boxes[pattern[2]].innerText;
        if(pos1Val !=""&& pos2Val !=""&& pos3val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3val){
        Showwinner(pos1Val);
            }      
      }
    }
};
newgamebtn.addEventListener("click",resetgame);
button.addEventListener("click",resetgame);