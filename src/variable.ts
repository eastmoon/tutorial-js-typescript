// declare variabe
// String
let message: string = 'Hello World';
console.log("----- String -----");
console.log(`Message : ${message}`);

// Boolean
let isDone: boolean = false;
console.log("----- Boolean -----");
console.log(`isDone : ${isDone}`);

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log("----- Number -----");
console.log(`decimal : ${decimal}`);
console.log(`hex : ${hex}`);
console.log(`binary : ${binary}`);
console.log(`octal : ${octal}`);

// Array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [4, 5, 6];
console.log("----- Array -----");
list1.forEach( (v, i) => console.log(`Array 1 : ${i} : ${v}`));
list2.forEach( (v, i) => console.log(`Array 2 : ${i} : ${v}`));

// Tuple
// assign with type in array item.
let x: [string, number];
x = ["hello", 10];
// This will error, because first value need string, and second value need number.
// x = [10, "hello"];
// This will error, because tuple defined size 2, and assign third value into tuple.
// x[3] = "world"; //
// This will error, because retrieve fifth value from tuple object.
// console.log(x[5].toString());
console.log("----- Tuple -----");
console.log(`tuple value : ${x[0]}, tpye: ${typeof x[0]}`);
console.log(`tuple value : ${x[1]}, tpye: ${typeof x[1]}`);

// Enum
// ref : This comparison appears to be unintentional because the types 'X' and 'Y' have no overlap, https://bobbyhadz.com/blog/typescript-this-condition-will-always-return-since-types
enum Color {
  Red = 0,
  Green = 1,
  Blue = 2,
}
let c: Color = Color.Green;
console.log("----- Enum -----");
( (c as Color) === Color.Red ) ? console.log("Color type correct") : console.log("Color type wrong");
( (c as Color) === Color.Green ) ? console.log("Color type correct") : console.log("Color type wrong");
( (c as Color) === Color.Blue ) ? console.log("Color type correct") : console.log("Color type wrong");

// Any
// ref : TypeScript Special Types, https://www.w3schools.com/typescript/typescript_special_types.php
// any can be a useful way to get past errors since it disables type checking, but TypeScript will not be able provide type safety, and tools which rely on type data, such as auto completion, will not work.
// if when safety type-check, use unknown type, which unknown is a similar, but safer alternative to any.
console.log("----- Any -----");
let notSure: any = 4;
console.log(`any value : ${notSure}, tpye: ${typeof notSure}`);
notSure = "maybe a string instead";
console.log(`any value : ${notSure}, tpye: ${typeof notSure}`);

// void, undefined, null
// ref : TypeScript Null & Undefined, https://www.w3schools.com/typescript/typescript_null.php
console.log("----- undefined and null -----");
let value: string | undefined | null = null;
console.log(typeof value);
value = 'hello';
console.log(typeof value);
value = undefined;
console.log(typeof value);
// This will error, because union type only defined string, undefined, null type could assign it.
// value = 1234;
