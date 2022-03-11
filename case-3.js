//case-3
function checkTypeNumber(){
    return "Error : Ini bukan check email" ;
}

function checkEmail(email){
const regex = /\S+@\S+\.\S+/;
const must = /^[a-z0-9_-]{3,16}$/;
    if (!email){
        return "Error : Tidak ada input di parameter";   
    } else if (regex.test(email) === true){
        return "VALID";
    } else if (regex.test(email) === false) {
        if (must.test(email) === true){
            return "Error : Format email salah";
        } else{
            return "INVALID";
        } 
    }  

}

console.log(checkEmail('apranata@binar.co.id'));
console.log(checkEmail('apranata@binar.com'));
console.log(checkEmail('apranata@binar'));
console.log(checkEmail('apranata'));
console.log(checkTypeNumber(checkEmail(3322)));
console.log(checkEmail());

