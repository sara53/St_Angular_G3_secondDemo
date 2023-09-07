// var fname = "mona"; // string

// fname = "ali";

// fname = "ola";
// // fname = 10;
// // fname = true;
// console.log(fname);
/**
 * string
 * number
 * boolean
 * undefined
 * null
 * any
 *
 *
 */

// var fname: string = "mona";

// var fname: boolean; // string
// fname = true;
// fname = "alii";
// console.log(fname);
// fname = 10; //
// fname = true; // reassign
// console.log(fname);

// fname = "alaa";

// // fname = 10; // error
// fname = true;

// console.log(fname);

// type stringOrNumber = string | number;
// var fname: stringOrNumber = "ali";
// fname = true; //
// console.log(fname);
// console.log("----------------------");
// type stringOrBoolean = string | number;
// var arr: stringOrBoolean[] = ["ali"];

// var fname: stringOrBoolean = 10;

// arr.push("alaa");
// arr.push(20);
// arr.push("ahmed");
// arr.push("ali");
// arr.push(20);
// arr.push(true); // error
// console.log(arr);
/**------------------------- */

// let person: { fname: string; lname: string } = { fname: "ali", lname: "ahmed" };

// // person.fname = 10; // error
// person.lname = true;
// console.log(person);

// let products: { id: number; productName: string; price: number }[] = [];

// products.push({ id: 20, productName: "book", price: 300 }); // error

// console.log(products);
/**-------------
 * tuble
 * == functions
 * -- classes
 * -- inhertance
 * -- interface
 * ------------- */

// let arr: [string, number] = ["mona", 20]; // tuble

// function add(x: number, y: number, ...rest: string[]): void {
// 	console.log(rest);
// }

// add(3, 4, "mona", "ali");
// let result = add(2, 3);
// console.log(result);

// function add(x?: number, y?: number) {
// 	if (x && y) {
// 		return x + y;
// 	}

// 	return "No params";
// }

// add(); // error

// add();
// add(2);
// add(2, 4);
// add(2, 4, 7); // error

// let studentData: [string, number] = ["mona", 30];
// function showDetails(fname: string, age: number) {
// 	console.log(fname, age);
// }

// showDetails(...studentData); // error

/**------------------ */
// class Person {
// 	// public fname: string;
// 	// private age: number;
// 	// constructor(fname: string, age: number) {
// 	// 	this.fname = fname;
// 	// 	this.age = age;
// 	// }

// 	constructor(public fname: string, private age: number) {}
// 	set setAge(value: number) {
// 		this.age = value;
// 	}

// 	get getAge() {
// 		return this.age;
// 	}
// }

// let p1 = new Person("ali", 45);

// p1.setAge = 20;
// console.log(p1.getAge);
/**------------------- */

// class Person {
// 	constructor(public fname: string, public age: number) {}
// 	display() {
// 		console.log(`${this.fname} : ${this.age}`);
// 	}
// }

// class User extends Person {
// 	constructor(fname: string, age: number, public password: string) {
// 		super(fname, age);
// 	}
// 	display(): void {
// 		console.log(`fname =${this.fname} , Password= ${this.password}`);
// 	}

// 	showDetails() {
// 		console.log("Hello from show");
// 	}
// }

// var myUser = new User("ali", 40, "aliAHMED");
// myUser.display();

// interface Iproduct {
// 	id: number;
// 	productName: string;
// 	price: number;
// 	imgURL?: string;
// }

// let products: Iproduct[] = [
// 	{ id: 30, productName: "Book", price: 200 },
// 	{ id: 10, productName: "Watch", price: 100 },
// ];

// class Product implements Iproduct {
// 	constructor(
// 		public id: number,
// 		public productName: string,
// 		public price: number
// 	) {}
// }

// var p1 = new Product(1, "Book", 300);

// console.log(p1);

/** ---------------------
 * 1-install nodejs
 * 2-install typescript
 * 3-define your type
 * 4- define array accept string, numbers
 * 5-interface Iempolyee
 *      -- id
 *      -- name
 *      -- salary
 *      -- address
 * 6- create class employee implement iemployee
 *      -- overtime --> salary * 20%
 *
 */
