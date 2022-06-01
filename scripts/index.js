var results = [];
window.addEventListener('load', (event) => {
    //add event listner to roll button on index.html
    document.getElementById("roll-button").addEventListener('click', (event) => {
        rollDice();
    });
});

//grab the dice type, number of dice, and modifier from the form
let rollDice = () => {
    let diceType = parseInt(document.getElementById("dice-select").value);
    let numDice = parseInt(document.getElementById("num-dice").value);
    let modifier = parseInt(document.getElementById("modifier").value);
    if(isNaN(numDice)) {
        numDice = 1;
    }
    if(isNaN(modifier)) {
        modifier = 0;
    }
    let result = roll(diceType, numDice, modifier);
    results.push(numDice+'d'+diceType+' + '+modifier+' = '+result);
    if(results.length > 8) {
        results.shift();
    }
    //print results backwards
    let resultString = '';
    for(let i = results.length-1; i >= 0; i--) {    
        resultString += results[i]+'<br>';
    }
    document.getElementById("results-container").innerHTML = resultString;
}

//get results of dice roll
let roll = (diceType, numDice, modifier) => {
    let result = 0;
    for (let i = 0; i < numDice; i++) {
        result += Math.floor(Math.random() * diceType) + 1;
    }
    result += modifier;
    return result;
}
