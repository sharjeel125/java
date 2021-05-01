//  Chapter #1 

// alert( "hello World") 
// alert("Error! Please enter a valid password.") 
// alert("Welcome to JS Land... \n Happy Coding!") 
// alert("Welcome to JS Land...") 
// alert("Happy Coidng!") 
// console.log("Hello... I can run JS through my web browser's console")

// Chapter #2

// var username="";
// var myname="Sharjeel"
// var title="Hello World"
// alert(title)
// alert("Sharjeel")
// alert("18 yrs old")
// alert("Certified Mobile Developer")
// alert("PIZZA\nPIZZ\nPIZ\nPI\nP")
// var email="My email address is example@example.com"
// alert(email)
// var message="i am trying to learn from the book A smarter \nway  to learn javascript"
// alert(message)
// document.write('Yah! I can write HTML content through javascript')
// alert(' “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” ')

// Chapter #3
 
// var age=19
// alert(age)
// var message="You have visited this time 14 times"
// alert(message)
// var birthYear="2000"  
// document.write("My birthYear is"+" " +birthYear)
// var VisitorName='sharjeel' ; 
// var Producttitle="T-shirts" ;
// var Quantity=5;
// document.write( VisitorName  + " " + 'ordered' + " " + Quantity + " " + Producttitle)

// Capter no 4 "VARIABLE NAMES: LEGAL & ILLEGAL"


// Q1

// var $firstNo = 2;
// var _secondNo = 4;
// var sum = $firstNo + _secondNo;
// alert(sum);



// Q2
// Legal Variable names

// var $abc;
// var _xyz;
// var myName;
// var User_name;
// var user1;


//illegal Variable names

// var 1abc;
// var #user;
// var *student;
// var user name;
// var 1234;




// Q3

// var heading = " <h2> Rules for Naming JS Variable </h2>";
// var rule1 = "Variable names can only contain letters , numbers , $ and _ (underscore). For example my_Name , $user";
// var rule2 = "Variables must begin with a letter , _  or $ . For example $name, _name or name";
// var rule3 = "Variable names are case sensitive";
// var rule4 = "Variable names should not be JS keywords";

// document.write( heading + "<br>" + rule1 + "<br>" + rule2 + "<br>" + rule3 + "<br>" + rule4 );





// Chapter no 5 "MATH EXPRESSIONS"



// Q1

//For Addition of two number

// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number")
// var c = a+b;
// document.write("Sum of " + a +" and " + b + " is " + c);



// Q2

// For Subtraction of two numbers

// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number")
// var c = a-b;
// document.write("Difference of " + a +" and " + b + " is " + c);



// For Multiplication of two numbers

// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number")
// var c = a*b;
// document.write("Product of " + a +" and " + b + " is " + c);



// For Division of two numbers

// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number")
// var c = a/b;
// document.write("Ratio of " + a +" and " + b + " is " + c);



// For Modulus of two numbers

// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number")
// var c = a%b;
// document.write("Modulus of " + a +" and " + b + " is " + c);




// Q3


// var number1;
// document.write("Value after variable decleration is : " + number1);
// number1 = 5;
// document.write("<br>")
// document.write("Initial Value : " + number1);
// number1++;
// document.write("<br>")
// document.write("Value after increment is " + number1);
// var nums = number1 + 7;
// document.write("<br>");
// document.write("Value after addition is " + nums);
// nums--;
// document.write("<br>")
// document.write("Value after decrement is " + nums)
// var divideNo = nums/3;
// document.write("<br>");
// document.write("Value after division with 3 is " + divideNo);
// document.write("<br>")
// document.write("The remainder is 0 ")




// Q4

// var costOfOne = 600;
// alert("Cost of 1 ticket is " + costOfOne + " PKR ");
// var quantity = +prompt("How many tickets do you want?");
// var totalCost = costOfOne*quantity;
// document.write("The total cost to buy " + quantity + " tickets to a movie is " + totalCost + " PKR ");




// Q5

// var a = +prompt("Enter number for printing table");
// for(i=1;i<=10;i++){
//     document.write(a+" x "+i+" = "+a*i+"<br>");
// }




// Q6


// Converts Celcius into Farenheit

// var C = +prompt("Enter temperature in Celcius");
// var Farenheit = (C*9/5)*32;
// document.write(C+" C is equal to "+Farenheit+" F ");



// Converts Farenheit into Celcius

// var F = +prompt("Enter temperature in Farenheit");
// var Celcius = (F-32)*5/9;
// document.write(F+" F is equal to "+Celcius+" F ");




// Q7

// var shirtPrice = 700;
// alert("Price of Shirt is "+shirtPrice);
// var shirtQuantitity = +prompt("How many Shirts you want to purchase");

// var jeanssPrice = 800;
// alert("Price of jeans is "+jeanssPrice);
// var jeansQuantity = +prompt("How many Jeans you want to purchase");

// var totalShirtPrice = shirtPrice*shirtQuantitity;
// var totalJeansPrice = jeanssPrice*jeansQuantity;
// var shippingCharges = 100;
// var totalBill = totalShirtPrice + totalJeansPrice + shippingCharges;
// document.write("Price of Shirt is "+shirtPrice+"<br>");
// document.write("Quantity of Shirt is "+shirtQuantitity+"<br>");
// document.write("Price of jeans is "+jeanssPrice+"<br>");
// document.write("Quantity of Jeans is "+jeansQuantity+"<br>");
// document.write("Shipping Charges "+shippingCharges+"<br>");
// document.write("Total cost of your order is "+totalBill);




// Q8

// var marksObtained = +prompt("Enter marks obtained");
// var totalMarks = +prompt("Enter total marks");
// var percentage = marksObtained/totalMarks*100;
// document.write("<h1>Marks Sheet</h1>")
// document.write("Total marks : "+totalMarks+"<br>");
// document.write("Marks Obtained : "+marksObtained+"<br>");
// document.write("Percentage : "+percentage+" % ");




// Q9

// var dollar = 157.01;
// var riyal = 41.86;
// var rupees = (10*dollar)+(25*riyal);
// document.write("<h1> Currency in PKR</h1>"+"<br>");
// document.write("Total currency in PKR : "+rupees);





// Q10

// var a = 5;
// var b = a+5*10/2;
// document.write("B = "+b);




// Q11

// var birthYear = +prompt("Enter Your birth year");
// var currentYear = +prompt("Enter current year");
// var age = currentYear - birthYear;
// document.write(" Current Year : "+currentYear+"<br>");
// document.write("Birth Year : "+birthYear+"<br>");
// document.write("Your Age :"+age);




// Q12

// var r = +prompt("Enter radius of circle");
// var pie = 3.142;
// var circumference = 2*pie*r;
// var area = pie*(r*r);
// document.write("<h1> The Geometrizer </h1>"+"<br>");
// document.write("The Circumference is :"+circumference+"<br>");
// document.write("The Area is : "+area);




// Q13

// var snackName = prompt("What is your favourite snack ? ");
// var currentAge = +prompt("What is your current age ?")
// var maxAge = 65;
// var snacksPerDay = +prompt("How many snacks you eat per day ?")
// var totalSnacks = snacksPerDay*(65-currentAge)*365;
// document.write("<h1> The Life Time Supply Calculator</h1>"+"<br>");
// document.write("Favourite Snack : "+snackName+"<br>");
// document.write("Current Age : "+currentAge+"<br>");
// document.write(" Estimated Maximum Age : "+maxAge+"<br>");
// document.write("Amount of snacks per day : "+snacksPerDay+"<br>");
// document.write(" You will need "+totalSnacks+" snacks to last you until the ripe old age of"+maxAge);


// MATH EXPRESSIONS
// ASSIGHNMENT NO 6
// Chp 6-9




// Q1


// var a = 10;
// document.write("<h2> Result : </h2>"+"<br>");
// document.write("The value of a is : "+ a +"<br>");
// document.write("........................................"+"<br>"+"<br>")

// document.write("The value of ++a is : "+ ++a +"<br>");
// document.write("Now the value of a is : "+a+"<br>"+"<br>");

// document.write("The value of a++ is :"+ a++ +"<br>");
// document.write("Now the value of a is : "+ a +"<br>"+"<br>");

// document.write("The value of --a is : "+ --a +"<br>");
// document.write("Now the value of a is : "+ a +"<br>"+"<br>");

// document.write("The value of a-- is : "+ a-- +"<br>");
// document.write("Now the value of a is : "+ a);




// Q2

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is : "+ a +"<br>");
// document.write("b is : "+ b +"<br>");
// document.write("result is : "+ result);



//  Q3


// var yourName = prompt("What is your name ? ");
// alert("Hello " + yourName);




// Q5


// var a = +prompt("Enter the number you for table : ");
// for (i = 1; i <= 10; i++) {

//     if (a == "") {

//         document.write(5 + " x " + i + " = " + 5 * i + "<br>");
//     }
//     else {
//         document.write(a + " x " + i + " = " + a * i + "<br>");
//     }
// }




// Q6


// var subject1 = prompt("Enter first Subject name");
// document.write( subject1  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + tmForEach  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + sub1marks  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+sub1marks+"%"  +"<br>" +"<br>");
// var subject2 = prompt("Enter second Subject name");
// document.write( subject2  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + tmForEach  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + sub2marks   + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+sub2marks+"%" + "<br>"+"<br>");
// var subject3 = prompt("Enter third Subject name");
// document.write( subject3  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + tmForEach  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + sub3marks   + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+sub3marks+"%" + "<br>"+"<br>");
// var tmForEach = 100;
// var sub1marks = +prompt("Enter marks of first Subject");
// var sub2marks = +prompt("Enter marks of second Subject");
// var sub3marks = +prompt("Enter marks of third Subject");
// var totalMarks = tmForEach*3;
// var obtMarksTotal = sub1marks + sub2marks + sub3marks;
// var totalperc = obtMarksTotal/totalMarks*100;
// document.write("Subject" + "&nbsp &nbsp &nbsp &nbsp &nbsp" + "Total Marks" + "&nbsp &nbsp &nbsp &nbsp &nbsp" + "Obtained Marks" + "&nbsp &nbsp &nbsp &nbsp &nbsp" + "Percentage" + "<br>"+"<br>");
// document.write(  "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + totalMarks  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + obtMarksTotal  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + totalperc )






////   USER INPUT & CONDITIONAL STATEMENT
////   Assignment # 9-10
////   Chp 9-12




// Q1


// var a = ["Karachi","lahore"];
// var city = prompt("Enter your city name");
// if(city==a[0]){
//     document.write("Welcome to city of lights");
// }
// else{
//     document.write("Welcome to " + city);
// }




// Q2


// var gender = prompt("What is your grnder ? ");
// if(gender=="male"){
//     document.write("Good Morning Sir !");
// }
// else{
//     document.write("Good Morning Ma’am !");
// }




// Q3


// var color = prompt("Enter input color for road signal");
// if(color=="red"){
//     document.write("Must Stop")
// }
// else if(color=="green"){
//     document.write("Move Now")
// }
// else if(color=="yellow"){
//     document.write("Ready to move")
// }
// else{
//     document.write("Please enter valid color");
// }





// Q4


// var currentFuel = +prompt("Enter current fuel you have in litres :");
// if(currentFuel<0.25){
//     document.write("Please Refill the fuel in your car");
// }
// else{
//     document.write("You have enough fuel");
// }





// Q6


// var maxMarks = 100;
// var sub1 = +prompt("Enter Marks scored in Math");
// var sub2 = +prompt("Enter Marks scored in Physics");
// var sub3 = +prompt("Enter Marks scored in Computer");
// var MaxTotal = maxMarks*3;
// var obtMarks = sub1 + sub2 + sub3;
// var perc = obtMarks/MaxTotal*100;
// var grade = [];
// var remarks = [];
// document.write("<h1> Marks Sheet </h1>" + "<br>");
// document.write("Total Marks : " + MaxTotal + "<br>");
// document.write("Marks Obtained : " + obtMarks + "<br>");
// document.write("Percentage : " + perc+"%" + "<br>");
// document.write("Grade : " + grade +"<br>");


// if(perc >= 80 && perc <=100){
//     grade = document.write("A")
// }
// else if (perc<80 && perc >=50){
//     grade = document.write("B");
// }
// else if(perc<=50 && perc >= 33){
//     grade = document.write("c")
// }
// else{
//     grade = document.write("F");
// }


// document.write("<br>");
// document.write("Remarks " + remarks + "<br>");


// if(perc >= 80 && perc <=100){
//     remarks = document.write("You scored very good marks")
// }
// else if (perc<80 && perc >=50){
//     remarks = document.write("You need improvement");
// }
// else if(perc<=50 && perc >= 0){
//     remarks = document.write("You are fail")
// }
// else{
//     remarks = document.write("Error !");
// }





// Q7


// var a = 10;
// var guess = +prompt("Enter your guess number");
// if(guess==a){
//     document.write("Bingo! Correct answer")
// }
// else if(guess== a+1){
//     document.write("Close enough to the correct answer")
// }
// else{
//     document.write("You guesses wrong")
// }




// Q8


// var no = +prompt("Enter number to check whether it is divisible by 3 or not");
// if(no%3==0){
//     document.write("The number is divisible by 3")
// }
// else{
//     document.write("The number is not divisible by 3");
// }





// Q9


// var no =  +prompt("Enter number to check whether it is even or odd");
// if (no%2==0){
//     document.write("Number is Even");
// }
// else if(no%2!=0){
//     document.write("Number is Odd");
// }
// else{
//     document.write("Number is not even nor odd");
// }





// Q10


// var T = +prompt("Enter temperature in C");
// if(T > 40){
//     document.write("It is too hot outside")
// }
// else if (T > 30){
//     document.write("The Weather today is Normal")
// }
// else if (T > 20){
//     document.write("Today’s Weather is cool")
// }
// else if (T >= 10){
//     document.write("“OMG! Today’s weather is so Cool.”")
// }
// else if(T < 10){
//     document.write("Its C0ld")
// }
// else{
//     document.write("Error");
// }






// Q11


// var a = +prompt("Enter First Number");
// var operation = prompt("Enter operation to be performed");
// var b = +prompt("Enter Second Number");
// if (operation=="+"){
//     document.write(a+b);
// }
// else if (operation=="-"){
//     document.write(a-b);
// }
// else if (operation=="*"){
//     document.write(a*b);
// }

// else if (operation=="/"){
//     document.write(a/b);
// }

// else if (operation=="%"){
//     document.write(a%b);
// }
// else{
//     document.write("Error! Invalid operation")
// }



// Chapter no 12 to 14



// var a=prompt("Enter ASCII of string or number");
// if(a>=65 && a<=90)
// {
//     document.write("Uppercase letter");
// }
// else
// if(a>=97 && a<=122)
// {
//     document.write("lowercase letter");
// }
// else
// if(a>=48 && a<=57)
// {
//     document.write("number/digits");
// }
// else
// {
//     document.write("Invalid");
// }


// var a=prompt("Enter 1st integer");
// var b=prompt("Enter 2nd integer");
// if(a>b)
// {
//     document.write("larger value is: "+a);
// }
// else
// if(a<b)
// {
//     document.write("larger value is: "+b);
// }
// else
// if(a===b)
// {
//     document.write("Both integers are equal");
// }
// else
// {
//     document.write("invald");
// }

// var a=+prompt("Enter any integer");
// if(a>=0)
// {
//     document.write("Positive Number ");
// }
// else
// if(a<0)
// {
//     document.write("Negative Number");
// }
// else
// {
//     document.write("invald");
// }

// var a=prompt("Enter a character");
// if(a==="a" || a==="A" || a==="e" || a==="E"|| a==="i" || a==="I" || a==="o" ||a==="O" || a==="u" || a==="U")
// {
//     document.write("Character is Vowel");
// } 
// else
// {
//     document.write("Character is consonant");
// }


// var pass="rafay123";
// var pwd=prompt("Enter your password:");
// if(pwd===pass)
// {
//     document.write("Correct! The password you entered matches the original password");
// }
// else 
// {
//     document.write("Incorrect Password"); 
// }

// var greeting;
// var hour = +prompt("Enter hour");
// if (hour < 18) 
// {
//     greeting = "Good day";
//     document.write(greeting);
// }
// else
// {
//     greeting = "Good evening";
//     document.write(greeting);
// }


// var a=+prompt("Type time in 24 hour formate without using space or special character");
// if(a>=0100 && a<=2400)
// {
//     document.write("time is "+a+" o'clock");
// }
// else
// {
//     document.write("invalid input");
// }


                                                        //  CHAPTER:14 TO 16
// 

// var array=["","",""];
// 

// var myarray=[];
// myarray[0]="";
// myarray[1]="";
// myarray[2]="";

// 

// var array=["a","b","c"];
// 

// var array=[2,4,8];
// 

// var a=[0,1];
// 

// // var a=[2,"ali",5,"zia"];
// 

// var edu=["1)SSC","2)HSC","3)BCS","4)BS","5)BCOM","6)MS","7)M.Phil.","8)PhD"];
// document.write("Qualification"+"<br>"+edu[0]+"<br>"+edu[1]+"<br>"+edu[2]+"<br>"+edu[3]+"<br>"+edu[4]+"<br>"+edu[5]+"<br>"+edu[6]+"<br>"+edu[7]);

// var n=["ali","zia","zain"];
// var s=[300,350,425];
// per1=s[0]*100/500;
// per2=s[1]*100/500;
// per3=s[2]*100/500;
// document.write("score of "+n[0]+" is "+s[0] +".Percentage "+per1+"%");
// document.write("<br>"+"score of "+n[01]+" is "+s[1]+".Percentage "+per2+"%");
// document.write("<br>"+"score of "+n[2]+" is "+s[2]+".Percentage "+per3+"%");
// 

// var array=[1,3,5,4,2]
// array.sort();
// document.write(array);

// var city=["karachi", "lahore", "islamabad", "quetta","peshawar"];
// var s_city=[city[0],city[1],city[3]]
// document.write("Cities List:"+"<br>"+city);
// document.write("<br>"+"<br>"+"Selected Cities List:"+"<br>"+s_city);
// 

// var array=["this","is","my","cat"]
// document.write("array:"+"<br>"+array);
// document.write("<br>"+"<br>"+"String:"+"<br>"+array[0]+"&nbsp"+array[1]+"&nbsp"+array[2]+"&nbsp"+array[3]);


// var arr=["monitor","printer","keyboard","mouse"];
// document.write("Devices:\n"+arr);
// c=arr.shift();
// document.write("<br>"+"out: "+c );
// c=arr.shift();
// document.write("<br>"+"out: "+c);
// c=arr.shift();
// document.write("<br>"+"out: "+c);
// c=arr.shift();
// document.write("<br>"+"out: "+c);


// var arr=["monitor","printer","keyboard","mouse"];
// document.write("Devices:\n"+arr);
// c=arr.pop();
// document.write("<br>"+"out: "+c );
// c=arr.pop();
// document.write("<br>"+"out: "+c);
// c=arr.pop();
// document.write("<br>"+"out: "+c);
// c=arr.pop();
// document.write("<br>"+"out: "+c);


// var a=["Apple" , "Samsung" , "Motorola" , "Nokia" , "Sony" , "Haier"];
// document.write("Store Phone Manufacturers:"+"<br>"+a[0]+"<br>"+a[1]+"<br>"+a[2]+"<br>"+a[3]+"<br>"+a[4]+"<br>"+a[5]);


                        // Chapter # 21 String methods              

// var a = prompt("Enter Your First Name");
// var b = prompt("Enter Your Last Name");
// document.write(a+b)



// var a = prompt('enter mobile')
// var b = a.length
// document.write("My favourite phone is:")
// document.write( a + "<br>" )
// document.write("Length of String:")
// document.write(b)


// var a = ("Pakistani")
// document.write(a + '<br>')
// var b = a.indexOf("n");
// document.write(b)


// var a = ("Hello World")
// document.write(a + '<br>')
// var b = a.lastIndexOf("l");
// document.write(b)

// var a = ("Pakistani")
// document.write(a + '<br>')
// var b = a.charAt(3);
// document.write(b)

// var afterReplacement = city.slice(0, city.indexOf("Hyder")) + "Islam" + city.slice(city.indexOf("Hyder") + 5)
// document.write("<br> <br> <br>")
// document.write("City: " + city)
// document.write(  afterReplacement)

// var message = "Ali and Sami are best friends. They play cricket and football together."
// document.write("<br> <br> <br>")
// document.write("Message: " + message + "<br>")
// document.write("After Replacement: " + message.replace("and","&"))

// const string = "472"
// document.write("<br> <br> <br> Value:" + string + "<br> Type:string" )
// const number = "472"
// document.write("<br>"+ "Value:"+ (parseInt(number) + 1 )+"<br> Type:number")

// var a = prompt('Enter Your Favourite Nut Below');
// var b = a.toUpperCase()
// document.write(b)


// var a = prompt('Enter Your Scripting Language Below');
// var b = a[0].toUpperCase() + a.slice(1).toLowerCase();
// document.write(b)

// var num =  3536;
// var n = num.toString();
// document.write(n)

// var userName = prompt("Enter username")
// var matchFound = 0
// for (i = 0; i < userName.length; i++) {
//     if (userName.charCodeAt(i) === 33 || userName.charCodeAt(i) === 44 || userName.charCodeAt(i) === 46 || userName.charCodeAt(i) === 64) {
//         alert("Please enter a valid username")
//         matchFound = 1
//         break
//     }
// }
//  var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var search = prompt("Enter item to search")
// var lowerCase = search.toLowerCase()
// var matchFound = 0
// for (var i = 0; i < A.length; i++) {
//     if (lowerCase === A[i]) {
//         alert(search + "is available at index " + i + " of the bakery")
//         matchFound = 1
//         break
//     }
// }
// if (matchFound !== 1) {
//     alert("We are sorry. " + search + " is available in our bakery")
// }
// var pass = prompt("Enter password")
// var matchFound = 0
// if (pass.charCodeAt(0) >= 48 && pass.charCodeAt(0) <= 57) {
//     alert("Password cannot begin with a number")
// }
// if (pass.length < 6) {
//     alert("password must at least contain 6 characters")
// }
// for (var i = 0; i < pass.length; i++) {
//     if (((pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90) || (pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) <= 122))) {
//         matchFound = 1
//         break
//     }
// }
// if (matchFound !== 1) {
//     alert("Password must contain alphabets")
// }
// matchFound = 0
// for (i = 0; i < pass.length; i++) {
//     if (pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57) {
//         matchFound = 1
//         break
//     }
// }
// if (matchFound !== 1) {
//     alert("Password must contain numbers")
// }
// : var university = "University of Karachi"
// document.write("<br> <br> <br>")
// uni = university.split("")
// for (var i = 0; i < uni.length; i++) {
//     document.write(uni[i] + "<br>")
 
//     var userInput = "Pakistan"
// var lastChar = userInput.slice(userInput.length - 1)
// document.write("<br> <br> <br>")
// document.write("User Input: " + userInput)
// document.write("<br> Last Character: " + lastChar)
//  var text = "The quick brown fox jumps over the lazy dog"
// var matchFound = 0
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 3) === "the") {
//         matchFound++
//     }
// }
// document.write("<br> <br> <br>")
// document.write("Text:" + text)
// document.write("<br> There are " + matchFound + " occurrence(s) of the word 'the'")

// _________________Ch # 26_____________________

//                 Q1

// var a = +prompt("Enter a Number")
// var b = Math.round(a);
// var c = Math.floor(a);
// var d = Math.ceil (a);
// document.write ( b + "<br> " + c + "<br> " +d);

//                  Q2


// var a = +prompt("Enter a Number")
// var b = Math.round(a);
// var c = Math.floor(a);
// var d = Math.ceil (a);
// document.write ( b + "<br> " + c + "<br> " +d);

//                  Q3

// var num=+(prompt("Enter any number: "));
// document.write("The absolute value of "+num+" is "+Math.abs(num));

//                  Q4

// document.write("Random dice value: "+Math.round((Math.random()*6)));

//                  Q5

// document.write("Random coin value:Heads "  + Math.round ((Math.random()*6 )));
// document.write("<BR>")
// document.write("Random coin value:Tails "+Math.round((Math.random()*6)));

//                  Q6
// document.write("Random value: "+Math.round((Math.random()*100)));    
//                  
//                  Q7
// var a = parseFloat(prompt("Enter Your Weights in Kilograms"));
// document.write("Your Weight is :" + a + "Kgs")

//                  Q8

// var userNumber = +prompt("Enter Any Number B/w 1 to 10 :")
// var secretNumber = Math.round(Math.random() * 10 ) ;

// if (userNumber === secretNumber) {
//     alert ("Congratulations!Hurrah!you won")
// }
//  else {
//     alert("You Lose :(")}

//                      Ch # 31 - 34
//                  Q1
// var now = new Date ();
// console.log(now)

// Q2

// var monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];
// var rightNow = new Date ();
// alert("Current month : " + monthNames[rightNow.getMonth()]);

//                  Q3

// var weekNames = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
// var rightNow = new Date();
// alert("Today is : " + weekNames[rightNow.getDay()].slice(0,3));

//                  Q4
// var day = new Date().getDay;
// if (day === 0 || day === 6){
//    alert("It's Fun day.")
//     }    
// else{
//     alert("Normal Working Day :(")
// }

//              Q5

// var day = new Date().getDate;
// if (day === (0,14) ){
//    alert("First fifteen days of the month.")
//     }    
// else (day === (15,31) )

//     {
//         alert("Last days of the month ")
// }
//              Q6

// var date = new Date ()
// document.write("Current Date : " + date + "<br>" )
// var elapse = date.getTime();
// document.write("Elapsed milliseconds since January 1,1970 : " + elapse + "<br>"  )
// document.write("Elapsed minutes since January 1, 1970: ", elapse / 6400);


//              Q7


// var time = new Date().getHours;
// if (time === (0-11)) { alert("It's P.M")
//     }    
// else (time === (12,23))
// {
//     alert("It's A.M")
// }

//              Q8

// var laterDate = new Date(2020, 11, 31);
//  document.write(laterDate, "<br>");

//  Q9


// var ramadanDateDays = new Date(2015, 5, 1);
// var currentDate = new Date();
// var numberOfDays = Math.ceil((currentDate - ramadanDateDays) / 8.64e7);
// document.write(numberOfDays + " have passed since 1st Ramadan, 2015");


//                   Q10

// var referenceDate = new Date();
// var referenceDateSeconds = referenceDate.getTime() / 1000;
// var specificDate = new Date(2015, 0, 1);
// console.log(referenceDateSeconds)
// var specificDateSeconds = specificDate.getTime() / 1000;
// console.log(specificDateSeconds)
// var secondsPassed = referenceDateSeconds - specificDateSeconds;
// document.write("On reference date " + referenceDate + ",<br>" + secondsPassed.toFixed(0) + " seconds have passed since " + specificDate);




//                      Q11

// var currentDate = new Date();
// var hourAdded = currentDate.setHours(currentDate.getHours() - 1);
// var hourAhead = new Date(hourAdded);
// document.write("1 hour ago,it was : " + hourAhead);


//                      Q12


// var currentDate = new Date();
// var yearBack = new Date(); yearBack.setFullYear(currentDate.getFullYear() - 100);
// document.write("Current date: " + currentDate + "<br>100 years back it was " + yearBack);


//                      Q13

// var age = +prompt("Enter Your Age below")
// var era = new Date ()
// var ans =   (era.getFullYear() - age );
// document.write("Your age is : "   + age +   "<br>" + " Your birth year  is : "  + ans)


//                      Q14

// var cn = prompt("Enter Your Good Name")
// var noUnits = 410
// var charges = 16
// var amount = 410 *16
// var penalty = 350
// var afterPenalty = amount + penalty
// document.write("Customer Name : " + cn +   "<br>" + "Month : February" +   "<br>" + "Number of units : " + noUnits+   "<br>" + "Charges per unit : "  +charges+   "<br>" + "Net Amount Payable(within Due Date) : "+ amount +   "<br>" + "Late payment Surcharge : " + penalty+   "<br>" + "Gross Amount payabale (After Due Date) : "+ afterPenalty)

//                CH 35 - 38

//                      Q1      
// function tellTime() {
// var now = new Date();
// document.write(now)
// }

// tellTime()

//                      Q2   


// function a() {
// var a = prompt("Enter Your First Name ")
// var b = prompt("Enter Your Last Name ")
// var greetUser= ("Hello,there : ")
// alert (greetUser + a + b ) ;
// }
// a()



// Question Number 3
// let num1 = Number(prompt("Enter fist number"));
// let num2 = Number(prompt("Enter second number"));
// let total = add(num1,num2);
// document.write("<br>" + "Sum of " + num1 + " and " + num2 + " is "+ total);
// function add(a,b){
//     return a+b;
// }

// Question Number 4
// let number1 = Number(prompt("Enter fist number"));
// let number2 = Number(prompt("Enter second number"));
// let operation = prompt("Enter operation");
// document.write("<br>" + "Resut of expression is " + result(number1,number2,operation));

// function result(num1,num2,operator){
//     if (operator==="+"){
//         return num1 + num2;
//     }
//     if (operator==="-"){
//         return num1 - num2;
//     }
//     if (operator==="*"){
//         return num1 * num2;
//     }
//     if (operator==="/"){
//         return num1 / num2;
//     }
// }

// Question Number 5
// let number = Number(prompt("Enter number of sqaure"));
// square(number);
// function square(num){
//     document.write("<br>" + "Square of " + num + " is " + (num**2));
// }

// Question Number 6
// let number = Number(prompt("Enter number for Factorial"));

// let result = factorial(number);
// document.write("<br>" + "Factorial of "+ number + " is " +result);
// function factorial(num) {
//     for (let i = num-1; i > 0; i--){
//         num *= i;
//     }
//     return num;
// }

// Question Number 7
// let startingPoint = Number(prompt("Enter starting point"));
// let endingPoint = Number(prompt("Enter ending point"));
// counting(startingPoint,endingPoint);

// function counting(spoint,epoint){
//     for(let i = spoint; i<= epoint; i++){
//         document.write("<br>"+ i);
//     }
// }

// Question Number 8
// let perpendicular = Number(prompt("Enter perpendicular"));
// let base = Number(prompt("Enter base"));
// hypotenuse(perpendicular,base);

// function square(num){
//     return num**2;
// }

// function hypotenuse(per,bas){
//     let hyp = square(per) + square(bas);
//     document.write("<br>" + "Hypotenuse : " + square(hyp));
// }

// Question Number 9
// let width = Number(prompt("Enter width"));
// let height = Number(prompt("Enter height"));
// areaOfRectangle(width,height); //pass by variable
// areaOfRectangle(3,5); //pass by value

// function areaOfRectangle(a,b){
//     document.write("<br>" + "Area of rectangle is " + (a*b));
// }


// Question Number 10
// let string = prompt("Enter string");
// checkPalindrome(string);

// function checkPalindrome(str) {
//     let reverseString = "";

//     for (let i = (str.length - 1); i >= 0; i--) {
//         reverseString = reverseString.concat(str[i]);
//     }
//     if(str.toLowerCase() === reverseString.toLowerCase()){
//         document.write("<br>" + "The string is Palidrome");
//         document.write("<br>" + "User Input: " + str);
//         document.write("<br>" + "Reverse string: " + reverseString);
//     }
//     else{
//         document.write("<br>" + "The string is not Palidrome");
//     }
// }

// Question Number 11
// let string = prompt("Enter string");
// let afterConvertion = convertion(string);

// document.write("<br>" + "User input: " + string);
// document.write("<br>" + "After converstion: " + afterConvertion);

// function convertion(str){
//     copyStr = str[0].toUpperCase();
//     copyStr = copyStr.concat(str.slice(1));
//     return copyStr;
// }

// Question Number 12
// let string = "Web Development Tutoria";
// findLongestWord(string);

// function findLongestWord(str) {
//     let splitString = str.match(/\w[a-z]{0,}/gi);
//     let longestWord = splitString[0];

//     for (let i = 0; i < splitString.length; i++) {

//         if(longestWord.length < splitString[i].length){
//             longestWord = splitString[i];
//         }
//     }
//     document.write("<br>" + "Longest Word : " + longestWord);
// }

// Question Number 13
// function numberOfOccurance(string, character) {
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i].toLowerCase() === "o"){
//             count++;
//         }
//     }
//     return count;
// }

// document.write("<br>" + "Number of occurance of 'o' is " + numberOfOccurance("JSResourceS.com","o"));

// Question Number 14
// function calcCircumference(rad){
//     document.write("<br>" + "The circumfrence of circle is " + (2*rad*3.142))
// }

// function calcArea(rad){
//     document.write("<br>" + "The area of the circle is " + (3.14 * rad**2));
// }

// let radius = Number(prompt("Enter radius"));
// calcCircumference(radius);
// calcArea(radius);

/* Chapter 38 to 42 */

// Question Number 1
// function calcPower(a,b){
//     return a**b;
// }

// let base = Number(prompt("Enter base value"));
// let power = Number(prompt("Enter power value"));

// document.write("<br>" + "The value of " + base + " raised to " + power + " is " + calcPower(base,power));

// Question Number 2
// let year = Number(prompt("Enter year"));
// check(year);
// function check(y){
//     if (y%4 === 0){
//         document.write("<br>"+ y + " is a leap year")
//     }
//     else{
//         document.write("<br>"+ y + " is not a leap year")
//     }
// }

// Question Number 3
// let S = function(x,y,z){
//     return (x+y+z)/2;
// }

// function areaOfTriangle(a,b,c){
//     let s = S(a,b,c);
//     let area = s*(s-a)*(s-b)*(s-c);
//     document.write("<br>" + "Area of Triangle is " + area);
// }

// let s1 = Number(prompt("Enter first side of triangle"));
// let s2 = Number(prompt("Enter second side of triangle"));
// let s3 = Number(prompt("Enter third side of triangle"));
// areaOfTriangle(s1,s2,s3);

// Question Number 4
// let subject1 = Number(prompt("Enter marks of subject 1"));
// let subject2 = Number(prompt("Enter marks of subject 2"));
// let subject3 = Number(prompt("Enter marks of subject 3"));

// mainFunction(subject1,subject2,subject3);

// function mainFunction(sub_1, sub_2, sub_3) {
//     let marksObtain = sub_1 + sub_2 + sub_3;
//     document.write("<br>" + "Marks of 1st subject is " + sub_1);
//     document.write("<br>" + "Marks of 2nd subject is " + sub_2);
//     document.write("<br>" + "Marks of 3rd subject is " + sub_3);
//     document.write("<br>" + "Average: " + calcAverage(marksObtain).toFixed(2));
//     document.write("<br>" + "Percentage: " + calcPercentage(marksObtain,300).toFixed(2) +"%");
// }
// function calcAverage(total) {
//     return total / 3;
// }
// function calcPercentage(marksObtain, totalMarks) {
//     return (marksObtain / totalMarks) * 100;
// }

// Question Number 5
// let string = prompt("Enter string");
// let character = prompt("Enter character");

// if (indexOf(string, character) === -1) {
//     document.write("<br>" + "String: " + string);
//     document.write("<br>" + character + " is not in the string because indexOf function return " + indexOf(string, character));
// }
// else {
//     document.write("<br>" + "String: " + string);
//     document.write("<br>" + "Index of character \"" + character + "\" is " + indexOf(string, character));
// }

// function indexOf(str, char) {
//     let index = -1;
//     for (let i = 0; i < str.length; i++) {
//         if (char === str[i]) {
//             index = i;
//             break;
//         }
//     }
//     return index;
// }

// Question Number 6
// let string = prompt("Enter string");
// document.write("<br>" + "String before operation:" + string);
// document.write("<br>" + "String after operation: " + removingVowel(string));
// function removingVowel(str) {
//     newStr = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" || str[i].toLowerCase() === "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u") {
//             continue;
//         }
//         newStr += str[i];
//     }
//     return newStr;
// }

// Question Number 7

// let string = prompt("Enter string");
// document.write("<br>" + "String before operation: \"" + string + "\"");
// document.write("<br>" + "Occurrences of any two vowels in succession in a line of text : " + occuranceOfDoubleVowel(string));

// function occuranceOfDoubleVowel(str) {
//     let array = [];

//     for (let i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" || str[i].toLowerCase() === "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u") {
//             if (str[i + 1].toLowerCase() === "a" || str[i + 1].toLowerCase() === "e" || str[i + 1].toLowerCase() === "i" || str[i + 1].toLowerCase() === "o" || str[i + 1].toLowerCase() === "u") {
//                 array.push(str.slice(i, i + 2));
//             }
//         }
//     }
//     return array;
// }

// Question Number 8
// let number = Number(prompt("Enter Distance ib-n kilometer"));
// inMeter(number);
// inFeet(number);
// inInch(number);
// inCentimeter(number);

// function inMeter(num) {
//     document.write("<br>" + "Distance in meter is " + (num * 1000));
// }
// function inFeet(num) {
//     document.write("<br>" + "Distance in feet is " + (num * 3281));
// }
// function inInch(num) { 
//     document.write("<br>" + "Distance in inch is " + (num * 39370));
// }
// function inCentimeter(num) {
//     document.write("<br>" + "Distance in centimeter is " + (num * 100000));
// }

// Question Number 9
// let overTimeHours = Number(prompt("Enter overTime hours"));
// let overTimePay = overTimeHours * 12;

// document.write("<br>" + "Overtime salary of employ is " + overTimePay + " RS");



/* Chapter 43 to 48 */  

// Question Number 1

// Question Number 2

// Question Number 3

// Question Number 4

// Question Number 5
























