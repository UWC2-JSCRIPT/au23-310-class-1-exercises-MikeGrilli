/**
 * 
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
const THIRTEEN_INCH_PiZZA_PRICE  = 16.99
const SEVENTEEN_INCH_PIZZA_PRICE  = 19.99 
const THIRTEEN_INCH_PiZZA_RADIOUS = 13
const SEVENTEEN_INCH_PIZZA_RADIOUS = 17

console.log(`FIND AREA`)
let getYouPizzasArea = (pizza) => {
    let getAreaOfYourPizza = Math.ceil(Math.PI * pizza * pizza)
    return `The "AREA" of a ${pizza} inch pizza is ${getAreaOfYourPizza}`
 }
 
 console.log(getYouPizzasArea(THIRTEEN_INCH_PiZZA_RADIOUS))
 console.log(getYouPizzasArea(SEVENTEEN_INCH_PIZZA_RADIOUS))


// 2. What is the cost per square inch of each pizza?
console.log(` `)
console.log(`FIND PRICE PER SQUARE INCH`)
const pricePerSquareInch = (pizza, price) => {
    let getAreaOfYourPizza = Math.ceil(Math.PI * pizza * pizza)
    let getpricePerSquareinch = Math.ceil(getAreaOfYourPizza / price)
    return `The price of ${pizza} inch pizza is $${getpricePerSquareinch}`
}

console.log(pricePerSquareInch(THIRTEEN_INCH_PiZZA_RADIOUS,THIRTEEN_INCH_PiZZA_PRICE))
console.log(pricePerSquareInch(SEVENTEEN_INCH_PIZZA_RADIOUS,SEVENTEEN_INCH_PIZZA_PRICE))

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
console.log(` `)
console.log(`RANDOM CARD 1-13`)
let drawRandomCard = () => {
  let card = Math.ceil(Math.random() * 13)
  console.log(`You drew: ${card}`)
}
drawRandomCard()
// 4. Draw 3 cards and use Math to determine the highest
// card

console.log(` `)
console.log(`DARW 3: DETERMINE HIGHEST CARD`)
let getLargestNumberBack = () => {
    let card1 = Math.ceil(Math.random() * 13)
    let card2 = Math.ceil(Math.random() * 13)
    let card3 = Math.ceil(Math.random() * 13)
    let highestCard = Math.max(card1,card2,card3)
    console.log(`Cards: ${card1}, ${card2}, ${card3}`)
    console.log(`The hightest card is: ${highestCard}`)
  }

  getLargestNumberBack()
/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
console.log(` `)
console.log(`Mailing address`)
let firstName = `Mike`
let LastName = `Grilli`
let streetAddress = `2428 NW Market St`
let city = `Seattle`
let state = `WA`
let zipCode = `98107`

let mailingAddress = `
    ${firstName} ${LastName} \n\
    ${streetAddress} \n\ 
    ${city}, ${state} ${zipCode}`

console.log(mailingAddress)
// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring


/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const endDate = new Date(2019, 3, 1);
