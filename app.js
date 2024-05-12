// Array
const foodItem = ["apple", "Tomato", "potato", "chips"];
console.log(foodItem);
// Array Method
// push(): add to end
foodItem.push("mango", "burger");
console.log(foodItem);
// pop(): delete from end & return
foodItem.pop();
console.log(foodItem);
// concat(): joins multiple arrays & return result
let marvelHeroes = ["spiderman", "thor", 'ironman'];
let dc_heroes = ['superman', 'batman'];
let heroes = marvelHeroes.concat(dc_heroes);
console.log(heroes);
// unshift(): add to start
marvelHeroes.unshift("antman");
console.log(marvelHeroes);
// shift(): delete from start & return
marvelHeroes.shift();
console.log(marvelHeroes);
export {};
