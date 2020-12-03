
//Setting up the game

var diceFaces = new Array("./dicefaces/one.png","./dicefaces/two.png","./dicefaces/three.png","./dicefaces/four.png","./dicefaces/five.png","./dicefaces/six.png",);
// const diceP1 = document.getElementById('dice-p1');
// const diceP2 = document.getElementById('dice-p2');
// const diceP3 = document.getElementById('dice-p3');
// const diceP4 = document.getElementById('dice-p4');
var totalPlayers=2;
var gameEnd=false;
var sRandomNum=0;
for(let i=1;i<totalPlayers+1;i++){
    document.getElementById('player-'+i).classList.remove('disabledDiv');
    sRandomNum= Math.floor(Math.random() * diceFaces.length);
    document.getElementById("dice-p"+i).src=diceFaces[sRandomNum];

    
}

//Behind the Scenes
const p1Home = document.getElementById('player-1');
const p2Home = document.getElementById('player-2');
const p3Home = document.getElementById('player-3');
const p4Home = document.getElementById('player-4');

// p3Home.className='disabledDiv';
// p4Home.className='disabledDiv';

// const startP1 = document.getElementById('start-p1');
// const startP2 = document.getElementById('start-p2');
// const startP3 = document.getElementById('start-p3');
// const startP4 = document.getElementById('start-p4');

//const runP1=new Array();

// p1Home.addEventListener('click',pickPiece);
// p1Home.removeEventListener('click',pickPiece);


// p1Home.addEventListener('click',rollDice);
// p2Home.addEventListener('click',rollDice);
// p3Home.addEventListener('click',rollDice);
// p4Home.addEventListener('click',rollDice);
var dice_p1='#dice-p1',
    dice_p2='#dice-p2',
    dice_p3='#dice-p3',
    dice_p4='#dice-p4',
    randomNumber,
    dicePoints=[],
    newElement,
    p1_running=0,
    p2_running=0,
    p3_running=0,
    p4_running=0,
    pickedOrNot;


document.getElementById('player-1').addEventListener('click',rollDice);

//functions
function pickPiece(e) {
    //console.log(e.target);
    const clicks = e.target;
    console.log(e.target);
    if (clicks.matches('.p1-piece')) {
       
        newElement = document.createElement('div');
        newElement.innerHTML+=`<div class='running-p1' ></div>`;
        // startP1.appendChild( newElement);
        document.getElementById('start-p1').appendChild( newElement);
        p1_running+=1;
        pickedOrNot=true;
        dicePoints.shift();
        // document.getElementById('p1Home').removeEventListener('click',pickPiece);
        clicks.style.visibility = 'hidden';
        console.log('new Goti of Player -1');
        console.log(document.getElementById('start-p1'));
        if (dicePoints[0]!=6) {
            document.getElementById('p1Home').removeEventListener('click',pickPiece);
        }
        // Track Event Listeners  
        if (p1_running!=0) {
            console.log('Bari Chalein');
                // Track Event Listeners ON  
            document.querySelectorAll('.mytable')[0].addEventListener('click',rollForward);
            document.querySelectorAll('.mytable')[1].addEventListener('click',rollForward);
            document.querySelectorAll('.mytable')[2].addEventListener('click',rollForward);
            document.querySelectorAll('.mytable')[3].addEventListener('click',rollForward);
        }
        
        
    }
}

function randDiceRoll(){
    let result=Math.floor(Math.random()*diceFaces.length);
    return result;
}
function randGif(){
    let gifResult=Math.ceil(Math.random()*2);
    return gifResult;
}
//ROLL FORWARD
function rollForward(e){
    const clicks=e.target;
    // console.log(clicks);
    // dicePoints.shift();
    if (clicks.matches('.running-p1')) {
        //console.log(clicks);
        newElement=clicks.parentNode;
        newElement.remove();
        console.log('\tElement Removed');
        console.log('Travelled ',dicePoints[0]);
        console.log(newElement);

        dicePoints.shift();
        if (dicePoints.length==0) {
               // Track Event Listeners OFF 
               console.log('Track Listeners - OFF');
               document.querySelectorAll('.mytable')[0].removeEventListener('click',rollForward);
               document.querySelectorAll('.mytable')[1].removeEventListener('click',rollForward);
               document.querySelectorAll('.mytable')[2].removeEventListener('click',rollForward);
               document.querySelectorAll('.mytable')[3].removeEventListener('click',rollForward);
            if (pickedOrNot==true) {
                console.log('new Goti was picked!');
                document.getElementById('p1Home').removeEventListener('click',pickPiece);
            }
            //Next Player turn
            console.log('Next Player ajaei ab');
            document.getElementById('player-2').addEventListener('click',rollDice);
        }

    }

    // if(clicks.matches('.running-p1')){
    //         newElement = document.createElement('div');
    //         newElement.innerHTML=`<div class='running-p1' ></div>`;
            
    //         // startP1.appendChild( newElement);
    //         document.getElementById('pos-'+dicePoints.shift()).appendChild( newElement);
            
    //         if(dicePoints.length==0){
    //             document.getElementById('game-board').EventListener('click',rollForward);
    //         }
    //         e.preventDefault();   
    // }

   
}
//ROLL DICE
function rollDice(e){
    //console.log(e.target);
    const clicks = e.target;
    if (clicks.matches('#dice-p1')) {
        //clicks.src='./load.gif';
        
        randomNumber=randDiceRoll();
        console.log(randomNumber+1);
        clicks.src=diceFaces[randomNumber];
        dicePoints.push(randomNumber+1);
        //console.log('befroe IF ELSE of SIX COndition');
        if (randomNumber==5){
            console.log('SIX');
            console.log('Dobara Dice Roll Karein - Player 1');
        }
        else{
            
            if (p1_running!=0) {
                console.log('Bari Chalein');
                console.log('Track Listeners ON - p1 Player');
                    // Track Event Listeners  
                document.querySelectorAll('.mytable')[0].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[1].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[2].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[3].addEventListener('click',rollForward);
            }
            if (dicePoints[0]==6) {
                console.log('Goti Nikalein / Bari Chalein');
                pickedOrNot=false;
                console.log(pickedOrNot,'Picked Or Not');
                document.getElementById('p1Home').addEventListener('click',pickPiece);
            }
            else if(dicePoints[0]!=6 && p1_running==0){
                console.log('Bari Zaya hogai Apki - Player 2 Turn');
                document.getElementById('player-2').removeEventListener('click',rollDice);
            }
            console.log('No dice for Player - 1');
            document.getElementById('player-1').removeEventListener('click',rollDice);
            

        }
        // if(dicePoints[dicePoints.length-1==6] || randomNumber==5)
        // {
        //     console.log('SIX');
        //     theSix=true;
        //     console.log(dicePoints[dicePoints.length-1]);
        // }
        // else
        // {
                
        //     console.log('NOT SIX');
        //     document.getElementById('player-1').removeEventListener('click',rollDice);
        //     // if (theSix==true){
        //     // document.getElementById('p1Home').addEventListener('click',pickPiece);
        //     //  }
        //     // for (let ind = 0; ind <4; ind++) {
        //     // document.querySelectorAll('.mytable')[ind].addEventListener('click',rollForward);
            
        //     //  }
        
        // }
    }
    // else if (clicks.matches('#dice-p2')) {
    //     // if (clicks.matches(dice_p1) ){
    //         console.log(clicks);
    //         clicks.src='./load.gif';
    //         randomNumber=randDiceRoll();
    //         console.log(randomNumber+1);
    //         setTimeout(function(){clicks.src=diceFaces[randomNumber]}, randGif()*700);
    //         dicePoints.push(randomNumber+1);
    //         if(randomNumber==5){
    //             console.log('SIX');
    //         }
    //         else{
    //             document.getElementById('player-2').removeEventListener('click',rollDice);
    //             if (totalPlayers>2) {
    //                 document.getElementById('player-3').addEventListener('click',rollDice);
    //             }
    //             else{
    //                 document.getElementById('player-1').addEventListener('click',rollDice);
    //             }
    //         }
    //     }
    // else if (clicks.matches('#dice-p3')) {
    //         // if (clicks.matches(dice_p1) ){
    //             console.log(clicks);
    //             clicks.src='./load.gif';
    //             randomNumber=randDiceRoll();
    //             console.log(randomNumber);
    //             setTimeout(function(){clicks.src=diceFaces[randomNumber]}, randGif()*700);
    //             dicePoints.push(randomNumber+1);
    //             if(randomNumber==5){
    //                 console.log('SIX');
    //             }
    //             else{
    //                 document.getElementById('player-3').removeEventListener('click',rollDice);
    //                 if (totalPlayers>3) {
    //                     document.getElementById('player-4').addEventListener('click',rollDice);
    //                 }
    //                 else{
    //                     document.getElementById('player-1').addEventListener('click',rollDice);
    //                 }
                    
    //             }
    //         }
    // else if (clicks.matches('#dice-p4')) {
    //             // if (clicks.matches(dice_p1) ){
    //                 console.log(clicks);
    //                 clicks.src='./load.gif';
    //                 randomNumber=randDiceRoll();
    //                 console.log(randomNumber);
    //                 setTimeout(function(){clicks.src=diceFaces[randomNumber]}, randGif()*700);
    //                 dicePoints.push(randomNumber+1);
    //                 if(randomNumber==5){
    //                     console.log('SIX');
    //                 }
    //                 else{
    //                     document.getElementById('player-4').removeEventListener('click',rollDice);
    //                     document.getElementById('player-1').addEventListener('click',rollDice);
    //                 }
    // }
    e.preventDefault();
    }


