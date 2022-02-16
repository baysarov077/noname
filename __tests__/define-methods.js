describe('containingQuotes', () => {
  it('returns a new array containing the sentences with quotes in them', () => {
    const sentences = ['Someone yelled, "Oi!"', 'They went thataway!', 'They sang, "Oo-ee-oo ..."']

    const sentences_with_quotes = containingQuotes(sentences)
    expect(sentences_with_quotes).toEqual(['Someone yelled, "Oi!"', 'They sang, "Oo-ee-oo ..."']);
  });

  it('does not match delimit quotes with single quotes', () => {
    const sentences = ["Someone yelled, 'Oi!'"]

    const sentences_with_quotes = containingQuotes(sentences)
    expect(sentences_with_quotes).toEqual([]);
  });

  it('does not modify the input array', () => {
    const sentences = ['Someone yelled, "Oi!"', 'They went thataway!', 'They sang, "Oo-ee-oo ..."']
    containingQuotes(sentences)

    expect(sentences).toEqual(['Someone yelled, "Oi!"', 'They went thataway!', 'They sang, "Oo-ee-oo ..."']);
  });

});


describe('balance', () => {
  it('returns the remaining balance after subtracting all expenses from the starting balance', () => {
    const expenses = [100, 100, 50, 100]
    const starting_balance = 500

    const remaining_balance = balance(expenses, starting_balance)
    expect(remaining_balance).toBe(150);
  });

  it('can return a negative balance', () => {
    const expenses = [100, 100, 50, 100]
    const starting_balance = 300

    const remaining_balance = balance(expenses, starting_balance)
    expect(remaining_balance).toBe(-50);
  });

  it('does not modify the input array', () => {
    const expenses = [100, 100, 50, 100]
    const starting_balance = 500
    balance(expenses, starting_balance)

    expect(expenses).toEqual([100, 100, 50, 100]);
  });
});

describe('finding a word with an even number of characters', () => {
  it('returns the first word with an even number of characters', () => {
    const words = ["a", "be", "cat", "disc"]

    const found_word = evenLengthWord(words)

    expect(found_word).toBe("be");
  });

  it('does not find empty strings', () => {
    const words = ["", "a", "be", "cat", "disc"]

    const found_word = evenLengthWord(words)

    expect(found_word).toBe("be");
  });

  it('returns undefined if no word has an even number of characters', () => {
    const words = ["a", "I"]

    const found_word = evenLengthWord(words)

    expect(found_word).toBeUndefined();
  });

  it('does not modify the input array', () => {
    const words = ["a", "be", "cat", "disc"]
    evenLengthWord(words)

    expect(words).toEqual(["a", "be", "cat", "disc"]);
  });
});

describe('snippets', () => {
  it('returns a new array containing the first X words of each string followed by an ellipsis', () => {
    const sentences = ["One two three four.", "intocode is the best coding bootcamp."]
    const desired_word_count = 2

    const snipped_sentences = snippets(sentences, desired_word_count)
    expect(snipped_sentences).toEqual(["One two ...", "intocode is ..."])
  });

  it('defaults to three words ', () => {
    const sentences = ["One two three four.", "intocode is the best coding bootcamp."]

    const snipped_sentences = snippets(sentences)
    expect(snipped_sentences).toEqual(["One two three ...", "intocode is the ..."])
  });

  it('does not snip sentences with fewer words than the desired snippet word count', () => {
    const sentences = ["One two three four.", "Eins zwei drei vier."]
    const desired_word_count = 5

    const snipped_sentences = snippets(sentences, desired_word_count)
    expect(snipped_sentences).toEqual(["One two three four.", "Eins zwei drei vier."]);
  });

  it("does not modify the input array", () => {
    const sentences = ["One two three four.", "Eins zwei drei vier."]

    snippets(sentences)
    expect(sentences).toEqual(["One two three four.", "Eins zwei drei vier."]);
  });
});

describe('initials', () => {
  it('returns a new array containing the initials of each name', () => {
    const names = ["Eirene Roderick", "Barbara Foster", "Milan Penny"]

    const names_as_initials = initials(names)
    expect(names_as_initials).toEqual(["ER", "BF", "MP"]);
  });

  it('works with middle names', () => {
    const names = ["Eirene Rose Roderick"]

    const names_as_initials = initials(names)
    expect(names_as_initials).toEqual(["ERR"]);
  });

  it('capitalizes each initial', () => {
    const names = ["eirene roderick"]

    const names_as_initials = initials(names)
    expect(names_as_initials).toEqual(["ER"]);
  });

  it('does not modify the input array', () => {
    const names = ["Eirene Roderick", "Barbara Foster", "Milan Penny"]
    initials(names)

    expect(names).toEqual(["Eirene Roderick", "Barbara Foster", "Milan Penny"]);
  });
});

describe('pairAbbreviations', () => {
  it('pairs full forms with their abbreviations', () => {
    const state_data = [["OH", "Ohio"], ["MI", "Michigan"], ["IL", "Illinois"]]

    const pairs = pairAbbreviations(state_data)
    expect(pairs).toEqual({
      "Ohio": "OH",
      "Michigan": "MI",
      "Illinois": "IL"
    })
  });

  it('does not modify the input array', () => {
    const state_data = [["OH", "Ohio"], ["MI", "Michigan"], ["IL", "Illinois"]]
    pairAbbreviations(state_data)

    expect(state_data).toEqual([["OH", "Ohio"], ["MI", "Michigan"], ["IL", "Illinois"]]);
  });
});
