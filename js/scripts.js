function masterNumberConvert(inputNumber) {
    let outputArray =[]
    for (let index = 0; index <= inputNumber; index++) {
        const indexString = index.toString();
        if(indexString.includes('3')) {
            outputArray.push('Welcome to the neighborhood.');
        }else if (indexString.includes('2')) {
            outputArray.push('Boop.');
        }else if (indexString.includes('1')) {
            outputArray.push('Beep.');
        }else {
            outputArray.push(index);
        }      
    }
    return outputArray;
};

$(document).ready(function () {
    $("form#numbers").submit(function(event){
    const userInputNumber = $('input#htmlNumber').val();
    const convertedNumber = masterNumberConvert(userInputNumber);
    $("#returnOutput").text(convertedNumber.join(" "));
    event.preventDefault();
  });
});