var numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var evenArray = [];
var oddArray = [];

for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
        evenArray.push(numberArray[i]);
    } else {
        oddArray.push(numberArray[i]);
    }
}

document.write("<h1>Even Numbers:</h1>");
document.write("<p>" + evenArray.join(", ") + "</p>");

document.write("<h1>Odd Numbers:</h1>");
document.write("<p>" + oddArray.join(", ") + "</p>");