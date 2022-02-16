
describe('sum', () => {
  it('sums the numbers', () => {
    const numbers = [1, 1, 2, 3, 5]

    const total = sum(numbers);
    expect(total).toBe(12)
  });

  it('does not modify the input array', () => {
    const numbers = [1, 1, 2, 3, 5]
    sum(numbers)

    expect(numbers).toEqual([1, 1, 2, 3, 5]);
  });
});

describe('hyphenate', () => {
  it('concatenates the strings with hyphens between the words', () => {
    const words = ["what", "have", "you"]

    const hyphenatedWords = hyphenate(words)
    expect(hyphenatedWords).toBe("what-have-you");
  });

  it('should ', () => {
    const words = ["into", "code"];
    hyphenate(words)

    expect(words).toEqual(["into", "code"]);
  });
});
