// const sum = (numbers) => {
//   let total = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }

//   return total;
// }
const sum = (numbers) => numbers.reduce((accum, item) => {return accum + item})

/* ставит тире между словами */
// const hyphenate = (words) => {
//   let hyphenatedWords = "";

//   for (let i = 0; i < words.length; i++) {
//     if (hyphenatedWords === "") {
//       hyphenatedWords = words[i];
//     } else {
//       hyphenatedWords += `-${words[i]}`;
//     }
//   }

//   return hyphenatedWords;
// }
const hyphenate = (words) => {
  let hyphenateWords = words.reduce((accum, item) => {return accum + '-' + item})
  return hyphenateWords
}