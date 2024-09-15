


// // strings: concatenate, template leteral 
// const age = 31;
// const user = "Elon";

// // ("Hello Elon, your age is 31. nice to meet you.");

// function doSomething() {
//     console.log("hi");
//     return 21;
// }

// // E6 String template literal. ``
// // interpolate (Insert): expression value


// const userName = prompt("Enter your name");
// const finalStr = `Hi ${userName}, nice to meet you.`;
// console.log(finalStr); 

// ternary (3) Operator, expression 
// const a = true ? "1" : "0";
// console.log(a);

// user age
// age>18 ? major : minor
// const userAge = prompt("Enter your age");
// console.log(userAge);

// const legalStatus = userAge>18 ? "Major" : "Minor";
// console.log(legalStatus); 

// const testStr = "Hello"
// let x;
// x = testStr; 
// console.log(x[testStr.length -1]); 

// JS. Collections
// // Array & Objects
// const a = [
//     [1, 2, 3],
//     [4, 5, 6],
// ];
// console.log(a[1][1]);

// /
// step 1 - covert string to array (.split)
// step 2 - reverse to array (.reverse())
// step 3 - convert the array back to string (.join())
// step 4 - return the reverse string (.return)
// */

// function reverse(string) {
//     const inputArr = string.split("");
//     inputArr.reverse();
//     const reversStr = inputArr.join("");
//     return reversStr;
// }
// const output = reverse("apple-banana-orange-grapes-mango");
// console.log(output); 

// /
// step 1 - covert number to string
// step 2 - convert string to array
// step 3 - reverse to array
// step 4 - convert the reversed array to string
// step 5 - convert the string back to a number
// step 6 - return the reversed number
// */

// output (12) => 21 (number)
// function reverseNum(number){
// const inpitStr = string(number);
// const inputArr = inputStr.split("");
// inputArr.reverse();
// const reversStr = inputArr.join("");
// return reversStr; 
// }
// console.log(number)

// const vegitable = ("Tamoto, Cabage, Potato, Onion").split(",");
// for (let i =0; i<5; i++){
//     console.log(vegitable[i]);
// }

const vegitable = ("Tamoto, Cabage, Potato, Onion").split(",");
console.log(vegitable);

vegitable.splice(1,1);
console.log(vegitable);