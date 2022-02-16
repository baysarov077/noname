
describe('exclamations', () => {
  it('returns a new array with each string an exclamation mark added', () => {
    const greetings = ["hi", "hello", "howdy"]

    const loudGreetings = exclamations(greetings)
    expect(loudGreetings).toEqual(["hi!", "hello!", "howdy!"])
  });

  it('does not modify the input array', () => {
    const greetings = ["hi", "hello", "howdy"]
    exclamations(greetings)

    expect(greetings).toEqual(["hi", "hello", "howdy"]);
  });
});

describe('squareAll', () => {
  it('returns a new array with the square of each number', () => {
    const numbers = [2, 4, 6]

    const squares = squareAll(numbers)
    expect(squares).toEqual([4, 16, 36]);
  });

  it('does not modify the input array', () => {
    const numbers = [2, 4, 6]
    squareAll(numbers)

    expect(numbers).toEqual([2, 4, 6]);
  });
});

describe('firstLetters', () => {
  it('returns a new array with the first letter of each word', () => {
    const words = ["otters", "nighthawks", "bison"]

    const letters = firstLetters(words)
    expect(letters).toEqual(["o", "n", "b"]);
  });

  it('does not modify the input array', () => {
    const words = ["otters", "nighthawks", "bison"]
    firstLetters(words)
    expect(words).toEqual(["otters", "nighthawks", "bison"]);
  });
});
