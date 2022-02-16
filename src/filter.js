// const oddIntegers = (numbers) => {
//   const odds = [];

//   for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 === 1) {
//       odds.push(numbers[i]);
//     }
//   }

//   return odds;
// }
const oddIntegers = (numbers) => numbers.filter(item => {return item % 2 === 1})

// const longStrings = (strings, minimumLength) => {
//   const longs = [];

//   for (let i = 0; i < strings.length; i++) {
//     if(strings[i].length >= minimumLength) {
//       longs.push(strings[i]);
//     }
//   }

//   return longs;
// }
const longStrings = (strings, minimumLength) => strings.filter((str) => {return str.length >= minimumLength})

// const getNotEmptyPhoneNumbers = (phoneNumbers) => {
//   const notEmpty = [];

//   for (let i = 0; i < phoneNumbers.length; i++) {
//     if(phoneNumbers[i].phone !== undefined) {
//       notEmpty.push(phoneNumbers[i]);
//     }
//   }

//   return notEmpty;
// }
const getNotEmptyPhoneNumbers = (phoneNumbers) => phoneNumbers.filter((item) => {return item.phone !== undefined})
