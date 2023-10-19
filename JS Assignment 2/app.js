// CHAPTER # 05

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser?
// ----------------------------SOLUTION----------------------------
// var num1 = +prompt("Enter first number:")
// var num2 = +prompt("Enter second number:")
// var msg = "sum of both numbers is"
// document.write(msg + " " + (num1 + num2))

// 2. Repeat task1 for subtraction, multiplication, division & modulus?
// ----------------------------SOLUTION----------------------------
// var num1 = +prompt("Enter first number:")
// var num2 = +prompt("Enter second number:")
// var msg = "The subtraction of both numbers is: "
// document.write(msg + (num1 - num2))
// var msg = "The multiplication of both numbers is: "
// document.write(msg + (num1 * num2))
// var msg = "The modulus of both numbers is: "
// document.write(msg + (num1 % num2))

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
var br = "<br>"
var current = +prompt("Enter Current Year: ")
var birth = +prompt("Enter Birth Year: ")
var calc = current - birth
var msg1 = "Current Year: "
var msg2 = "Birth Year: "
var msg3 = "Your Age is : "
document.write(msg1 + current)
document.write(br + msg2 + birth)
document.write(br + msg3 + calc)