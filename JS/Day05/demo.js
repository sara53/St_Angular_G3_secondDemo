// location Object
// function execute() {
// 	location.reload();
// 	location.assign("https://www.google.com.eg/");
// 	location.replace("https://www.google.com.eg/");
// 	console.log(location);
// 	console.log(location.pathname); // get
// 	location.pathname = "/about.html"; // set
// 	console.log(location.href); // get
// 	location.href = "https://www.google.com.eg/";
// }

// history Object

// console.log(history);
// history.forward();

// function execute() {
// 	navigator.geolocation.getCurrentPosition(
// 		function (x) {
// 			console.log(x.coords.latitude);
// 			console.log(x.coords.longitude);
// 			console.log("Run While user allow location");
// 		},
// 		function () {
// 			console.log("While deny location");
// 		}
// 	);
// }
/** Events
 * -------------------------
 *  1- add attribute on element ()
 *  2- attach function on element  //
 *  3- addEventListener //
 *
 */

// var btn = document.getElementById("btn");
// var p = document.getElementById("result");

// function changeContent(e) {
// 	console.log(e.target);
// 	p.innerHTML = "<h1>Welcome Angular Group</h1>";
// }
// function changeStyle() {
// 	p.style.background = "orange";
// }

// btn.addEventListener("click", changeContent);
// btn.addEventListener("click", changeStyle);

// setTimeout(function () {
// 	console.log("Called");
// 	btn.removeEventListener("click", changeContent);
// }, 3000);

// function changeStyle(color) {
// 	color = color || "red";

// 	p.style.background = color;
// }

// btn.onclick = function (e) {
// 	console.log(e);
// 	changeStyle("orange");
// };
// btn.onclick = changeContent;

// var person = {
// 	fname: "ali",
// 	lname: "alaa",
// 	onclick: function () {
// 		console.log(person.fname);
// 	},
// };

// person.onclick = function () {
// 	console.log(person.lname);
// };
// person.onclick = function () {
// 	console.log("Hello on click");
// };

// person.onclick();
/**==================================== */

// var input1 = document.getElementById("input1");

// // input1.addEventListener("focus", function () {
// // 	input1.style.border = "3px solid blue";
// // });
// // input1.addEventListener("blur", function () {
// // 	input1.style.border = "3px solid orange";
// // });

// var result = document.getElementById("result");
// var errorMessage = document.getElementById("errorMessage");
// // input1.addEventListener("change", function (e) {
// // 	result.innerHTML = e.target.value;
// // });
// input1.addEventListener("input", function (e) {
// 	result.innerHTML = e.target.value;
// 	if (e.target.value.length >= 3) {
// 		input1.style.border = "2px solid green";
// 		errorMessage.style.display = "none";
// 	} else {
// 		input1.style.border = "2px solid red";
// 		errorMessage.style.display = "block";
// 	}
// });

// function login(e) {
// 	e.preventDefault();
// 	console.log("Login");
// }

/** ---------------- */

// function first() {
// 	console.log("First");
// }
// function second(e) {
// 	e.stopPropagation();
// 	console.log("Second");
// }
// function third() {
// 	console.log("Third");
// }
