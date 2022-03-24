import {Account} from "./account-statement";

describe("Account Statement", () => {

    //  --- OTRAIS TESTS ĪSTENĪBĀ DUBLĒ PIRMO TESTU, TĀPĒC VAR REFAKTORĒT UN VIŅU VARĒTU DZĒST ---
    //
    // it("should be able to deposit an amount", () => {
    //     const account = new Account();
    //     account.deposit(123)
    //     const statement = account.printStatement()
    //     expect(statement).toEqual("123");
    // });

    //
    // --- ŠIE DIVI TESTI ĪSTENĪBĀ IR GANDRĪZ ČIKINIEKĀ
    //
    // it("should be able to withdraw an amount", () => {
    //     const account = new Account();
    //     account.deposit(500)
    //     account.withdraw(100)
    //     const statement = account.getBalance()
    //     expect(statement).toEqual("400");
    // });
    //
    // it("should be able to print statements", () => {
    //     const account = new Account();
    //
    //     account.setCurrentTime(new Date("2015-12-24"))
    //     account.deposit(500)
    //     account.setCurrentTime(new Date("2016-08-23"))
    //     account.withdraw(100)
    //     const statement = account.printStatement()
    //     expect(statement).toEqual(`
    //     24.12.2015; +500; 500
    //     23.8.2016; -100; 400`);
    // });
});
