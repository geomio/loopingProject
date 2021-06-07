//area a
let userCount = 66;
let openArray =[]
for (let index = 0; index <= userCount; index++) {
    // userCount[index] = index;
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

//Area a will count up to user input converts to a string and push it to open array
//    