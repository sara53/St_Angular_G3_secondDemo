/**
 * 1-How to select element from dom
 * 2- how to change Content
 * -----------------------------------
 * 3- how to change style
 *   == style
 *   == className
 *   == classList
 * 		-- add()
 *      -- remove()
 *      -- toggle()
 * ------------------- Attributes ----------------
 *  1- getAttributes
 *  2- setAttribute
 *  2- removeAttribute
 *  2- hasAttribute
 * ------- How to create Element from js -------------------
 */

/** Bom --> Browser object Model
 *  == Window
 *  == location
 *  == history
 *  -- screen // self study
 *  --navigation
 *
 */

// var p = document.getElementById("first");

// function changeStyle() {
// 	// p.style.backgroundColor = "red";
// 	// p.style.fontSize = "10px";
// 	// p.style.fontWeight = "bold";
// 	// p.style.display = "none";
// 	// p.className; // get , set // override
// 	// console.log(p.className);
// 	// p.className += " jsClass";
// 	// console.log(p.classList[2]); // get
// 	// p.classList.add("jsClass");
// 	// p.classList.toggle("jsClass");
// }

// var img = document.getElementById("img1");
// var link2 = document.getElementById("link2");
// var link1 = document.links[0];
// function execute() {
// 	if (link2.hasAttribute("href")) {
// 		link2.removeAttribute("href");
// 	} else {
// 		link2.setAttribute("href", "#twitter");
// 	}
// 	// if (!link2.hasAttribute("href")) {
// 	// 	link2.setAttribute("href", "#twitteer");
// 	// }
// 	// console.log(link1.hasAttribute("href"));
// 	// img.setAttribute("src", "./imgs/2.jpg");
// 	// console.log(img.getAttribute("src"));
// 	// console.log(img.getAttribute("alt"));
// 	// console.log(img.getAttribute("id"));
// 	// console.log(img.getAttribute("class"));
// 	// console.log(link1.getAttribute("href"));
// 	// link1.setAttribute("class", "jsClass");
// }
/** <p>Hello Angular Group</p> */
// p.innerHTML = "Hello Angular Group";
// console.log(p);

// p.setAttribute("class", "myP");
// p.setAttribute("id", "p1");
// var parent = document.getElementById("result");

// function addNewElement() {}

// var p = document.createElement("p");
// var button = document.createElement("button");

// button.innerHTML = "Show";
// var myText = document.createTextNode("Hello Angular Group");

// p.append("Hello Angular Group");

// parent.before(p);
// parent.after(p);
// console.log(result);
// document.body.append(p, button);

// var result = document.body.appendChild(p);
// console.log(result);
// document.body.appendChild(button);
/** */

// console.log(window);
// // alert("Allf");
// alert("this is an alert");
// var myWin;
// function openNewTab() {
// 	myWin = open("./about.html", "", "width=200,height=200");
// }
// function closeTab() {
// 	myWin.close();
// }
// function moveToTab() {
// 	myWin.moveTo(300, 300);
// }
// function moveByTab() {
// 	myWin.moveBy(-100, -100);
// }
// function resizeToTab() {
// 	myWin.resizeTo(400, 400);
// }
// function resizeByTab() {
// 	myWin.resizeBy(100, 100);
// }

// window.setTimeout(function () {
// 	open("./about.html");
// }, 3000);
// var i = 0;

// setInterval(function () {
// 	i++;
// 	console.log(i);
// }, 1000);
// var result = document.getElementById("result");
// var myInterval;
// var i = 0;
// function start() {
// 	myInterval = setInterval(function () {
// 		result.innerHTML = i++;
// 	}, 1000);
// }
// function end() {
// 	clearInterval(myInterval);
// }
/**---------------------------------- */
// var result = document.getElementById("result");
// function downloadLink() {
// 	result.style.display = "block";
// 	setTimeout(() => {
// 		result.innerHTML = "<a href='#google'>Link</a>";
// 	}, 3000);
// }
