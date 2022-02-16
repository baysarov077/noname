// ищем число в массиве numbers, которое меньше чем limit
// const firstUnder = (numbers, limit) => {
//   for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] < limit) {
//       return numbers[i];
//     }
//   }

//   return undefined
// }
const firstUnder = (numbers, limit) => numbers.find((item) => {return item < limit})

// ищет строку в массиве strings, которая начинается с указанной буквы
// const startsWith = (strings, letter) => {
//   for (let i = 0; i < strings.length; i++) {
//     if(strings[i][0] === letter) {
//       return strings[i];
//     }
//   }

//   return undefined;
// }

const startsWith = (strings, letter) => strings.find((item) => {return item[0] === letter})
