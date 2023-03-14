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

const rest = new Map();
rest.set('name', 'Kiskinda');
rest.set(1, 'ARC');
console.log(rest.set(2, 'Priya Mess')); 

//chaining
rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 20)
    .set(true, 'We are open')
    .set(false, 'we are closed');
console.log(rest.get('categories'));
console.log(rest.get(true));

const time = 2;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//methods in maps
console.log(rest);
console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
rest.clear();
// console.log(rest);

//array as mapkey
const arr = [1, 2];
rest.set(arr, 'keyarray');
console.log(rest);

//querselector with maps
rest.set(document.querySelector('.cool'),'Heading');
console.log(rest);

console.log(rest.get(arr)); //not retrieve rest if we write the value straightly


//map iteration

//this is prefereable than set if we have more values
const iterate = new Map([
    ['question', 'What is the best programming language in world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct',true],
    [true, 'correct'],
    [false, 'Wrong'],
])
console.log(iterate);

//objects to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//iterations

console.log(iterate.get('question'));
for (const [a, b] of iterate) { //a,b --> key-value pair
    if (typeof a == 'number') {
        console.log(`Option ${a}: ${b}`);
    }
}

const answer = Number(prompt('Your answer:'));
console.log(answer);
console.log(iterate.get(3))
//using number
console.log(iterate.get(iterate.get('correct'))); 

//map to array
console.log([...iterate]);
console.log(iterate.keys());
console.log(iterate.values());