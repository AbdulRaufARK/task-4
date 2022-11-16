alert("Error! Please Enter a Valid Password")
alert("Welcome to JS land Happy Cooding \n Happy Coding!" )
alert("Hello.. I can run JS through my web Brouser Console")

CHAPTER 2 //

var username ;
var myName = "Abdul Rauf";

var massage ;
massage = "Hellow World";
alert(massage);

var studentName = "Abdul Rauf";
var studentRollNumber = "247";
var studentGender = "Male";

alert(studentName);
alert(studentRollNumber);
alert(studentGender);

alert("PIZZA \n PIZZ \n PIZ \n PI \n P");

var Email = "a.rauff1@gmail.com"
alert( "My Email Address is " + Email);

var book = "A smarter way to learn JavaScript";
alert(book);

document.write("Yah! I can write HTML Through Javascript");

var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(design);



CHAPTER 3

var age = 24;
alert("I am " + age +" year Old");

var N = 14;
alert("You Visted This Website " + N + " Times");

var birthYear = 1997;
document.write("My Birth Year is " + birthYear );  
document.write("<br>");
document.write("Data type of my decleare Vareable in number");

var name = "Abdul Rauf";
var product = "Shirt";
var tittle = "Bonanza";
alert(name + " Ordered 5 " +product + " on " + tittle );


            chAPTER 4    


var abc , bcs ,csf;
var Value1 = "sensitive";
var value2 = "Keyword";
var value3 ="$";
var value4 = "$name";
var value5 = "_name";
var value6 = "_";
var value7 = "$my_1stVariable";

document.write("Rules for naming JS variables");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("Variable name can only conytains Numbers," +value3 + " And " +value6+ " For Example : " + value7);
document.write("<br>");
document.write("Variables must begin with a Letter" +value3+ " or " +value6+ " For example $name, _name or name");
document.write("<br>");
document.write("Variable names should not be JS" + value2);


            CHAPTER 5 

var a = 3;
var b = 5;
var c = a + b;
var d = a * b;
var e = a / b;

document.write("Sum of " +a + " And " +b+ " is " + c);
document.write("<br>");
document.write("Mul of " +a + " And " +b+ " is " + d);
document.write("<br>");
document.write("Division of " +a + " And " +b+ " is " + e);

var quantity = 5;
var price = 600;
var total = quantity * price;

document.write("Total cost to buy "+quantity +" Tickets to a movie is " + total );

var celsius = 25;
var fornhiet = 70;

var C =(fornhiet - 32) * 5/9;
var f =(C * 9/5) +32;

document.write ("25C is " + f + "F");
document.write("<br>");
document.write ("70F is " + C + "c");

var item1 = 600;
var item2 = 650;
var item1Quentity = 2;
var item2Quentity = 7;
var shippingCharges = 120;
var total = ( item1 * item1Quentity) + (item2Quentity * item2) + shippingCharges;

document.write("Shopping Cart");
document.write("<br>");


document.write("Price of an Item 1 is " + item1);
document.write("<br>");
document.write("Price of an Item 2 is " + item2);
document.write("<br>");
document.write("Ordered Quantity of an Item 1 is " + item1Quentity);
document.write("<br>");
document.write("Ordered Quantity of an Item 2 is " + item2Quentity);
document.write("<br>");
document.write("Charges " + shippingCharges);
document.write("<br>");
document.write("Total Cost of your order is " + total )

var total = 800;
var markObtain = 670;

var percentage = ( markObtain/ total) * 100;

document.write(percentage);

var USD = 240;
var SR = 60;

var totalCurrency = (10* USD) + (25 * SR);
document.write("Total Currency in PKR is " + totalCurrency);


        Chapter 6 - 9

        
var num = prompt("Please Enter a number");
// var numAdd = ++num;
// var numSub = --num;

document.write("Result");
document.write("<br>");
document.write("The Value or A is " + num);
document.write("<br>")
document.write("The Value of ++A is " + ++num);
document.write("<br>")
document.write("The Value of --A is " + --num);
document.write("<br>");
document.write("The Value or A is " + num);
document.write("<br>")
document.write("The Value of ++A is " + (++num));
document.write("<br>")
document.write("The Value of --A is " + (--num));
document.write("<br>");
document.write("The Value or A is " + num);
document.write("<br>")
document.write("The Value of ++A is " + (++num));
document.write("<br>")
document.write("The Value of --A is " + (--num));


var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("a is " +a);
document.write("<br>")
document.write("b is " +b);
document.write("<br>")
document.write("Result is " +result);

var name = prompt("Enter your Name");
document.write("Hello " + name+" Wish you a Good day!" );

var num = prompt("Enter Number");



                CHAPTER 9- 12


var city = prompt("Enter City ");
if (city=="karachi"){
        alert("Welcome to City of light");
}

var gender = prompt("Enter Your Gender");

if (gender == "male"){
        alert ("Good morning Sir");
}
else if(gender == "female"){
        alert("Good Morning Ma'am");
}
else{
        alert("COnfirm your Gender please");
}

var signalCol = prompt("Enter color of Signal");

if ( signalCol == "red"){
        alert("Must Stop")
}
else if(signalCol == "yellow"){
        alert ("Ready to move")
}
else if (signalCol == "green"){
        alert ("Move Now")
}

var t = prompt("Enput Temprature")

if(t >= 40){
        alert("Its to Hot Outside")
}
else if (t >= 30){
        alert("The Weather Today is Normal!!")
}
else if (t >= 20 ){
        alert("Today's Weather is Cool")
}




                        CHAPTER 11 -12 


var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else
{greeting = "Good evening";
}
document.write (greeting);

var time1 = prompt("Enter Time")

if(time1 == 0000 && time1 <= 1200 ){
        alert("Good Morning")
}
else if(time1 >= 1200 && time1 < 1700){
        alert ("Good Afternoon")
}
else if(time1 >= 1700 && time1 < 2100){
        alert ("Good Evening")
}
else if(time1 >= 2100 && time1 < 2359){
        alert ("Good Afternoon")
}


