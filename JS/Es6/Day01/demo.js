/**
 *  == var ,, let ,, const // Done
 *  == destrucring // Done
 *  == spread operator // Done
 *  == rest params -- default values // done
 *  == string API // done
 *  ==Arrow Function // done
 *  == Array API
 *      -- map
 *      -- filter
 *      -- every
 *      -- some
 *      -- find
 *      -- findIndex
 *      -- foreach
 *
 */

/**
 * Var
 * -------------------
 * 1- reassign
 * 2- redeclartion
 * 3- Hoisting
 * 4- added to window object
 * 5- function scope
 * ----------------------------
 * let
 * ---------------------------
 * 1- reassign
 * 2- can't redeclare varable
 * 3- can't Hoisting
 * 4- can't added to window object
 * 5- block scope
 * ----------------------------
 * const
 * ---------------------------
 * 1- can't  reassign
 * 2- can't redeclare varable
 * 3- can't Hoisting
 * 4- can't added to window object
 * 5- block scope
 */

// console.log(PI);
// const PI = 3.14;

// console.log(PI);
// let fname = "Ali";

// function show() {
// 	let test = "mona";
// 	for (let i = 0; i < 3; i++) {
// 		console.log(test);
// 		console.log(i);
// 	}
// 	console.log(test);
// }

// show();

/**---------------------------------- */
// let arr = [ "mona", "ali", "ahmed" ];

// destrcuting
// let [, , y] = ["mona", "ali", "ahmed"];
//
// let x = arr[0];
// let y = arr[1];

// console.log(y);

// function useArr(b) {
// 	return [
// 		b,
// 		function () {
// 			console.log(b);
// 		},
// 		"Ahmed",
// 	];
// }

// let [x, y] = useArr("Alaa"); // arr

// console.log(x);
// y();
/**-------------------------- */

// let person = { fname: "ali", lname: "alaa", color: "red" };

// // let { fname: fname, color: color } = person;
// let { color } = person; // syntax suger

// console.log(color);

/**------------------ */

// let a = 3;
// let b = a; //
// a = 5;

// console.log("a : ", a);
// console.log("b : ", b);
/**------------------------- */
// let arr1 = [10, "mona", "ahmed", "alaa"];
// let arr2 = ["Welcome", "ITI", ...arr1, "Angular Group"]; // spread operator

// arr1.push("Hoda");

// console.log("arr 1: ", arr1);
// console.log("arr 2: ", arr2);

// let arr = [1, 2, 3, 6, 9]; //
// console.log(Math.max(...arr));
/**----------- rest params and Default Values-------------- */
// function show(x, ...w) {
// 	console.log(w);
// 	// console.log("x :", x);
// 	// console.log("y :", y);
// 	// console.log(arguments);
// }

// show("mona", "ali", "ahmed", 45);

// let str1 = "hello";

// let str2 = "From iti ";

// console.log(`Welcome ,

//             ${str1}

//             ${str2}`);
/**---------------
 *  == functions is js
 *      -- built in functions
 *      -- user defined functions
 *          -- function statement (Hoisting)
 *          -- function expression
 *              [callback function (anonymous function)]
 *
 *
 * --------------- */
// function statement
// function add(x, y) {
// 	console.log(x + Y);
// }
// // function expression
// var add2 = function (x, y) {
// 	console.log(x + y);
// };
// // arrow expression
// var add3 = (x, y) => x + y;

/**-----------  this
 *  this --> caller
 *  -------------- */
// this --> window
// var fname = "mona";
// function getFname() {
// 	// this --> window -- window
// 	console.log(this.fname);
// }

// getFname(); // window

// this --> window

// var fname = "ahmed";

// let person = {
// 	fname: "ali",

// 	display: function () {
// 		console.log(this); // window
// 		console.log(this.fname);
// 	},
// };

// person.display();
/**-------------
 * find
 * findIndex
 * map
 * filter
 * foreach
 *
 * ------------ */
// [ali,ali,ali,ali,ali]
// let arr = ["Hello", "Welcome", "ITI"];
// arr.forEach(function (item, index) {
// 	console.log(item, index);
// });
// let result = arr.map(function (item, index, arr) {
// 	return `<h1>${item}</h1>`;
// });

// console.log(result);
// let tracks = ["pd", "os", "sd"];

// var result = arr.findIndex((item) => item > 25);

// console.log(result);
// console.log("---------");
// function findElement(x, y) {
// 	console.log("x : ", x);
// 	console.log("y : ", y);

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 40) return arr[i];
// 	}
// }

// for (let i = 0; i < arr.length; i++) {
// 	findElement(arr[i], i, arr);
// 	console.log("--------------");
// }

// let products = [
// 	{
// 		id: 1,
// 		productName: "book",
// 		cat: "school",
// 	},
// 	{
// 		id: 2,
// 		productName: "Pen",
// 		cat: "school",
// 	},
// 	{
// 		id: 3,
// 		productName: "Phone",
// 		cat: "elect",
// 	},
// 	{
// 		id: 4,
// 		productName: "penceil",
// 		cat: "school",
// 	},
// 	{
// 		id: 5,
// 		productName: "watch",
// 		cat: "elect",
// 	},
// ];

// let result = products.filter(function (item, index) {
// 	return true; // true
// });

// console.log(result[0]);
// let tracks = ["pd", "os", "sd"];

// var result = tracks.every(function (item, index) {
// 	return item.startsWith("s");
// });
// var result = tracks.some(function (item, index) {
// 	return item.startsWith("s");
// });

// console.log(result);

// var a = 3;
// var b = 4;

// a = 4;
// b = 3;
