function getAngkaTerbesarKedua(personName){
    if (personName == Number(personName)) {
        return "Error : ini bukan number array";
    } else if (!personName) {
        return "Error : Karena tidak ada parameter";
    } else {
        personName.sort((k, b) => { return b-k});
        return personName[1];
    }
}

const dataAngka = [9,4,7,7,4,3,2,2,8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());