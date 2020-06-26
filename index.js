
/*
Next Task:
-get image in
-randomize it
-take care of bug if possible or go next project
    -bug like if you click fast enough, it will break this
    -we have to set some sort of mechanic to catch it
*/

let cannotClickYet = false;
let absoluteWin = document.querySelector(".absolute-win");
let holdGameBox = [];
let holdFirstElement = "";
let whatClick = 1;
let counter = 0;
let completeFlip = [];
for ( let i = 1; i < 21 ; i++){
    var holdGB = "gameBox" + i;
    holdGameBox.push({holdGB:"", "image":""});
}

for (let i = 0; i < holdGameBox.length; i++){
    holdGameBox[i].holdGB = document.querySelector(".game-box-" + (i+1))
}






/*Now to implement this to our project*/
var imageArray = [
    "./images/007.jpg","./images/dr.jpg","./images/he.jpg",
    "./images/llt.jpg", "./images/lt.jpg", "./images/p.jpg",
    "./images/sf.jpg", "./images/sz.jpg", "./images/tk.jpg", "./images/yt.jpg",
    "./images/007.jpg","./images/dr.jpg","./images/he.jpg",
    "./images/llt.jpg", "./images/lt.jpg", "./images/p.jpg",
    "./images/sf.jpg", "./images/sz.jpg", "./images/tk.jpg", "./images/yt.jpg"
]

function assignImage(indexArray){
    var indexNum = Math.floor(Math.random() * imageArray.length );
    //find and assign and take out of the ImageArray
    indexArray.image = imageArray[indexNum];
    imageArray.splice(indexNum, 1)
}

for(let i = 0; i < holdGameBox.length; i++){
    assignImage( holdGameBox[i]);
}


for (let i = 0; i < holdGameBox.length; i++){
    holdGameBox[i].holdGB.addEventListener("click", function (){
        if(!cannotClickYet){
            holdGameBox[i].holdGB.style.transform = "rotateY(180deg)";
            holdGameBox[i].holdGB.src = holdGameBox[i].image;
            //holdGameBox[i] is whatever you are clicking on right now!

            //first we check, is whatever you are clicking right now is in the already matched ?
            //or is it the first one that you already clicked ?
            if (completeFlip.includes(holdGameBox[i]) || holdFirstElement == holdGameBox[i]){
                //matched or clicked!
            }else {
              //if not, then proceed to the next stage
                //we want to know, is this first or second click
                if(whatClick == 1){
                    //this is the first click
                    //we need variable to hold the current holdGameBox[i]
                    holdFirstElement = holdGameBox[i];
                    //make next click second click
                    whatClick += 1;
                }else if (whatClick == 2){
                    //cannot click until everything done evaluating
                    cannotClickYet = true;
                    //this is the second click, we will reset the click to 1 after run whatever code
                    //we would use the holdFirstElement to evaluate with this current holdGameBox[i]
                    if(holdGameBox[i].image == holdFirstElement.image){
                        //the image are match!
                        completeFlip.push(holdGameBox[i]);
                        completeFlip.push(holdFirstElement);

                        //reset everything back after match
                        cannotClickYet = false;
                        whatClick = 1;
                        holdFirstElement = "";
                        counter += 1;
                        console.log("c:", counter);
                    }else{
                        //if not match, flip back and reset
                        setTimeout(function resetTheFlipTimeOut(){
                            holdFirstElement.holdGB.style.transform = "rotateY(0deg)";
                            holdFirstElement.holdGB.src = "./images/q.png";
                            holdFirstElement.holdGB.style.background = "lightgrey";
                            holdGameBox[i].holdGB.style.transform = "rotateY(0deg)";
                            holdGameBox[i].holdGB.src = "./images/q.png";
                            holdGameBox[i].holdGB.style.background = "lightgrey";

                            //reset variable after not match
                            whatClick = 1;
                            holdFirstElement = "";
                            cannotClickYet = false;
                        }, 800);
                    }
                }
            } 
        }else{
            //cannot click yet!
        }
    });
}



let checkWinInterval = setInterval(function winCheckInterval(){
    console.log("interval Running!")
    if(counter == 10){
        absoluteWin.style.visibility = "visible";
        clearInterval(checkWinInterval);
    }
}, 100)

