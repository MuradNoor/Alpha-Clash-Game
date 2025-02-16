function keyboardPressKeyup(event){
    const playerPressed  = event.key;
    console.log("player pressed ",playerPressed );
    if(playerPressed === 'Escape'){
        gameOver();
    }

    const keyboardPressed = document.getElementById('output');
    const pressedKey = keyboardPressed.innerText.toLocaleLowerCase();
    console.log('press key', pressedKey);

    if(pressedKey === playerPressed){
        console.log('you get a score');
         // -------------------using function-----------
        const newScore = getTextElementValueById('current-score');
        const finalScore = newScore + 1;
        setTextElementValueById('current-score', finalScore);
        // const finalScore = newScore.innerText;
        // console.log(finalScore); 
        // increase the score
        // const currentScore = document.getElementById('current-score');
        // const updateScore = currentScore.innerText;
        // const newScore = parseInt(updateScore);
        // const finalScore = newScore + 1;
        // currentScore.innerText = finalScore;
        // console.log(finalScore);
       
        // continue playing
        removeBgColor(playerPressed);
        continuePlay();
        
    }
    else{
        console.log('you lose a life')
        // lose a life
        // const currentLife = document.getElementById('current-life');
        // const updateLife = currentLife.innerText;
        // const newLife = parseInt(updateLife);
        // const finalLife = newLife - 1;
        // currentLife.innerText = finalLife;
        // console.log(finalLife); 
        // using function
        const newLife = getTextElementValueById('current-life');
        const finalLife = newLife - 1;
        setTextElementValueById('current-life', finalLife);
        if(finalLife === 0){
            gameOver();
            // setTextElementValueById('total-score', finalScore);
        }
        
    } 
    
}

document.addEventListener('keyup', keyboardPressKeyup);


function continuePlay(){
    const alphabet = getRandomAlphabet();
    

    // showing result in screen
    const result = document.getElementById('output');
    result.innerText = alphabet;
    setBgColor(alphabet);

}

function play(){
    hideElementById('score')
    hideElementById('home');
    showElementById('playground');
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continuePlay();
}

function gameOver(){
    hideElementById('playground');
    showElementById('score');
    // set final score
    const getScore = getTextElementValueById('current-score');
    setTextElementValueById('total-score', getScore );

    // update selection color
    const newAlphabet = getElementTextById('output');
    removeBgColor(newAlphabet);
}