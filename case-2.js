//case-2
const checkTypeNumber = (givenNumber) => {
    if (!givenNumber) {
        return "Error : Bro where is the parameter?";
    } else if (givenNumber !== Number(givenNumber)){
        return "Error : Invalid data type";
    } else {
        if (givenNumber%2 === 0) {
            return "GENAP";
        } else {
            return "GANJIL";
        }
        
    } 
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
