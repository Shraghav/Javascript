const weekDays = ['thu', 'fri', 'sat', 'sun'];

const openingHours = {
    [weekDays[0]]: {
        open: 12,
        close: 22,
    },
    [weekDays[1]]: {
        open: 11,
        close: 23,
    },
    [weekDays[2]]: { //here we can also have any other manipulattion
        open: 10, // Open 24 hours
        close: 24,
    },
    [weekDays[3]]: {
        open: 0,
        close: 20,
    }
}
// console.log(openingHours.thu);
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (start, end) {
        return [this.starterMenu[start], this.mainMenu[end]];
    },
    openingHours,
    orderDelivery: function ({ start, end, address, time }) {
        console.log(`Order received!! You ordered ${this.starterMenu[start]} and ${this.mainMenu[end]} and it will be delivered at ${address} exactly at ${time}`);
    },
    orderPasta(ing1, ing2, ing3) { //here we have the option not to mention the function 
        console.log(`Pasta with 3 ingredients ${ing1},${ing2},${ing3}`);
    },
    orderPizza: function (mainIngredient, ...otherIngredient) {
        console.log(mainIngredient, otherIngredient);
    }
};

//object names
const properties = Object.keys(openingHours);
let openStr = `We are open on ${properties.length} days:`
for (const day of properties) {
    openStr += `${day} `;
}
console.log(openStr);

//object values
const values = Object.values(openingHours);
console.log(values);

//entries object
const entries = Object.entries(openingHours);
console.log(entries); 
//destructuring (also for values such as open and close)
for (const [key,{open,close}] of entries) { 
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}