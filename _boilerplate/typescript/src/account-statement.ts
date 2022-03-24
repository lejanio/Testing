interface Transaction {
    date: string;
    amount: number;
}

export class Account {
    private balance = 0;
    private transactions: Transaction[] = [];
    private currentTime: Date | undefined;

    deposit(amount: number): void {
        this.balance += amount;
        this.transactions.push({date: this.currentTime.toString(), amount});
    }

    withdraw(amount: number): void {
        this.balance -= amount;
        this.transactions.push({date: this.currentTime.toString(), amount: amount * -1});
    }

    getBalance(): any {
        return String(this.balance)
    }

    printStatement(): any {
        return this.transactions.map((it) => `${it.date}; ${it.amount}; ${this.balance}`).join("\n");
    }

    setCurrentTime(date: Date) {
        this.currentTime = date;
    }

}
