let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let turn0 = true;
let click=0;
const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0){
            box.innerText = "0";
            box.classList.add("blue");
            turn0=false;
        } else {
            box.innerText = "X";
            box.classList.add("red");
            turn0=true;
        }
        box.disabled = true;
        click++;
        if (click <9) checkwinner();
        else draw();
    });
});

const showwinner = (winner) =>{
    msg.innerText = `Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    for(let box of boxes){
        box.disabled = true;
    }
};

const checkwinner=() =>{
    for (let pattern of winpattern){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if( val1!="" && val2!="" && val3!=""){
            if (val1 === val2 && val2 === val3){
                showwinner(val1);
            }
        }
    }
};

const resetgame = () =>{
    turn0 = true;
    click=0;
    for (let box of boxes){
        box.disabled = false;
        box.innerText="";
        box.classList.remove("blue");
        box.classList.remove("red");
    }
    msgcontainer.classList.add("hide");
};

newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);

const draw = () =>{
    msg.innerText = "Draw";
    msgcontainer.classList.remove("hide");
};