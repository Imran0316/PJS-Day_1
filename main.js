// document.write("hello world")
// let x = 5;
// x += ++x + x++;
// document.write(x)


// console.log(0 || "hello")

// WORD PROBLEMS NO #1 (Addition and Subtraction)
//1. Addition and Subtraction: John has 5 apples, and he buys 7 more apples. He then eats 3 apples. How many apples does he have left?
let nApples = 5;
let mBuys   = 7;
let eatApples = 3;

let tApples = nApples + mBuys;
let leftApple = tApples - eatApples;

document.write(` QUESTION #1  (Addition and Subtraction)<br><br>  Total number of Apple: ${tApples} <br> Eated Apples: ${eatApples} <br> Remaining Apples: ${leftApple} <br><br>` );


// WORD PROBLEMS NO #2
// 2. Multiplication: Sarah is buying packs of pencils. Each pack contains 12 pencils. She buys 4 packs. How many pencils does she have in total?



let tPencilsInOnePack = 12;
let tPencilPack = 4

let TquanPencil = 4*12

document.write(`QUESTION #2 (Multiplication) <br><br>  Number of pencils in One pack : ${tPencilsInOnePack} <br> Number of packs: ${tPencilPack} <br> Total Number of pecils: ${TquanPencil} <br><br> `)

// WORD PROBLEMS NO #3
// Division: There are 30 students in a class, and the teacher wants to divide them into groups of 5. How many groups will there be?

let tStu = 30
let groupSize = 5

let numGroups = tStu/groupSize

document.write(`QUESTION #3 (Division) <br><br>  Total Number of students in class: ${tStu} <br> Number of students in each group : ${groupSize} <br> Number of groups: ${numGroups} <br><br>`)

// WORD PROBLEMS NO #4
//Modulus: A box can hold 8 books. If you have 35 books, how many books will be left over after filling as many boxes as possible?

let oneBOXhold = 8
let tNumBooks  = 35

let RemainBooks = tNumBooks%oneBOXhold

document.write(`QUESTION #4 (Modulus)<br><br> Number od books hold by one box: ${oneBOXhold} <br> Total number of books: ${tNumBooks} <br> Remainig books after filling boxes as possible: ${RemainBooks} <br><br>`)

// WORD PROBLEMS NO #5
// Exponentiation: A machine doubles its output every hour. If it starts with 1 unit of output, how much will it produce after 5 hours?


// WORD PROBLEMS NO #6
// Increment: A counter starts at 0. It increments by 1 each second. What will be the value of the counter after 10 seconds?


// WORD PROBLEMS NO #7
// Decrement: A timer starts at 100 seconds. It decrements by 2 seconds every tick. How many seconds are left after 10 ticks?


// WORD PROBLEMS NO #8
// Compound Assignment (Addition): A person has $50 and earns $20 each day. How much money will they have after 5 days?

let PersonHas = 50;
let EarnEachDay = 20;
let NumOfDays = 5;

let tAfterFiveDays = NumOfDays*EarnEachDay + PersonHas ;

document.write(`QUESTION #8 (Compound Assignment) <br><br> A person has: ${PersonHas}$ <br> Earning of each day: ${EarnEachDay} <br> Number of days: ${NumOfDays} <br> Total Money after five days: ${tAfterFiveDays} <br><br> `)