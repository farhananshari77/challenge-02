function getSplitName(personName){
    
    if (!personName){
        return "Error : ini bukan string";
    } else if (personName.split(" ").length == 1) {
        const split = personName.split(" ");
        const join = [{firstName : split[0]}, {middleName : null}, {lastName : null}];
        return join;
    } else if (personName.split(" ").length == 2) {
        const split = personName.split(" ");
        const join = [{firstName : split[0]}, {middleName : null}, {lastName : split[1]}];
        return join;
    } else if (personName.split(" ").length <= 3) {
        const split = personName.split(" ");
        const join = [{firstName : split[0]}, {middleName : split[1]}, {lastName : split[2]}];
        return join;
    } else {
        return "Error : This function is only for 3 characters name";
    }
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));