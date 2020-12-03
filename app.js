
//Setting up the game

var diceFaces = new Array("./dicefaces/one.png","./dicefaces/two.png","./dicefaces/three.png","./dicefaces/four.png","./dicefaces/five.png","./dicefaces/six.png",);

var totalPlayers=4;
var gameEnd=false;

for(let i=1;i<totalPlayers+1;i++){
    document.getElementById('player-'+i).classList.remove('disabledDiv');
    document.getElementById("dice-p"+i).src='./dicefaces/locked.png';

    
}

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
        if (dicePoints[0]==6)
            {
            newElement = document.createElement('div');
            newElement.innerHTML+=`<div class='running-p1' ></div>`;
            
            document.getElementById('pos-12').appendChild( newElement);
            p1_running+=1;
            pickedOrNot=true;
            dicePoints.shift();
            
            clicks.style.visibility = 'hidden';
            console.log('new Goti of Player -1');
            console.log(document.getElementById('pos-12'));
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
    else if (clicks.matches('.p2-piece')) {
        if (dicePoints[0]==6)
            {
            newElement = document.createElement('div');
            newElement.innerHTML+=`<div class='running-p2' ></div>`;
            // startP2.appendChild( newElement);
            document.getElementById('pos-25').appendChild( newElement);
            p2_running+=1;
            pickedOrNot=true;
            dicePoints.shift();
            
            clicks.style.visibility = 'hidden';
            console.log('new Goti of Player -2');
            console.log(document.getElementById('pos-25'));
            if (dicePoints[0]!=6) {
                document.getElementById('p2Home').removeEventListener('click',pickPiece);
            }
            // Track Event Listeners  
            if (p2_running!=0) {
                console.log('Bari Chalein');
                    // Track Event Listeners ON  
                document.querySelectorAll('.mytable')[0].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[1].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[2].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[3].addEventListener('click',rollForward);
            }
        } 
    }
    else if (clicks.matches('.p3-piece')) {
        if (dicePoints[0]==6)
            {
            newElement = document.createElement('div');
            newElement.innerHTML+=`<div class='running-p3' ></div>`;
            // startP3.appendChild( newElement);
            document.getElementById('pos-51').appendChild( newElement);
            p3_running+=1;
            pickedOrNot=true;
            dicePoints.shift();
            // document.getElementById('p3Home').removeEventListener('click',pickPiece);
            clicks.style.visibility = 'hidden';
            console.log('new Goti of Player -3');
            console.log(document.getElementById('pos-51'));
            if (dicePoints[0]!=6) {
                document.getElementById('p3Home').removeEventListener('click',pickPiece);
            }
            // Track Event Listeners  
            if (p3_running!=0) {
                console.log('Bari Chalein');
                    // Track Event Listeners ON  
                document.querySelectorAll('.mytable')[0].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[1].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[2].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[3].addEventListener('click',rollForward);
            }
        } 
    }
    else if (clicks.matches('.p4-piece')) {
        if (dicePoints[0]==6)
            {
            newElement = document.createElement('div');
            newElement.innerHTML+=`<div class='running-p4' ></div>`;
            // startP4.appendChild( newElement);
            document.getElementById('pos-38').appendChild( newElement);
            p4_running+=1;
            pickedOrNot=true;
            dicePoints.shift();
            
            clicks.style.visibility = 'hidden';
            console.log('new Goti of Player -4');
            console.log(document.getElementById('pos-38'));
            if (dicePoints[0]!=6) {
                document.getElementById('p4Home').removeEventListener('click',pickPiece);
            }
            // Track Event Listeners  
            if (p4_running!=0) {
                console.log('Bari Chalein');
                    // Track Event Listeners ON  
                document.querySelectorAll('.mytable')[0].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[1].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[2].addEventListener('click',rollForward);
                document.querySelectorAll('.mytable')[3].addEventListener('click',rollForward);
            }
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
    
    if (clicks.matches('.running-p1')) {
       
        let prevId=clicks.offsetParent.id;
        prevId=String(prevId);
        
        let nextPos=parseInt(prevId.slice(-2),10);
        console.log('Before adding new pos in var: ',nextPos);
        for (let fwd_i = 0; fwd_i < dicePoints[0]; fwd_i++) {
            nextPos+=1;
        }
        if (nextPos<=68) {
            newElement=clicks.parentNode;
            newElement.remove();
            console.log('\tElement Removed');
            document.getElementById('pos-'+nextPos).appendChild( newElement);
            console.log('After adding new pos in var: ',nextPos);
            console.log('Travelled ',dicePoints[0]);
            console.log(newElement);
            dicePoints.shift();
            if (nextPos==68) {
                p1_running--;
            }
        }
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
    else if (clicks.matches('.running-p2')) {
        //console.log(clicks);
        
        let prevId=clicks.offsetParent.id;
        prevId=String(prevId);
        
        let nextPos=parseInt(prevId.slice(-2),10);
        console.log('Before adding new pos in var: ',nextPos);
        for (let fwd_i = 0; fwd_i < dicePoints[0]; fwd_i++) {
            nextPos+=1;
            if (nextPos==63) {
                nextPos=11;
            }
            else if (nextPos==24) {
                nextPos=69;
            }
        }
        if (nextPos<=74) {
            newElement=clicks.parentNode;
            newElement.remove();
            console.log('\tElement Removed');
            document.getElementById('pos-'+nextPos).appendChild( newElement);
            console.log('After adding new pos in var: ',nextPos);
            console.log('Travelled ',dicePoints[0]);
            console.log(newElement);
            dicePoints.shift();
            if (nextPos==74) {
                p2_running--;
            }
        }
        if (dicePoints.length==0) {
                  
               // Track Event Listeners OFF 
               console.log('Track Listeners - OFF');
               document.querySelectorAll('.mytable')[0].removeEventListener('click',rollForward);
               document.querySelectorAll('.mytable')[1].removeEventListener('click',rollForward);
               document.querySelectorAll('.mytable')[2].removeEventListener('click',rollForward);
               document.querySelectorAll('.mytable')[3].removeEventListener('click',rollForward);
            if (pickedOrNot==true) {
                console.log('new Goti was picked!');
                document.getElementById('p2Home').removeEventListener('click',pickPiece);
            }
            //Next Player turn
            console.log('Next Player ajaei ab');
            if (totalPlayers>2) {
            document.getElementById('player-3').addEventListener('click',rollDice);
             
            }
            else{
            document.getElementById('player-1').addEventListener('click',rollDice);
             
            }
        }

    }
    else if (clicks.matches('.running-p3')) {
        let prevId=clicks.offsetParent.id;
        prevId=String(prevId);
        
        let nextPos=parseInt(prevId.slice(-2),10);
        console.log('Before adding new pos in var: ',nextPos);
        for (let fwd_i = 0; fwd_i < dicePoints[0]; fwd_i++) {
            nextPos+=1;
            if (nextPos==63) {
                nextPos=11;
            }
            else if (nextPos==50) {
                nextPos=75;
            }
        }
        if (nextPos<=80) {
            newElement=clicks.parentNode;
            newElement.remove();
            console.log('\tElement Removed');
            document.getElementById('pos-'+nextPos).appendChild( newElement);
            console.log('After adding new pos in var: ',nextPos);
            console.log('Travelled ',dicePoints[0]);
            console.log(newElement);
            dicePoints.shift();
            if (nextPos==74) {
                p3_running--;
            }
        }
        if (dicePoints.length==0) {
                 
               // Track Event Listeners OFF 
               console.log('Track Listeners - OFF');
               document.querySelectorAll('.mytable')[0].removeEventListener('click',rollForward);
               document.querySelectorAll('.mytable')[1].removeEventListener('click',rollForward);
               document.querySelectorAll('.mytable')[2].removeEventListener('click',rollForward);
               document.querySelectorAll('.mytable')[3].removeEventListener('click',rollForward);
            if (pickedOrNot==true) {
                console.log('new Goti was picked!');
                document.getElementById('p3Home').removeEventListener('click',pickPiece);
            }
            //Next Player turn
            console.log('Next Player ajaei ab');
            if (totalPlayers>3) {
                document.getElementById('player-4').addEventListener('click',rollDice);
                 
                }
                else{
                document.getElementById('player-1').addEventListener('click',rollDice);
                 
                }
        }

    }
    else if (clicks.matches('.running-p4')) {
        let prevId=clicks.offsetParent.id;
        prevId=String(prevId);
        
        let nextPos=parseInt(prevId.slice(-2),10);
        console.log('Before adding new pos in var: ',nextPos);
        for (let fwd_i = 0; fwd_i < dicePoints[0]; fwd_i++) {
            nextPos+=1;
            if (nextPos==63) {
                nextPos=11;
            }
            else if (nextPos==37) {
                nextPos=81;
            }
        }
        if (nextPos<=86) {
            newElement=clicks.parentNode;
            newElement.remove();
            console.log('\tElement Removed');
            document.getElementById('pos-'+nextPos).appendChild( newElement);
            console.log('After adding new pos in var: ',nextPos);
            console.log('Travelled ',dicePoints[0]);
            console.log(newElement);
            dicePoints.shift();
            if (nextPos==74) {
                p4_running--;
            }
        }
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
            document.getElementById('player-1').addEventListener('click',rollDice);
            
        }

    }
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
                dicePoints=[]
                console.log('Bari Zaya hogai Apki - Player 2 Turn');
                document.getElementById('player-2').addEventListener('click',rollDice);
                 
            }
            console.log('No dice for Player - 1');
            
            document.getElementById('player-1').removeEventListener('click',rollDice);
            
            

        }
        
    }
    else if (clicks.matches('#dice-p2')) {
        //clicks.src='./load.gif';
        
        randomNumber=randDiceRoll();
        console.log(randomNumber+1);
        clicks.src=diceFaces[randomNumber];
        dicePoints.push(randomNumber+1);
        //console.log('befroe IF ELSE of SIX COndition');
        if (randomNumber==5){
            console.log('SIX');
            console.log('Dobara Dice Roll Karein - Player 2');
        }
        else{
            
            if (p2_running!=0) {
                console.log('Bari Chalein');
                console.log('Track Listeners ON - p2 Player');
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
                document.getElementById('p2Home').addEventListener('click',pickPiece);
            }
            else if(dicePoints[0]!=6 && p2_running==0){
                dicePoints=[]
                if (totalPlayers>2) {
                    console.log('Bari Zaya hogai Apki - Player 3 Turn');
                   
                document.getElementById('player-3').addEventListener('click',rollDice);
                 
                }
                else{
                    console.log('Bari Zaya hogai Apki - Player 1 Turn');
                document.getElementById('player-1').addEventListener('click',rollDice);
                 
                }
                
            }
            console.log('No dice for Player - 2');
            
            document.getElementById('player-2').removeEventListener('click',rollDice);
            
            

        }
      }
      else if (clicks.matches('#dice-p3')) {
        //clicks.src='./load.gif';
        
        randomNumber=randDiceRoll();
        console.log(randomNumber+1);
        clicks.src=diceFaces[randomNumber];
        dicePoints.push(randomNumber+1);
        //console.log('befroe IF ELSE of SIX COndition');
        if (randomNumber==5){
            console.log('SIX');
            console.log('Dobara Dice Roll Karein - Player 3');
        }
        else{
            
            if (p3_running!=0) {
                console.log('Bari Chalein');
                console.log('Track Listeners ON - p3 Player');
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
                document.getElementById('p3Home').addEventListener('click',pickPiece);
            }
            else if(dicePoints[0]!=6 && p3_running==0){
                dicePoints=[]
                if (totalPlayers>3) {
                    console.log('Bari Zaya hogai Apki - Player 4 Turn');
                    
                document.getElementById('player-4').addEventListener('click',rollDice);
                 
                }
                else{
                    console.log('Bari Zaya hogai Apki - Player 1 Turn');
                document.getElementById('player-1').addEventListener('click',rollDice);
                 
                }
            }
            console.log('No dice for Player - 3');
           
            document.getElementById('player-3').removeEventListener('click',rollDice);
            

        }
      }
      else if (clicks.matches('#dice-p4')) {
        //clicks.src='./load.gif';
        
        randomNumber=randDiceRoll();
        console.log(randomNumber+1);
        clicks.src=diceFaces[randomNumber];
        dicePoints.push(randomNumber+1);
        //console.log('befroe IF ELSE of SIX COndition');
        if (randomNumber==5){
            console.log('SIX');
            console.log('Dobara Dice Roll Karein - Player 4');
        }
        else{
            
            if (p4_running!=0) {
                console.log('Bari Chalein');
                console.log('Track Listeners ON - p4 Player');
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
                document.getElementById('p4Home').addEventListener('click',pickPiece);
            }
            else if(dicePoints[0]!=6 && p4_running==0){
                dicePoints=[]
                console.log('Bari Zaya hogai Apki - Player 1 Turn');
               
                document.getElementById('player-1').addEventListener('click',rollDice);
                 
            }
            console.log('No dice for Player - 4');
            
            document.getElementById('player-4').removeEventListener('click',rollDice);      

        }
      }   
    e.preventDefault();
    }


