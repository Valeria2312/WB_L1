import getWord from "./4_GetWord.js";

const cases = [" сообщение", " сообщения", " сообщений"];
const cases1 = [" пользователь", " пользователя", " пользователей"];

console.log(`112 ${getWord(112, cases)}`);
console.log(`12 ${getWord(12, cases)}`);
console.log(`1 ${getWord(1, cases)}`);
console.log(`1024 ${getWord(1024, cases1)}`);
console.log(`1026 ${getWord(1026, cases1)}`);
console.log(`121 ${getWord(121, cases1)}`);
