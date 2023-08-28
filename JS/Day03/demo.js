/** Object
 * Math
 * Dom
 */

/** Properties .. methods
 * -----------------------
 * Property : Key : value(any datatype)
 * access [read , write]
 *  ==  dotNotation
 *  == subscript Notation
 *
 */

// var myKey = "age";
// var student1 = {
// 	fname: "ali",
// 	age: 20,
// 	address: "alex",
// 	gender: "male",
// 	isShow: true,
// 	colors: ["red", "green", "blue"],
// };

// student1.fname = "alaa"; // override

// student1.test = "test value"; // add property

// console.log(student1);
// console.log(student1.fname);
// set ,, dotNotation
// student1.fname = "alaa"; // override
// student1.address = "cairo";
// /**-----*/
// student1["address"] = "new Address";
// console.log(student1);
// // get , dotNotation
// console.log(student1.age);
// console.log(student1.fname);
// /** subscript Notation  */

// console.log(student1[myKey]);
// console.log(student1["fname"]);

// user defined Object
// var person = {
// 	fname: "ali",
// 	age: 30,
// 	address: {
// 		city: "cairo",
// 		code: 1223,
// 		street: "Saad zaghlol",
// 	},
// 	display: function (x) {
// 		console.log(x + " " + person.fname);
// 	},
// };

//person.display("welcome from iti ");
// console.log(person.display());
// console.log(person.display);
// console.log(person.address.city);
// console.log(person["address"]["city"]);
// console.log(person["address"].city);
// console.log(person.address["city"]);

// var str = "hello from iti";
// console.log(str.length);

// var result = str.charAt("h");
// console.log(result);

// var arr = [];

// arr.push();
/// method
/** Math
 * -------------------
 * PI
 * --------- Methods -------
 * == sqrt -->
 * == pow
 * == sign
 *    -- Positive ---> 1
 *     -- negative --> -1
 *     -- negative --> 0
 *
 * == max
 * == min
 * == round
 * == floor
 * == ceil
 * == random
 * == sin
 */

// console.log(Math.PI);

// console.log(Math.sin((90 * Math.PI) / 180));
/* Date Object
getFullYear


getMonth --> jun --> 0

         --> dec --> 11

         getDay --> sun --> 0
                --> mon --> 1
                --> thus --> 2
*/

// var myDate = new Date();

// myDate.setDate(myDate.getDate() - 1);

// console.log(myDate);
// console.log(myDate.getDay());

// console.log(document);

// function show() {
// 	console.log("Hello show function");
// }

/** Dom
 * ------------- How to select element from dom--------
 * 1- getElementById --> element
 * 2- querySelector --> element
 * 3-getElementsByClassName --> collection
 * 4-getElementsByTagName --> collection
 * 5-getElementsByName --> collection
 * 6-querySelectorAll --> collection
 * --------------------------
 * document.body
 * document.links
 * document.images
 * document.forms
 * firstElementChild
 * lastElementChild
 How to change Content
innerText
 innerHTML
 
 textContent
 */

// var myDiv = document.getElementById("header");

// console.log(myDiv.firstElementChild);
// console.log(myDiv.lastElementChild);
// console.log(document.forms);
// console.log(document.links[0]);
// console.log(document.links[1]);
// var myDiv = document.getElementById("header");
// var myDiv = document.getElementsByClassName("head");
// var elements = document.getElementsByTagName("p");
// var elements = document.getElementsByName("choose");
// var element = document.querySelectorAll(".myHead");

// console.log(element);
// // console.log(elements[0].value);
// // for (var i = 0; i < elements.length; i++) {
// // 	console.log(elements[i]);
// // }

// function getValue() {
// 	for (var i = 0; i < elements.length; i++) {
// 		if (elements[i].checked) {
// 			console.log(elements[i].value);
// 		}
// 	}
// }

function changeContent() {
	var result = document.getElementById("result");
	var input1 = document.getElementById("input1");
	result.innerHTML = input1.value;
	// var myP = document.getElementsByClassName("myHead")[1];

	// myP.innerHTML = "<h1>Welcome from iti</h1>";
	// console.log(myP.innerText); //get
	// myP.innerText = "<h1>Welcome from iti</h1>"; // set,override
}
