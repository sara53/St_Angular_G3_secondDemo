/**
 * == Obejct New Features
 * == Object.assign
 * == Object.keys
 * == Object.values
 * == Object.entries
 * -------- OOP in es6 --------
 * - Modulrity
 * - fetch
 */
// let keys = Object.keys(person);
// let values = Object.values(person);
// let entries = Object.entries(person);
// console.log(keys);
// console.log(values);
// console.log(entries);
// let person1 = {
// 	fname: "ali",
// 	lname: "Ahmed",
// 	color: "red",
// };

// let person2 = {
// 	age: 30,
// };
// Object.assign(person2, person1);
// console.log("Person 1", person1);
// console.log("Person 2", person2);

/**---------------- --------------- */
// function showDetails(options = {}) {
// 	let defaultValues = {
// 		fname: "default fname",
// 		lname: "default lname",
// 		age: "default age",
// 	};

// 	Object.assign(defaultValues, options);
// 	console.log(
// 		`fname : ${defaultValues.fname}, lname : ${defaultValues.lname}, age:${defaultValues.age}`
// 	);
// }

// showDetails();
// console.log("-------------");
// showDetails({
// 	fname: "mona",
// 	age: 30,
// 	lname: "ahmed",
// });

// console.log("-------------");
// showDetails({
// 	fname: "mona",
// });

// var fname = "mona";
// var lname = "ali";
// var myKey = "color";
// let person = {
// 	fname, // fname:fname, syntax suger
// 	lname,
// 	[myKey]: "red",
// 	display() {
// 		console.log("Hello from display");
// 	},
// };

// person.display();

/**----------- OOP in es6
 * static method in es6 and static member
 *
 *  --------- */

// var h1 = document.createElement("h1");
// var h2 = document.createElement("h2");

// class Product {
// 	#id; // private field
// 	constructor(_id = "", _productName = "", _price = "") {
// 		this.#id = _id; // syntac suger
// 		this.productName = _productName;
// 		this.price = _price;
// 	}

// 	discount() {
// 		return this.price * 0.2;
// 	}

// 	get getId() {
// 		return this.#id;
// 	}

// 	set setId(value) {
// 		this.#id = value;
// 	}
// }

// var product1 = new Product(1, "Book", 300);

// product1.setId = "new Id"; // set
// console.log(product1.getId); // get
// product1.setId("new id"); // set
// console.log(product1.getId()); // get
// console.log(product1.#id);
// var product2 = new Product(2, "Watch", 500);
// var product3 = new Product();
// product1.productName = "New Book"; // set
// console.log(product1.productName); // get
// h1.innerHTML = `Product Name  : ${product1.productName} ,
//  Price : ${product1.price}, offer :${product1.discount()} `;
// h2.innerHTML = `Product Name : ${product3.productName}, Price :    ${product2.price} $`;
// document.body.append(h1, h2);

// console.log(product1.discount());
// console.log(product2.discount());
// console.log(product3.discount());
/**----------------------------- */
// abstract class
// class Person {
// 	constructor(fname = "", lname = "", age = "") {
// 		if (this.constructor == Person) {
// 			throw " No Object";
// 		}

// 		this.fname = fname;
// 		this.age = age;
// 		this.lname = lname;
// 	}

// 	display() {
// 		throw "Method Not Implemented";
// 	}
// }

//  inheritance ,, subClass [child], superClass(Parent Class)
// class User extends Person {
// 	constructor(fname, lname, age, password) {
// 		super(fname, lname, age);
// 		this.password = password;
// 	}

// 	// override -- Polymorphism
// 	display() {
// 		console.log(`${this.fname} ${this.lname} ${this.password}`);
// 	}
// 	showPassword() {
// 		console.log(this.password);
// 	}
// }
// class User extends Person {
// 	constructor(fname, lname, age, password) {
// 		super(fname, lname, age);
// 		this.password = password;
// 	}

// 	// override -- Polymorphism
// 	display() {
// 		console.log(`${this.fname} ${this.lname} ${this.password}`);
// 	}
// 	showPassword() {
// 		console.log(this.password);
// 	}
// }

// let myUser = new User("Hoda", "ali", 30, "HODAali");

// myUser.display(); //
// myUser.showPassword();

/**
 * then catch
 * async await
 */
// Pending
// success
// fail
// function getAllUsers() {
// 	fetch("https://jsonplaceholder.typicode.com/users")
// 		.then(function (response) {
// 			return response.json();
// 		})
// 		.then((data) => {
// 			console.log(data);
// 		})
// 		.catch(function (error) {
// 			console.log(error);
// 		});
// }

// async function execute() {
// 	try {
// 		let response = await fetch("https://jsonplaceholder.typicode.com/users");
// 		let data = await response.json();
// 		console.log(data);
// 	} catch (error) {
// 		console.log("error");
// 	}
// }

// import showDetails, { add, square } from "./main.js"; // naming

// import test from "./main.js"; // export default
// import * as all from "./main.js";

// console.log(all.add(3, 4));
// console.log(all.square());

// all.default();
/** export
 * export naming
 * export default
 *
 *
 */
