describe('finding a number under a limit', () => {
  it('returns the first number under the given limit', () => {
    const limit = 10;
    const numbers = [13, 21, 7, 0, 11, 106];
    const foundNumber = firstUnder(numbers, limit);

    expect(foundNumber).toBe(7);
  });

  it('returns undefined if no number is under the limit', () => {
    const limit = 0;
    const numbers = [1, 2, 3];
    const foundNumber = firstUnder(numbers, limit);

    expect(foundNumber).toBeUndefined();
  });

  it('does not modify the input array', () => {
    const limit = 10;
    const numbers = [13, 21, 7, 0, 11, 106];
    const foundNumber = firstUnder(numbers, limit);

    expect(numbers).toEqual([13, 21, 7, 0, 11, 106]);
  });
});

describe('finding a string starting with a letter', () => {
  it('returns the first string starting with a given letter', () => {
    const letter = "s"
    const cohortNames = ["otters", "nighthawks", "sea lions", "mantises", "salamanders"]

    const foundString = startsWith(cohortNames, letter);

    expect(foundString).toBe('sea lions');
  });

  it('returns undefined if no string starts with a given letter', () => {
    const letter = "z"
    const cohortNames = ["otters", "nighthawks", "sea lions", "mantises", "salamanders"]

    const foundString = startsWith(cohortNames, letter)

    expect(foundString).toBeUndefined();
  });

  it('does not modify the input array', () => {
    const letter = "s"
    const cohortNames = ["otters", "nighthawks", "sea lions", "mantises", "salamanders"]

    const foundString = startsWith(cohortNames, letter);

    expect(cohortNames).toEqual(["otters", "nighthawks", "sea lions", "mantises", "salamanders"]);
  });
});
