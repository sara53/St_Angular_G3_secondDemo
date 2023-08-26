// var fname = "T"; // string

// var num1 = 10.236858; // number

// var flag = true; // boolean

// var firstname = "ekk";
// var firstName = "ekk"; // camel case

// // typeof
// console.log(typeof fname);
// console.log(typeof num1);
// console.log(typeof flag);
/** Datatypes
 * -------------------------
 *  == primitive datatype
 *     - string
 *     - number
 *     - boolean
 *     - undefined
 *     - null
 *
 *  == reference datatype
 *
 */

/**
 * var
 *  -- redeclation
 *  -- reassign -- (with the same datatype , differenct datatype)
 */
// var fname; // undefined
// fname = "alaa"; // alaa -- string
// fname = 10; // 10 -- number
// console.log(fname);
// console.log(typeof fname);
// console.log("-------------------");
/**  ============================================ */
// var x = "ali";
// x = 10;
// // var x = 10; // redeclaration
// console.log(x);
// console.log(typeof x);
/** ============================================ */

// var fname = 10;

// var fname = String(10);

// console.log(fname);

// console.log(typeof fname);

/** NaN --> Not a number
 *
 *
 *
 */
// console.log("---------------------");

// var num = 10;
// var num = Number("mona");
// console.log(num);
// console.log(typeof num);

// var fname = "1234";
// console.log(isNaN(fname));

// var flag = true;

// var flag = Boolean(false);

// console.log(flag);
// var fname = null; // js engine --> empty Object
// fname = "ali";
// console.log(fname);

// console.log(typeof fname);

/**-------------------------------------
 *  == Falsy Valued
 *  [0 , false, "",null,NaN,undefined]
 *  == truthy values
 * ------------------------------------- */

// var flag = Boolean([]);
// console.log(flag);
/**---------------------------------------------- */
/** Operatoers
 * ---------------
 * 1- (arithmatic opertors) -- [+,-,*,/]
 *
 * [+] ==> Number + Number --> Add
 *     ==> String + String --> Concat
 *
 * [-] ==> number - number --> sub
 *
 * (coercion) --> js engine convert automatic from datatype to anther datatype
 */

// var num1 = "mona"; // string --> NaN - 20
// var num2 = 20; // number --> string

// console.log(num1 - num2);
/**--------------------------------------------- */
/** Comparasion Operators  [>,<,>=,<=,== , ===]
 *
 * [==] --> (Values Only)
 * [===] --> (Values & Datatype)
 *
 *
 *
 */

// var num1 = true; // number --> 1

// var num2 = "true"; // number NaN

// console.log(num1 == num2);

/**-----------------------Logical Operator
 * -------------------------------------------
 *
 *  &&
 * == true && true --> true
 * == true && false --> false
 * == false && true --> false
 * == false && false --> false
 *--------------------------------------------
   ||
   == true || true --> true
   == true || false --> true
   == false || true --> true
   == false || false --> false

   -----------------------------------------------
   Not
   == true -- false
   == false == true
 * --------------------- */
// var result = 1 < 2 || 4 > 3;

// console.log(result);

/**----------------------------- */

// var result = "alaa" || "ola";

// // true && true --> true
// // false &&   --> false
// // false ||

// console.log(result);
/**------------------------------ */

// var color = "green";

// color == "red"
// 	? console.log("you fav color is red")
// 	: console.log("You doon ..");
// if (color == "red") console.log("your fav color is red");
// else if (color == "green") console.log("Your fav color is green");
// else console.log("you don't have any fav color");

// console.log("Welcome from iti");
/**------------------------------------ */
/** for ,, while ,, do while */
// i = 1
// i = 2 --

// for (var i = 1; i <= 5; i++) {
// 	document.writeln("<h" + i + ">Hello from ITI</h" + i + ">");
// }

// console.log("after loop", i);

// var i = 9;

// while (i < 7) {
// 	// block
// 	document.writeln("<h" + i + ">Hello from ITI</h" + i + ">");
// 	i++;
// }

// document.writeln("Welcome Angular Group");
/**---------------- */

// var i = 9;
// do {
// 	document.writeln("<h" + i + ">Hello from ITI</h" + i + ">");
// 	i++;
// } while (i < 7);

// var num1 = prompt("Enter Your Num1");
// var num2 = prompt("Enter Your Num2");

// document.writeln(Number(num1) + Number(num2)); // concat
/**---------------------- Assignment -------
 * -----------------------------------------
 * == Enter Your Name --> Welcome Your Name (h1 --> h6)
 * == take n numbers of user until sum > 100 or user enter 0 --> print sum
 * == take number from user --> check if number odd or even
 *                          --> positive or negative
 * take from user ---> num % 3 --> fizz
 *                --> num % 5 --> Buzz
 *                --> % 3, and 5 --> FizzBuzz
 *                 --> None
 *
 *
 * 7 --> none
 * 21 --> fizz
 * 15 --> fizzBuzz
 * 25 -->Buzz
 * ---------------------- */
// 30

// 60

// 20

// 10
// 20
// 0

// sum --> 110
