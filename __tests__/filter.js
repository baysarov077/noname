describe('oddIntegers', () => {
  it('returns a new collection with any odd integers', () => {
    const numbers = [3, 4, 7, 9, 10, 16]

    const odds = oddIntegers(numbers)
    expect(odds).toEqual([3, 7, 9]);
  });

  it('does not modify the input array', () => {
    const numbers = [1, 2]
    oddIntegers(numbers)

    expect(numbers).toEqual([1, 2]);
  });
});

describe('longStrings', () => {
  it('returns a new collection with any strings with a minimum length', () => {
    const fruit = ["apple", "pear", "orange", "peach", "kiwi"]
    const minimumLength = 5;

    expect(longStrings(fruit, minimumLength)).toEqual(["apple", "orange", "peach"]);
  });

  it('does not modify the input array', () => {
    const fruit = ["apple", "pear"]
    longStrings(fruit, 5);

    expect(fruit).toEqual(["apple", "pear"]);
  });
});

describe('getNotEmptyPhoneNumbers', () => {
  it('returns not empty items', () => {
    const phones = [
      { phone: '+79999999999', name: 'на девятке' },
      { phone: undefined, name: 'не брать' },
      { phone: '+78888888888', name: 'Абу Электрик' },
    ];

    const notEmpty = getNotEmptyPhoneNumbers(phones);

    expect(notEmpty).toEqual([
      { phone: '+79999999999', name: 'на девятке' },
      { phone: '+78888888888', name: 'Абу Электрик' }
    ])
  });

  it('does not modify the input array', () => {
    const phones = [
      { phone: '+79999999999', name: 'на девятке' },
      { phone: undefined, name: 'не брать' },
      { phone: '+78888888888', name: 'Абу Электрик' },
    ];

    getNotEmptyPhoneNumbers(phones);

    expect(phones).toEqual([
      { phone: '+79999999999', name: 'на девятке' },
      { phone: undefined, name: 'не брать' },
      { phone: '+78888888888', name: 'Абу Электрик' },
    ])
  });
});
