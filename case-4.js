//case-4
function isValidPassword (email){
    var upperCase = /[A-Z]/;
    var lowerCase = /[a-z]/;
    var numbers = /[0-9]/;

    if (!email){
        return "Error : input parameter salah";
    } else if (email.length >= 8 && upperCase.test(email) === true && lowerCase.test(email) === true && numbers.test(email) === true) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isValidPassword('Meong2021'));
console.log(isValidPassword('meong2021'));
console.log(isValidPassword('@eong'));
console.log(isValidPassword('Meong2'));
console.log(isValidPassword(0));
console.log(isValidPassword());