class Account {
    constructor(name, accno, balance) {
        this.name = name;
        this.accno = accno;
        this.balance = balance;
    }
    getBalance() {
        return "The Balance is : ₹ " + this.balance; 
    }
    withdraw(amount){
        if(this.balance >= amount){
            this.balance = this.balance - amount;
            return this.getBalance();
        } else {
            return "Insufficient funds " + this.getBalance();
        }
    }
    deposit(cash) {
        this.balance = this.balance + cash;
        return this.getBalance();
    }
}

const gokul = new Account("Gokul",123,20000);
console.log(gokul.getBalance());
console.log(gokul.withdraw(1000));
console.log(gokul.withdraw(5000));
console.log(gokul.deposit(20000));


