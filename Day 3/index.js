// Activity 1
// if else statements
console.log("Activity 1 :");

let p = 10;
if (p >= 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

const age = 19;
if (age >= 18) {
  console.log("person is eligible .");
} else {
  console.log("person is not eligible .");
}

// Activity 2
// nested if else statements
console.log("Activity 2 :");

let a = 10;
let b = 20;
let c = 30;

if ((a == b) == c) {
  console.log("all are equal");
} else if (a > b && a > c) {
  console.log("a is greater number :", a);
} else if (b > a && b > c) {
  console.log(" b is greater :", b);
} else {
  console.log("c is greater :", c);
}

// Activity 3
// Switch case
console.log("Activity 3 :");
let day = 7;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("invalid day");
}



let marks=80;

switch (true) {
    case (marks>=90):
      console.log("A");
      break;
    case (marks>=80):
      console.log("B");
      break;
    case (marks>=70):
      console.log("C");
      break;
    case (marks>=50):
      console.log("D");
      break;
    case (marks<35):
      console.log("F");
      break;
    }


// Activity 4
// Conditional ternary operator
console.log("Activity 4 :")

let e=4;
e%2==0? console.log("even") : console.log("odd");



// Activity 5
// Combining conditions
console.log("Activity 5 :")


let year =2024;

if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    console.log("leap year:", year);
} else {
    console.log("not a leap year:", year);
}
