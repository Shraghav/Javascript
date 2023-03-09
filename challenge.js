
// 1. Create one player array for each team(variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players.For Bayern Munich(team 1) create one variable('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams(22 players)
// 4. During the game, Bayern Munich(team 1) used 3 substitute players.So create a new array('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd(called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names(NOT an array) and prints each of them to the console, along with the number of goals that were scored in total(number of player names passed in)
// 7. The team with the lower odd is more likely to win.Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.Then, call the function again with players from game.scored

// GOOD LUCK 😀
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 133,
        x: 3.25,
        team2: 6.5,
    },
};
// 1) team players name
const [players1, players2] = game.players;
console.log(players1, players2);

// 2)goal keeper and team name
const [a, ...others1] = players1;
console.log(a, others1);
const [b, ...others2] = players2;
console.log(b, others2);

// 3) All players
const allPlayers = [...players1,...players2];
console.log(allPlayers);

//4) substitute players
const playersFinal = [...players1,[',Thiago', 'Coutinho', 'Perisic']]
console.log(playersFinal);

//5) object 
const { team1, x:draw, team2 } = game.odds; //{odds:team1,x:draw,team2}=games;
console.log(team1, team2, draw);

//6) function 
const printGoal = function (...all) {
    console.log(all);
    console.log(`${all.length} goals were scored`)
    
}
// printGoal('Davies','Muller','Lewandowski','Kimmich');
printGoal(...game.scored);

//7)Team winning
team1<team2 && console.log("Team 1 is likely to win");
team1>team2 && console.log("Team 2 is likely to win");