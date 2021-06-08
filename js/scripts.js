// //area a
// let inputNumber = 55

// function masterConvert() {
// let userCount = inputNumber;
// let openArray =[]
//     for (let index = 0; index <= userCount; index++) {
//         const indexString = index.toString();
//         if(indexString.includes('3')) {
//             openArray.push('Welcome to the neighborhood.');
//         }else if (indexString.includes('2')) {
//             openArray.push('Boop.');
//         }else if (indexString.includes('1')) {
//             openArray.push('Beep.');
//         }else {
//             openArray.push(index);
//         }      
//     }
// console.log(openArray);
// }

function masterConvert(inputNumber) {
        let openArray =[]
        for (let index = 0; index <= inputNumber; index++) {
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
        return openArray;
    };
// masterConvert();

$(document).ready(function () {
    
    $("form#numbers").submit(function(event){
    const userInputNumber = $('input#htmlNumber').val();
    console.log(userInputNumber);
    
    const convertedNumber = masterConvert(userInputNumber);
    $("#returnOutput").text(convertedNumber.join(" "));
    // $("#returnOutput").prepend(' ' + openArray + ' ');
    
    event.preventDefault();
  });
});