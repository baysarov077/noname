/* добавляет восклицательный знак в конец каждого элемента массива */
// const exclamations = (strings) => {
//   const loudStrings = [];

//   for (let i = 0; i < strings.length; i++) {
//     loudStrings.push(strings[i] + "!");
//   }

//   return loudStrings;
// }

const exclamations = (strings) => strings.map((item) => {return item + '!'})

/* преобразует все числа из массива в квадрат */
// const squareAll = (numbers) => {
//   const squares = [];

//   for (let i = 0; i < numbers.length; i++) {
//     squares.push(numbers[i] * numbers[i]);
//   }

//   return squares;
// }
const squareAll = (numbers) => numbers.map((item) => {return item * item})

/* заменяет все слова в массиве на их первые буквы */
// const firstLetters = (words) => {
//   const letters = []

//   for (let i = 0; i < words.length; i++) {
//     letters.push(words[i][0]);
//   }

//   return letters
// }
const firstLetters = (words) => words.map((item) => {return item[0]})
