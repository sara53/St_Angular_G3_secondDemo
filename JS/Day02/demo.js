// alert("Message");
// var result = confirm("Are you sure you want to delete this elment");
// if (result) {
// 	document.writeln("Item Deleted");
// 	alert("Item deleted");
// }

// var a = 3;

// var b = 5;

// var result = a + b;

// console.log(result);

// console.log("---------");
// var a = 49;

// var b = 12;

// var result = a + b;

// console.log(result);
// console.log("---------");
// var a = 56;

// var b = 989;

// var result = a + b;

// console.log(result);
/** Functions */

// no params
// function show() {
// 	console.log("From show");
// }
// parameters 2 params
// function add(x, y) {
// 	x = x || 0;
// 	y = y || 0;
// 	console.log("x , ", x);
// 	console.log("y , ", y);
// 	console.log(x + y);
// }

// add("mona", "ali");
// add(true, false);
// // arguments
// add();
// console.log("-----------");
// add(3);
// console.log("--------------");
// add(8, 3);
// console.log("--------------");
// add(4, 5, 7, 25);
/**------------------ */

// function statement
// function add(x, y) {
// 	return x + y;
// }

// var result = add(3, 4);
// console.log(result);

// var result = add("mona ", " ali");
// console.log(result);

// fly();

// var result = Number("20");
// console.log(result);
/** Functions
 * ---------------------------
 *  == built in functions
 *  == user defined Functions
 *    -- function statement (function declartion)
 *    -- function expression
 *
 */

// function expression
// function show() {
// 	// show function
// }
// var add = function (x, y) {
// 	x = x || 0;
// 	return x + y;
// };

// var result = add(5, 6);

// console.log(result);
/**-------------------- */

// console.log(x);
// console.log(x); // undefined ??
// var x = 20;
// console.log(x);

// var x;
// console.log(x);
// x = 20;
// console.log(x);

// add();
// function add() {
// 	console.log(3 + 5);
// }

// result();
// console.log(result);
// var result = function () {
// 	console.log(5 + 6);
// };

// var fname = "mona";
// var mearnTrack = function (x) {
// 	console.log(x);
// 	console.log("Hello Mearn Track");
// };

// var dotNetTrack = function () {
// 	console.log("dot net track");
// };

// call back function
// function greet(myFun, num) {
// 	myFun(40);
// 	console.log(num);
// 	console.log("Welcome Angular Group");
// }

// greet(mearnTrack, "mona");

// greet(function () {
// 	console.log("Hello Mearn Track");
// });
// console.log("--------------");
// greet(function () {
// 	console.log("dot net track");
// });
// console.log("-------------");
// greet("mona");

// function greet(myFun1, myFun2) {
// 	myFun1("alaa");
// 	myFun2();
// 	console.log("Welcome From ITI");
// }

// greet(
// 	function (w) {
// 		console.log(w);
// 		console.log("From CB1");
// 	},
// 	function () {
// 		console.log("FROM CB2");
// 	}
// );

// function greet(myFun) {
// 	myFun(
// 		function (z) {
// 			z();
// 			console.log("from cb1");
// 		},
// 		function () {
// 			console.log("from cb2");
// 		}
// 	);
// }

// greet(function (x, y) {
// 	x(function () {
// 		console.log("Inside x");
// 	});
// 	y();
// 	console.log("from main function");
// });
/**------------ String API
 * length
 * ------------------
 * == charAt
 * == indexOf
 * == lastIndexOf
 * == concat
 * == startsWith
 * == endsWith
 * == toUpperCase
 * == toLowerCase
 * == includes
 * == trim
 * == trimStart
 * == trimEnd
 * == split
 *  -------------- */
// var str = "Hello iti angular react";

// var str2 = " Welcome from iti";

// var result = str.split(" ");

// console.log(result);
// console.log(result);

// console.log(str[8]);
// console.log(str.length);
// for (var i = 0; i < str.length; i++) {
// 	console.log(str[i]);
// }

// function show() {
// 	console.log("show");
// }

// var result = show();
// console.log(result);
/**----------------- Array
 * length
 * -------------------------
 * == push --> last
 * == unshift --> first
 * == pop --> last
 * == shift --> first
 *== concat
 *== reverse
 == join
 *
 * -------------- */
// var students = [
// 	"mona",
// 	true,
// 	12,
// 	function () {
// 		console.log("Hello fun");
// 	},
// 	[10, 30],
// ];
// students[0] = "mona";
// students[1] = "ali";

// console.log(students[3]());

// var arr = [10, 20, 4]; // ascii code
// var students = ["ali", "ahmed"];

// var result = arr.join("##");
// console.log(result);
// arr.sort(function () {}); // call back function
// console.log(arr);
// arr.reverse();
// students.reverse();
// console.log(arr);
// console.log(students);
// arr.push("Mona");
// arr.push("alaa");

// arr.unshift("mona");
// arr.unshift("alaa");
// arr.pop();
// arr.pop();
// arr.pop();
// arr.shift();
// arr.shift();
// arr.shift();
// let result = arr.concat(students);
// console.log(arr);
// console.log(students);
// console.log(result);
// for (var i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

/** mona  --> anom */

/** Assignments
 * ---------- write a function that ---------------
 * 1- reverse string e.x ahmed --> dsmha
 * 2- take string from user --> count e on it
 *      ahmed-- > 1
        sara-- > 0 
        eerrr --> 2

   3- take 5 numbers from user and push them into an array
   == sort ascen
   == desc
   [20, 10, 3, 5, 7];
   
   [3, 5, 7, 10, 20][(20, 10, 7, 5, 3)];

 */
for (var i = 1; i <= 6; i++) {
	document.writeln("<h " + i + "Wellcome" + "> Your namr</h" + i + ">");
}
