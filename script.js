const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOne = [];
let passwordTwo = [];

let generatePasswordButton = document.getElementById('generate-password-button')
let passwordOneEl = document.getElementById('password-one-el');
let passwordTwoEl = document.getElementById('password-two-el');

function generatePasswords() {
    for(let i=0 ; i < 15 ; i++) {
        // Generate random character in variables
        let randomCharactersOne = Math.floor(Math.random()*characters.length);
        let randomCharactersTwo = Math.floor(Math.random()*characters.length)

        //Push to containers arrays
        passwordOne.push(characters[randomCharactersOne]);
        passwordTwo.push(characters[randomCharactersTwo]);

        passwordOneEl.textContent = passwordOne.join('')
        passwordTwoEl.textContent = passwordTwo.join('')
        
    }

}

generatePasswordButton.addEventListener('click', generatePasswords)