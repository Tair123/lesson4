let number = 1;
let string = 'hello js';
let isJuiceOragne = false;
let apples = null;
let applesAmount = undefined;
let drink = {
  favoriteOne: 'apple juice',
  numberOfCups: 0,
  isDrinkCold: false,
}
let symbol = Symbol('symbol');
let bigInt = 100n;

console.log(Number(number), Boolean(number), String(number));
console.log(Number(string), Boolean(string), String(string));
console.log(Number(isJuiceOragne), Boolean(isJuiceOragne), String(isJuiceOragne));
console.log(Number(apples), Boolean(apples), String(apples));
console.log(Number(applesAmount), Boolean(applesAmount), String(applesAmount));
console.log(Number(drink), Boolean(drink), String(drink));
console.log(Boolean(symbol), String(symbol));
console.log(Number(bigInt), Boolean(bigInt), String(bigInt));