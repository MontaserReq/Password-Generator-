//Select Elemet
const passArea = document.querySelector('input')
const copyIcon = document.getElementsByClassName('fa-bolt');
//select length of Password
const length = 12;

//Letters And sympols , numbers that Inculds in password
const UpperCaseLetter = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
const LowerCaseLetter = "abcdefghijklmnopqrstuvwxyz";
const spicalCar = "!@#$%^&*_-~|?/";
const numbers = "0123456789";
//All char in one variable
let allChar = UpperCaseLetter + LowerCaseLetter + spicalCar + numbers;
//function generate password
function createPass() {
    let pass = "";
    pass += UpperCaseLetter[Math.floor(Math.random()*UpperCaseLetter.length)];
    pass += LowerCaseLetter[Math.floor(Math.random()*LowerCaseLetter.length)];
    pass += spicalCar[Math.floor(Math.random()*spicalCar.length)];
    pass += numbers[Math.floor(Math.random()*numbers.length)];

    while (length > pass.length) {
        pass += allChar[Math.floor(Math.random() * allChar.length)]
    }
    passArea.value=pass;
}
//function copy password
function copyPass(){
    passArea.select();
    document.execCommand('copy');
}