
/*
Next Task:
-get image in
-randomize it
-take care of bug if possible or go next project
    -bug like if you click fast enough, it will break this
    -we have to set some sort of mechanic to catch it
*/


var holdGameBox = [];

for ( let i = 1; i < 21 ; i++){
    var holdGB = "gameBox" + i;
    holdGameBox.push({holdGB:"", "image":""});
}

for (let i = 0; i < holdGameBox.length; i++){
    holdGameBox[i].holdGB = document.querySelector(".game-box-" + (i+1))
}


var hold1 = "";
var holdDivLast = "";
var whatNum = 1;
var completeFlip = [];
var counter = 0;

for (let i = 0; i < holdGameBox.length; i++){
    holdGameBox[i].holdGB.addEventListener("click", function (){
        holdGameBox[i].holdGB.style.transform = "rotateY(180deg)";
        holdGameBox[i].holdGB.src = holdGameBox[i].image;
        
        if (completeFlip.includes(holdGameBox[i]) || hold1 == holdGameBox[i]){
            console.log("already match or clicked!")
        }else {
            if(whatNum == 1 ){
                hold1 =  holdGameBox[i].holdGB.src;
                holdDivLast = holdGameBox[i].holdGB;
                whatNum += 1;
                counter += 1;
            }else if (hold1 == holdGameBox[i].holdGB.src) {
                completeFlip.push(holdGameBox[i].holdGB);
                completeFlip.push(holdDivLast);
                hold1 = "";
                whatNum  = 1;
                holdDivLast = "";
                counter += 1;
            }else {
                setTimeout(function callbackS(){
                    holdDivLast.style.transform = "rotateY(0deg)";
                    holdDivLast.src = "./images/q.png";
                    holdDivLast.style.background = "lightgrey";
                    holdGameBox[i].holdGB.style.transform = "rotateY(0deg)";
                    holdGameBox[i].holdGB.src = "./images/q.png";
                    holdGameBox[i].holdGB.style.background = "lightgrey";
                    hold1 = "";
                    whatNum  = 1;
                    holdDivLast = "";
                    counter += 1;
                }, 1000)
            }
        }  
    });
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













