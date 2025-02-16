// // for hide the elements
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// // for show the function
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// // for continuous playing
function getRandomAlphabet(){
    const keyString = "abcdefghijklmnopqrstuvwxyz/";
    const stringValue = keyString.split('');
    const index = Math.round(Math.random() * 26);
    const alphabet = stringValue[index];
    return alphabet;
}

// set background color
function setBgColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');
}

// remove background color
function removeBgColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500');
}

// update score and decrease life
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const updateValue = element.innerText;
    const value = parseInt(updateValue);
    return value;
}

// set the values
function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// function for get the element text
function getElementTextById(elementId){
    const element = document.getElementById(elementId)
    const text = element.innerText;
    return text;
}