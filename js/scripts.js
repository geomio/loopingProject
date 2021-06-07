//area a
let inputNumber = 55

function masterConvert() {
let userCount = inputNumber;
let openArray =[]
    for (let index = 0; index <= userCount; index++) {
        const indexString = index.toString();
        if(indexString.includes('3')) {
            openArray.push('Welcome to the neighborhood.');
        }else if (indexString.includes('2')) {
            openArray.push('Boop.');
        }else if (indexString.includes('1')) {
            openArray.push('Beep.');
        }else {
            openArray.push(index);
        }      
    }
console.log(openArray);
}

masterConvert();

