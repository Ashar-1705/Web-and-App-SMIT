// CHAPTER # 01 
// 1. Write a script to greet your website visitor using JS alert box?
// ----------------------------SOLUTION----------------------------
// alert("Greetings!")

// 2. Write a script to display following message on your web page?
// ----------------------------SOLUTION----------------------------
// alert("Error! Please enter a valid password.")

// 3. Write a script to display following message on your web page? (Hint : Use line break)
// ----------------------------SOLUTION----------------------------
// alert("Welcome to JS Land...  \nHappy Coding!")

// 4. Write a script to display following messages in sequence?
// ----------------------------SOLUTION----------------------------
// alert("Welcome to JS Land...")
// alert("Happy Coding!")

// 5. Generate the following message through browser’s developer console?
// ----------------------------SOLUTION----------------------------
// var message = "Hello... I can run JS through my web browser's console"
// console.log(message)

// CHAPTER # 02
// 1. Declare a variable called username?
// ----------------------------SOLUTION----------------------------
// var username = ""

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
// ----------------------------SOLUTION----------------------------
// var myName = "Muhammad Ashar"
// alert(myName)

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.
// ----------------------------SOLUTION----------------------------
// var message = "Hello World"
// alert(message)

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes?
// ----------------------------SOLUTION----------------------------
// var name = 'john doe'
// alert(name)
// var age = 15
// var space = ' '
// var years = "years old"
// var myAge = age + space + years
// alert(myAge)
// var message = "Certified Mobile Application development"
// alert(message)

// 5. Write a script to display the following alert using one JS variable?
// ----------------------------SOLUTION----------------------------
// var message = "PIZZA \nPIZZ \nPIZ \nPI \nP"
// alert(message)

// 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g.example@example.com).Show the blow mentioned message in an alert box.(Hint: use string concatenation)
// var email = "muhammadashar1705@gmail.com"
// var myEmail = "My email adress is" + " " + email
// alert(myEmail)

// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box?
// ----------------------------SOLUTION----------------------------
// var book = "A smarter way to learn JavaScript"
// var message = "I am trying to learn from the book"
// var tab = message + " " + book
// alert(tab)

// 8. Write a script to display this in browser through JS?
// ----------------------------SOLUTION----------------------------
// var message = "Yah! I can write HTML content through JavaScript."
// document.write(message)

// 9. Store following string in a variable and show in alert and browser through JS?
// ----------------------------SOLUTION----------------------------
// var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(design)

// CHAPTER # 03
// 1. Declare a variable called age & assign to it your age. Show your age in an alert box?
// ----------------------------SOLUTION----------------------------
// var age = "19"
// var message = "I am" + " " + age + " " + "years old"
// alert(message)

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You have visited this site N times”?
// ----------------------------SOLUTION----------------------------
// var visit = 0
// window.onload = visit++
// var siteVisit = 'you have visited this site' + ' ' + visit + ' ' + 'times'
// alert(siteVisit)

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser?
// ----------------------------SOLUTION----------------------------
// var year = 1990
// var message = 'MY birthday year is' + " " + ' ' + year 
// // var space = '\n'
// var type = '\nData type of my declared variable is' + 'n'
// document.write(message + type + typeof(year))

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

// CHATPER 04
// 1. Declare 3 variables in one statement?
// ----------------------------SOLUTION----------------------------
// var variable_1
// var variable_2
// var variable_3

// 2. Declare 5 legal & 5 illegal variable names?
// ----------------------------SOLUTION----------------------------
// LEGAL 
// var myVariable
// var _privateVariable
// var number123
// var $specialVariable
// var camelCaseVariable

// ILLEGAL

// var 123variable
// var special-variable
// var my variable
// var #hashVariable 
// var for 

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable
// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________
// ----------------------------SOLUTION----------------------------
// var heading = 'Rules for naming JS variables'
// var node = document.createElement("h1")
// node.innerHTML = heading
// document.body.appendChild(node)
// var para = 'Variable names can only contain numbers, $,letters and - \n .For example $my_1stVariable'
// document.write(para,"</br>")
// var para = 'Variables must begin with a letters,$ or -. For example $name, _name or name'
// document.write(para,"</br>")
// var para = 'Variable names are case sensitive'
// document.write(para,"</br>")
// var para = 'Variable names should not be JS keywords'
// document.write(para,"</br>")


// CHAPTER # 05

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser?
// ----------------------------SOLUTION----------------------------
// var num1 = +prompt("Enter first number:")
// var num2 = +prompt("Enter second number:")
// var msg = "sum of both numbers is"
// document.write(msg + " " + (num1 + num2))

// 2. Repeat task1 for subtraction, multiplication, division & modulus?
// ----------------------------SOLUTION----------------------------
// var br = "<br>"
// var num1 = +prompt("Enter first number:")
// var num2 = +prompt("Enter second number:")
// var msg = "The subtraction of both numbers is: "
// document.write(msg + (num1 - num2))
// var msg = "The multiplication of both numbers is: "
// document.write(br + msg + (num1 * num2))
// var msg = "The modulus of both numbers is: "
// document.write(br + msg + (num1 % num2))

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value 3”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.
// ----------------------------SOLUTION----------------------------
// var msg = "Value after variable declaration is: ??"
// document.write(msg)
// var msg = 5
// var eng = "<br> Initial value: "
// document.write(eng + msg)
// var msg = ++msg
// var eng = "<br> Value after increment is: "
// document.write(eng + msg)
// var msg = msg + 7
// var eng = "<br> Value after addition is: "
// document.write(eng + msg)
// var msg = --msg
// var eng = "<br> Value after decrement is: "
// document.write(eng + msg)
// var msg = msg % 3
// var eng = "<br> The remainder is: "
// document.write(eng + msg)

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie?
// ----------------------------SOLUTION----------------------------
// var num = 600
// var ticket = 5
// var total = num * ticket
// document.write("Total cost to buy" + " " + ticket + " " + "tickets to a movie is" + " " + total + "PKR")

// 5. Write a script to display multiplication table of any number in your browser?
// ----------------------------SOLUTION----------------------------
// var head = "Table of 4"
// document.write("4 x 1 = 4 <br>")
// document.write("4 x 2 = 8 <br>")
// document.write("4 x 3 = 12 <br>")
// document.write("4 x 4 = 16 <br>")
// document.write("4 x 5 = 20 <br>")
// document.write("4 x 6 = 24 <br>")
// document.write("4 x 7 = 28 <br>")
// document.write("4 x 8 = 32 <br>")
// document.write("4 x 9 = 36 <br>")
// document.write("4 x 10 = 40 <br>")

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// ----------------------------SOLUTION----------------------------
// var c = +prompt("Enter Celsius temperature: ")
// var fahrenheit = (c*9/5)+32
// document.write(c + "&deg;C" + " is" + " " + fahrenheit + "&deg;F")
// var f = +prompt("Enter Fahrenheit temperature: ")
// var celcius = (f - 32)*5/9
// var br = "<br>"
// document.write(br + f + "&deg;F" + " is" + " " + celcius + "&deg;C")

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variable?
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser?
// ----------------------------SOLUTION----------------------------
// var br = "<br>"
// var item1 = +prompt("Enter price of item 1: ")
// var eng1 = "Price of item 1 is "
// document.write(eng1 + item1)
// var qty = +prompt("Enter Quantity of item 1: ")
// var qty1 = "Qusf antity of item 1 is "
// document.write(br + qty1 + qty)
// var item2 = +prompt("Enter price of item 2: ")
// var eng2 = "Price of item 2 is "
// document.write(br + eng2 + item2)
// var quan = +prompt("Enter Quantity of item 2: ")
// var quan2 = "Quantity of item 2 is "
// document.write(br + quan2 + quan)
// var msg = +prompt("Enter shipping charges: ")
// document.write(br + "Shipping Charges " + msg)
// var total = (item1 * qty)+(item2 * quan)+msg
// var msg2 = "Total cost of your order is "
// document.write(br + msg2 + " " + total)

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
// ----------------------------SOLUTION----------------------------
// var br = "<br>"
// var obtained = +prompt("Enter Marks Obtained: ")
// var total = +prompt("Enter Total Marks: ")
// var perc = (obtained/total)*100
// var msg1 = "Total marks: "
// var msg2 = "Marks Obtained: "
// var msg3 = "Percentage: "
// document.write(msg1 + total)
// document.write(br + msg2 + obtained)
// document.write(br + msg3 + perc)

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
// ----------------------------SOLUTION----------------------------
// var us = 10
// var riyal = 25
// var total = (us*104.80)+(riyal*28)
// var msg = "Total Currency in PKR: "
// document.write(msg + total)

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
// ----------------------------SOLUTION----------------------------
// var num = 10
// var calc = ((num+5)*10)/2
// document.write(calc)

// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.
// ----------------------------SOLUTION----------------------------
// var br = "<br>"
// var current = +prompt("Enter Current Year: ")
// var birth = +prompt("Enter Birth Year: ")
// var calc = current - birth
// var msg1 = "Current Year: "
// var msg2 = "Birth Year: "
// var msg3 = "Your Age is : "
// document.write(msg1 + current)
// document.write(br + msg2 + birth)
// document.write(br + msg3 + calc)

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
// ----------------------------SOLUTION----------------------------
// var br = "<br>"
// var rad = +prompt("Enter radius of circle: ")
// var pi = 3.142
// var circumference = 2*pi*rad
// document.write("Radius of the circle is" + " " + rad)
// document.write(br + "The circumference is : " + circumference)
// var area = pi*(rad**2)
// document.write(br + "The area is : " + area)

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
// ----------------------------SOLUTION----------------------------
// var br = "<br>"
// var snack = prompt("Enter snack name: ")
// var min = +prompt("Enter current age: ")
// var max = +prompt("Enter max age: ")
// var age = max - min
// var esti = +prompt("Amount of Snacks per day: ")
// var calc = (age * 365) * esti

// var msg1 = "Favorite snack: "
// var msg2 = "Current Age: "
// var msg3 = "Estimated Maximum Age: "
// var msg4 = "Amount of Snacks per day: "  
// var msg5 = "You will need "
// var msg6 = "to last you until the old age of "

// document.write(msg1 + snack)
// document.write(br + msg2 + min)
// document.write(br + msg3 + max)
// document.write(br + msg4 + esti)
// document.write(br + msg5 + calc + " " + snack + " " + msg6 + " " + max)

// CHAPTER # 06-09
// QUESTION 01
// ----------------------------SOLUTION----------------------------
// var a = +prompt('Please enter a number' , 10)
// var heading = document.createElement('h1')
// heading.innerHTML = 'Result'
// document.body.appendChild(heading)
// document.write(`The value of a is: ${a}</br></br> <hr> </br></br>`)
// document.write(`The value of a is: ${a}</br></br>`)
// var res = ++a
// document.write(`Now the value of a is: ${a}</br></br>`)
// document.write(`The value of a is: ${a}</br></br>`)
// var res = a++
// document.write(`Now the value of a is: ${a}</br></br>`)
// document.write(`The value of a is: ${a}</br></br>`)
// var res = --a
// document.write(`Now the value of a is: ${a}</br></br>`)
// document.write(`The value of a is: ${a}</br></br>`)
// var res = a--
// document.write(`Now the value of a is: ${a}</br></br>`)

// QUESTION 02
// ----------------------------SOLUTION----------------------------
// var a = 2 , b=1
// var res = --a - --b + ++b + b--
// document.write(`a is = ${a} </br> b is = ${b} </br> Result is = ${res}</br>`)
// var res = --a
// document.write(`Now a is = ${a} </br>Now b is = ${b} </br> Result is = ${res}</br>`)
// var res = --a - --b
// document.write(`Now a is = ${a} </br>Now b is = ${b} </br> Result is = ${res}</br>`)
// var res = --a - --b + ++b
// document.write(`Now a is = ${a} </br>Now b is = ${b} </br> Result is = ${res}</br>`)
// var res = --a - --b + ++b + b--
// document.write(`Now a is = ${a} </br>Now b is = ${b} </br> Result is = ${res}</br>`)

// QUESTION 03
// ----------------------------SOLUTION----------------------------
// var table = document.createElement('table')
// var tbody = document.createElement('tbody')
// var marks = 150
// var tm = marks*3
// var sub1 = +prompt('Enter Your English Marks', 0)
// var sub2 = +prompt('Enter Your Urdu Marks', 0)
// var sub3 = +prompt('Enter Your Math Marks', 0)
// var per1 = (sub1/150)*100
// var per2 = (sub2/150)*100
// var per3 = (sub3/150)*100
// var om = sub1 + sub2 + sub3
// var percen = (om/300)*100
// var data = [
//     ['Subject' , 'Total Marks' , 'Obtain Marks' , 'Percentage'],
//     ['English' , marks , sub1 , per1],
//     ['Urdu' , marks , sub2 , per2],
//     ['Math' , marks , sub3 , per3],
//     ['' , tm , om,percen]
// ] 
// for(i = 0 ; i<data.length;i++){
//     var tr = document.createElement('tr')
//     for(j = 0 ; j<data[i].length;j++){
//         var th = document.createElement('th')
//             var textNode = document.createTextNode(data[i][j])    
//             th.appendChild(textNode)
//             tr.appendChild(th)
//     }
//     tbody.appendChild(tr)
// }
// table.appendChild(tbody)
// table.style.border = '1px solid black'
// document.body.appendChild(table)

// CHAPTER 10-12
// C7QUESTION01
// ----------------------------SOLUTION----------------------------
// var city = prompt('Enter your city name' , 'Karachi')
// document.write(`Welcome! to ${city}`)

// QUESTION02
// ----------------------------SOLUTION----------------------------
// var gender = prompt('Enter gender male or female')
// if(gender === 'male' || gender === 'Male' || gender === 'MALE' || gender==='m' || gender==='F'){
//     alert(`Good Morning! Sir`)
// } else{
//     alert(`Good Morning! Mam`)
// } 
// QUESTION 03
// ----------------------------SOLUTION----------------------------
// var color = prompt('Enter color symbol R G Y')
// if(color === 'R'){
//     alert("Stop!")
// }else if(color==='G'){
//     alert("Move NOw")
// }
// else{
//     alert("Ready to move")
// }
// QUESTION 04
// ----------------------------SOLUTION----------------------------
// var fuel = +prompt('How many litres fuel you have')
// if(fuel <=0.25){
//     alert('Please refill your fuel')
// }else{
//     alert{'You have enough fuel'}
// }
// Question 05
// ----------------------------SOLUTION----------------------------
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// } 
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// } if (false) {
//     alert("False");
// }

// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals"); 
// } 
// if (true){ 
// alert("True"); 
// } 
// if (false){ 
// alert("False"); 
// }
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }

// QUESTION 06
// ----------------------------SOLUTION----------------------------
// var table = document.createElement('table')
// var tbody = document.createElement('tbody')
// var marks = 150
// var tm = marks*3
// var sub1 = +prompt('Enter Your English Marks', 0)
// var sub2 = +prompt('Enter Your Urdu Marks', 0)
// var sub3 = +prompt('Enter Your Math Marks', 0)
// var per1 = (sub1/150)*100
// var per2 = (sub2/150)*100
// var per3 = (sub3/150)*100
// var om = sub1 + sub2 + sub3
// var percen = (om/300)*100
// var data = [
//     ['Subject' , 'Total Marks' , 'Obtain Marks' , 'Percentage'],
//     ['English' , marks , sub1 , per1],
//     ['Urdu' , marks , sub2 , per2],
//     ['Math' , marks , sub3 , per3],
//     ['' , tm , om,percen]
// ] 
// for(i = 0 ; i<data.length;i++){
//     var tr = document.createElement('tr')
//     for(j = 0 ; j<data[i].length;j++){
//         var th = document.createElement('th')
//             var textNode = document.createTextNode(data[i][j])    
//             th.appendChild(textNode)
//             tr.appendChild(th)
//     }
//     tbody.appendChild(tr)
// }
// table.appendChild(tbody)
// table.style.border = '1px solid black'
// document.body.appendChild(table)
// if(percen >= 80){
//     document.write(`Grade A-one </br> Excellent`)
// } else if(percen >= 70){
//     document.write(`Grade A </br> Good`)
// } else if(percen >= 60){
//     document.write(`Grade B </br> You need to improve`)
// }
// else{
//     document.write(`Grade fail </br> Sorry!`)
// }

// QUESTION 07
// ----------------------------SOLUTION----------------------------
// var num = 8
// var userGuess = +prompt("Guess the secret number (between 1 and 10)");
// var right = num - userGuess
// if (userGuess === num) {
//   alert("Bingo! Correct answer.");
// } else if (right === 1 || right == -1) {
//   alert("Close enough to the correct answer.");
// } else {
//   alert("Sorry, try again.");
// }
// QUESTION 08
// ----------------------------SOLUTION----------------------------
// var num = +prompt('Enter number to find that number is divisible by 3')
// var res = num % 3
// console.log(res)
// if(res === 0){
//     alert('Number is divisible by 3')
// } else{
//     alert('Not divisible by 3')
// }
// QUESTION 09
// ----------------------------SOLUTION----------------------------
// var num = +prompt('Enter number to check that Number is EVEN or ODD')
// var res = num % 2
// console.log(res)
// if(res === 0){
//     alert('Even Number')
// }else{
//     alert('Odd Number')
// }

// QUESTION 10
// ----------------------------SOLUTION----------------------------
// var temp = +prompt('Enter temperature outside')
// if(temp > 40){
//     alert("Its hot outside")
// }else if(temp > 30){
//     alert("The weather todays is normal")
// }else if(temp > 20){
//     alert("Todays weather is cool")
// }else if(temp > 10){
//     alert("OMG! todays weather is so cool")
// }

// QUESTION 11
// ----------------------------SOLUTION----------------------------
// var num1 = +prompt('enter first number' , 9)
// var op = prompt('operatiomn apply (+ < _ < ? < * < %)', '+')
// var num2 = +prompt('enter second number',9)
// if(op === '+'){
//     alert(num1 + num2)
// } else if(op === '-'){
//     alert(num1 - num2)
// } else if(op === '/'){
//     alert(num1 / num2)
// } else if(op === '*'){
//     alert(num1 * num2)
// } else if(op === '%'){
//     alert(num1 % num2)
// }

                    // ASSIGNMENT NO : 03 (JAVASCRIPT)// CHAPTER 14 - 16
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
// array.push('keyboard');
// array.push('mouse');
// array.push('printer');
// array.push('monitor');

// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);

// Question no: 14
// ------------------------Solution------------------------
// let array = [];
// array.unshift('keyboard');
// array.unshift('mouse');
// array.unshift('printer');
// array.unshift('monitor');

// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);

// Question no: 15
// ------------------------Solution------------------------
