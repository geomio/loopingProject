let userNumber = 12;

let numbersToStrings = function(inputNumbers) {
let numberMarker = [1, 2, 3];
let stringArray = ['Beep!', 'Boop!', 'Wont you be my neighbor?'];

let empty = '';
for (let index = 0; index < numberMarker.length; index++) {
  while (numberMarker[index] <= inputNumbers) {
    empty += stringArray[index];
    inputNumbers -= numberMarker[index];
  }
}

return empty;
  }; 
  console.log("if only this then broke", numbersToStrings(3, 4, 5, 1, 2));

 