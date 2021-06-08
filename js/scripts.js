function masterNumberConvert(inputNumber) {
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

$(document).ready(function () {
    $("form#numbers").submit(function(event){
    const userInputNumber = $('input#htmlNumber').val();
    console.log(userInputNumber);
    const convertedNumber = masterNumberConvert(userInputNumber);
    $("#returnOutput").text(convertedNumber.join(" "));
    event.preventDefault();
  });
});