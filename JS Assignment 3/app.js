// CHAPTER 14 - 16
// Question no: 01
// ------------------------Solution------------------------
// let StudentNames = [];

// Question no: 02
// ------------------------Solution------------------------
// let StudentNames = {};

// Question no: 03
// ------------------------Solution------------------------
// let StringsArray = ["Ashar" , "Waqar" , "Saad"];

// Question no: 04
// ------------------------Solution------------------------
// let NumbersArray = [230 , 123 , 43 , 100 , 91];

// Question no: 05
// ------------------------Solution------------------------
// let BooleanArray = [true , false , false , true , false];

// Question no: 06
// ------------------------Solution------------------------
// let mixArray = ["Ashar" , true , 432 , "Shiza"]

// Question no: 07
// ------------------------Solution------------------------
// let qualifications = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phil" , "PhD"];
// let br = "<br>"
// console.log("Qualifications")
// console.log("1)" + " " + qualifications[0])
// console.log("2)" + " " + qualifications[1])
// console.log("3)" + " " + qualifications[2])
// console.log("4)" + " " + qualifications[3])
// console.log("5)" + " " + qualifications[4])
// console.log("6)" + " " + qualifications[5])
// console.log("7)" + " " + qualifications[6])
// console.log("8)" + " " + qualifications[7])

// Question no: 08
// ------------------------Solution------------------------
// let studentNames = ["Michael" , "John" , "Tony"];
// let studentScores = [320 , 230 , 480];

// // Calculate the percentage for each student
// for (let i = 0; i < studentNames.length; i++) {
//   let percentage = (studentScores[i] / 500) * 100;
//   console.log(`Score of ${studentNames[i]} is ${studentScores[i]}. Percentage: ${percentage}%`);
// }

// Question no: 09
// ------------------------Solution------------------------
// let color = ["red" , "blue" , "black"];
// let user = prompt("enter any color: ")

// part a
// adds color at the start of the array
// color.unshift(user)

// part b
// adds color at the end of the array
// color.push(user)

// console.log(color)

// part c
// let colors = prompt("Enter two colors to add to the beginning of the array: ").split(", ");
// let colorsArray = ["Red", "Green", "Blue"];
// colorsArray.unshift(...colors);
// console.log(colorsArray);

// part d
// let colors = ['red' , 'blue' , 'green' , 'pink'];
// colors.splice(0,2)
// console.log(colors)

// part e
// let colors = ['red' , 'blue' , 'green' , 'pink'];
// colors.pop()
// console.log(colors)

// part f
// let myArray = ['red', 'blue', 'greeen', 'white', 'black'];
// let newElement = prompt("Enter a new element:");
// let insertIndex = +prompt("Enter the index where you want to insert the new element:");
// myArray.splice(insertIndex, 0, newElement);
// console.log(myArray);

// ---REDO---
// part g
// let myArray = ['red', 'blue', 'greeen', 'white', 'black'];
// let newElement = +prompt("Enter the index where you want to delete the elements:");
// let insertIndex = +prompt("Enter how many elements do you want to delete:");
// myArray.splice(insertIndex, newElement);
// console.log(myArray);

// Question no: 11
// ------------------------Solution------------------------
// let cities = ['Karachi' , 'Lahore' , 'Islamabad' , 'Quetta' , 'Peshawar'];
// let selectedCities = cities.splice(2,2);
// console.log(selectedCities)

// Question no: 12
// ------------------------Solution------------------------
// let array = ['This ' , 'is ' , 'my ' , 'cat'];
// let string = array.join('')
// console.log(string)

// Question no: 13
// ------------------------Solution------------------------
// let array = [];
// array.push('bat');
// array.push('ball');
// array.push('wicket');
// array.push('football');

// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);

