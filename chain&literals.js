const weekDays = ['thu', 'fri', 'sat','sun'];

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

if (restaurant.openingHours && restaurant.openingHours.thu) {
    console.log(restaurant.openingHours.thu.open);
}

//with optional chaining

console.log( restaurant.openingHours?.mon?.open); //only if the opening hours exists it will move to next mon and only if mon exists open will be printed
console.log(restaurant.openingHours.fri?.open); 

const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat','sun'];

for (const day of days) {
    console.log(restaurant.openingHours[day]?.open ?? 'closed');
}

//methods usecase
console.log(restaurant.order?.(1,2) ?? 'Method does not exist');
console.log(restaurant.Date?.(1, 2) ?? 'Method does not exist');

//array use case
const users = [
    {
        name: 'Harish',//need to have some property name so that we can access easily
        dept:"AI&DS"
    }
]

console.log(users[0]?.name ?? 'Array not exists');