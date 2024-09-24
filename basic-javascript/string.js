const name = "vivek";
const number = 45;    

// console.log(name + number + " Value");

console.log(`hey ${name} i have ${number} numbers of output`);


const gameName = new String('vivek14');
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4)); // Get the postion or the text it means what ever in the 4 it will be there
// console.log(gameName.indexOf("i")); // It will be display the text postion and also if there is no any text found then output will be -1 

const newStringGame = gameName.substring(0, 4);
// console.log(newStringGame);

const anotherGame = gameName.slice(-10, 5);
// console.log(anotherGame);

// trim
// 
const oneString = "    vivek   ";
// console.log(oneString);
// console.log(oneString.trim());

// replace
const gameUrl = "https://vvkgame%20new.com"
// console.log(gameUrl.replace('%20', '-'));

// includes means to find if its find then true other wise false
// console.log(gameUrl.includes('game'));

// split
const gameSplit = new String("vivek-14-08-2001");
// console.log(gameSplit.split('-'));

const newLine = "I have a book which i collected from vvk yesterday."

// wordcut
const wordCut = newLine.split(' ');
console.log(wordCut[3]);

// character cut
const charCut = newLine.split('');
console.log(charCut[2]);

// copy line
const copyLine = newLine.split();
console.log(copyLine);