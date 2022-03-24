export class Game {
    hiddenWord = ""
    enteredWord = ""
    correctLetters: string[] = [];
    presentLetters: string[] = [];
    wrongLetters: string[] = [];
    guessIsCorrect = false;

    setHiddenWord(word: string): string {
        return this.hiddenWord = word;
    }

    enterWord(word: string): string {
        return this.enteredWord = word;
    }

    compare(enteredWord: string, hiddenWord: string): boolean {
        if (enteredWord === hiddenWord) {
            this.guessIsCorrect = true;
            return this.guessIsCorrect;
        }
    }

    compareLetters(enteredWord: string, hiddenWord: string): any {
        for (let i = 0; i < enteredWord.length; i++) {
            if (enteredWord[i] === hiddenWord[i]) {
                this.correctLetters.push(enteredWord[i])
            } else if (
                this.correctLetters.some((letter) => letter !== enteredWord[i])
                && hiddenWord.split("").some((letter) => letter === enteredWord[i])) {
                this.presentLetters.push(enteredWord[i])
            } else {
                this.wrongLetters.push(enteredWord[i])
            }
        }
        return [this.correctLetters, this.presentLetters, this.wrongLetters];
    }

    checkIfWon(): string {
        if (this.guessIsCorrect) {
            return "You've guessed the word correctly!"
        }
    }
}
