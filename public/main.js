const numberOfIcePopsPerDay = 8
const fullName = 'Daniel Labios'
console.log(
  `${fullName} has eaten ${numberOfIcePopsPerDay} ice pops everyday for the past 4 months.`
)
let userName = window.prompt(
  'You won a brand new Surface Pro 4! Give us your name to claim your prize:'
)
let selectTheShiftyDeal = window.prompt(
  `Hello ${userName}, we now are in possession of your passport! If you want it back, send 20 kitties to your nearest children hospital. Type Yes and hit Okay to continue.`
)

let numberOfKitties = window.prompt('How many kitties will you be sending?')
let numberOfChildren = window.prompt(
  'How many children are at the Children Hospital? (make it less than kitties for better results)'
)
let firstOperand = parseFloat(numberOfKitties)
let secondOperand = parseFloat(numberOfChildren)
let sum = firstOperand + secondOperand
let difference = firstOperand - secondOperand
let product = firstOperand * secondOperand
let quotient = firstOperand / secondOperand
let remainder = firstOperand % secondOperand
console.log(
  `Thank you for your patronage. You managed to change ${sum} lives today! However, ${difference} kitties do not have a forever servant yet. Oh, we can give each child ${quotient} kitties, and ${remainder} children can have an extra kitty. We left your passport at ${product} meme st.`
)
let numbers = [
  4,
  97,
  16,
  59,
  31,
  24,
  7,
  85,
  18,
  27,
  73,
  58,
  29,
  33,
  75,
  40,
  57,
  29,
  58,
  80,
  12,
  44,
  20,
  70,
  90,
  84,
  33,
  90,
  22,
  95,
  29,
  57,
  22,
  50,
  41,
  15,
  75,
  31,
  72,
  7,
  59,
  65,
  42,
  59,
  52,
  22,
  9,
  32,
  43,
  70,
  31,
  43,
  96,
  88,
  95,
  87,
  21,
  44,
  90,
  92,
  60,
  59,
  68,
  88,
  97,
  32,
  10,
  68,
  66,
  40,
  44,
  61,
  60,
  82,
  25,
  40,
  10,
  37,
  30,
  76,
  40,
  56,
  32,
  6,
  70,
  57,
  23,
  56,
  57,
  10,
  99,
  45,
  40,
  31,
  66,
  29,
  54,
  60,
  60,
  50,
]
let smallest = numbers[0]
let largest = numbers[0]
sum = 0
for (let index = 0; index < numbers.length; index++) {
  if (smallest > numbers[index]) {
    smallest = numbers[index]
  }
  if (largest < numbers[index]) {
    largest = numbers[index]
  }
  sum = sum + numbers[index]
}
let average = sum / numbers.length

console.log(
  `smallest: ${smallest} largest: ${largest} sum: ${sum} average: ${average}`
)
