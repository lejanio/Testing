import {Game} from "./wordle";

describe("Wordle", () => {
    it("should be able to set hidden word", () => {
        const game = new Game();

        const setWord = game.setHiddenWord("mango");

        expect(setWord).toEqual("mango");
    })

    it("should detect identical word", () => {
        const game = new Game();

        game.setHiddenWord("mango");
        game.enterWord("mango");
        const comparison = game.compare(game.hiddenWord, game.enteredWord);

        expect(comparison).toEqual(true);
    })

    it("should detect correct letters, present letters and letters that are not present in the word", () => {
        const game = new Game();

        game.setHiddenWord("mango");
        game.enterWord("monza");
        const letterComparison = game.compareLetters(game.enteredWord, game.hiddenWord);

        expect(letterComparison).toEqual([["m", "n"], ["o", "a"], ["z"]]);
    })

    it("should detect if game has been won", () => {
        const game = new Game();

        game.setHiddenWord("mango");
        game.enterWord("mango");
        const comparison = game.compare(game.hiddenWord, game.enteredWord);
        const checkWin = game.checkIfWon();

        expect(checkWin).toEqual("You've guessed the word correctly!");
    })
})
