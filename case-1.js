//case-1
function changeWord (selectedText, changedText, text){
    return text.replace(selectedText,changedText)
}

const kalimat1 = 'Andini sangat mencintaimu selamanya';
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';

console.log(changeWord('mencintai','membenci',kalimat1));

console.log(changeWord('bromo','semeru',kalimat2));
