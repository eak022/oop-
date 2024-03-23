class Customer {
    accounts = [];
    constructor(name, address, phone, email){
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
  
    verify(name, address, phone, email){
        return name === this.name && address === this.address && phone === this.phone && email === this.email;
    }

    getAccounts(){
        return this.accounts;
    }

    createAccount(bank, accountType){
        let newAccount = bank.createAccount(accountType);
        this.accounts.push(newAccount);
        return newAccount;
    }

    toString(){
        return  `Name : ${this.name} \n Address : ${this.address} \n Phone : ${this.phone} \n Email : ${this.email} \n`;
    }
}


class Bank {
    account = null;
    customers = [];
    atm = [];
    constructor(name, address, code){
        this.name = name;
        this.address = address;
        this.code = code;
    }

    manage(){
        console.log(this.manage);
    }
  
    maintain(){
        console.log(this.maintain);
    }

    verify(name, code){
        return name === this.name && code === this.code;
    }

    openAccount(){
        return this.account != null;
    }

    closeAccount(){
        return this.account === null;
    }

    createTransaction(){
        return this.account.createTransaction();
    }

    createCustomer(name, address, phone, email){
        let newCustomer = new Customer(name, address, phone, email);
        this.customers.push(newCustomer);
        return newCustomer;
    }

    createATM(location, managedBy){
        let newATM = new ATM(location, managedBy);
        return newATM;
    }

    createAccount(accountNumber, balance){
        let newAccount = new Account(accountNumber, balance);
        return newAccount;
    }

    // ปรับเมธอดเพื่อเรียกใช้เมธอดใหม่ของ Customer
    createCustomerAccount(customer, bank, accountType) {
        return customer.createAccount(bank, accountType);
    }
}

class Account {
    customer = null;
    bank = null;
    transactions = [];
    constructor(accountNumber, balance, pin) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.pin = pin;
    }

    deposit(amount) {
        this.balance += amount;
        return `Deposited amount: ${amount} \nCurrent balance: ${this.balance}`;
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            return `Withdrawn amount: ${amount} \nCurrent balance: ${this.balance}`;
        } else {
            return "Insufficient balance.";
        }
    }

    createTransaction(transaction) {
        this.transactions.push(transaction);
    }

    getTransaction() {
        return this.transactions;
    }

    getBalance() {
        return this.balance;
    }

    getAccountType() {
        return this.accountType;
    }

    getCustomer() {
        return this.customer;
    }

    setCustomer(customer) {
        this.customer = customer;
    }

    setBank(bank) {
        this.bank = bank;
    }
}

class Transaction {
    status = "";
    amount = 0;
    constructor(transactionID, transactionType, amount, transactionDate) {
        this.transactionID = transactionID;
        this.transactionType = transactionType;
        this.amount = amount;
        this.transactionDate = transactionDate;
    }

    getTransactionID() {
        return this.transactionID;
    }

    getTransactionType() {
        return this.transactionType;
    }

    getTransactionDate() {
        return this.transactionDate;
    }

    getAmount() {
        return this.amount;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status) {
        this.status = status;
    }

    setAmount(amount) {
        this.amount = amount;
    }

    setTransactionDate(date) {
        this.transactionDate = date;
    }
}

class SavingAccount extends Account {
    constructor(interestRate, accountNumber, balance) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    calculateInterest() {
        let interest = (this.balance * this.interestRate) / 100;
        return interest;
    }

    getInterestRate() {
        return this.interestRate;
    }

    setInterestRate(rate) {
        this.interestRate = rate;
    }
}

class CurrentAccount extends Account {
    constructor(overdraftLimit, overdraftInterest, accountNumber, balance) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
        this.overdraftInterest = overdraftInterest;
    }

    calculateInterest() {
        let interest = (this.balance * this.overdraftInterest) / 100;
    }

    getOverdraftLimit() {
        return this.overdraftLimit;
    }

    setOverdraftLimit(limit) {
        this.overdraftLimit = limit;
    }
}

class ATM {
    customer = null;
    account = null;
    bank = null;
    constructor(location, managedBy) {
        this.location = location;
        this.managedBy = managedBy;
    }

    identify(name, code){
        return name === this.name && code === this.code;
    }

    checkBalance(){
        console.log(this.account.getBalance()); 
    }

    withdraw(amount){
        console.log(this.account.withdraw(amount)); 
    }

    deposit(amount){
        console.log(this.account.deposit(amount)); 
    }

    changePin(oldPin, newPin){
        return this.account.pin === oldPin && newPin !== "";
    }

    transfer(accountNumber, amount){
        if (accountNumber === this.account.accountNumber){
            this.account.balance += amount;
            return `Transferred amount: ${amount} to account: ${accountNumber}.`;
        }
        return "Account not found. Please check the account number again.";
    }

    verify(accountNumber, pin){
        return accountNumber === this.account.accountNumber && pin === this.account.pin;
    }
}
const main = () => {
    // สร้างอินสแตนซ์
    const customer1 = new Customer("John Doe", "123 ถนนเมน", "123-456-7890", "john@example.com");
    const bank1 = new Bank("ABC Bank", "456 ถนนโอ๊ค", "ABC123");
    const account1 = new Account("123456789", 1000, "1234");
    const atm1 = new ATM("ATM ถนนเมน", "ABC Bank");

    // ทดสอบเมธอดคลาส Customer
    console.log("ข้อมูลลูกค้า:");
    console.log(customer1.toString());

    // ทดสอบเมธอดคลาส Bank
    console.log("\nข้อมูลธนาคาร:");
    console.log(bank1.verify("ABC Bank", "ABC123")); // true
    console.log(bank1.openAccount()); // false
    console.log(bank1.closeAccount()); // true
    console.log(bank1.createCustomer("Jane Smith", "789 ถนนเอลม์", "987-654-3210", "jane@example.com")); // ควรสร้างอินสแตนซ์ลูกค้าใหม่

    // ทดสอบเมธอดคลาส Account
    console.log("\nข้อมูลบัญชี:");
    console.log(account1.deposit(500)); // ฝากเงิน 500 บาทเข้าบัญชี
    console.log(account1.withdraw(200)); // ถอนเงิน 200 บาทจากบัญชี
    console.log(account1.getTransaction()); // ควรส่งคืนอาร์เรย์ของธุรกรรม
    console.log(account1.getBalance()); // ควรส่งคืนยอดเงินคงเหลือปัจจุบัน
    console.log(account1.getCustomer()); // ควรส่งคืนค่า null เนื่องจากยังไม่ได้กำหนดลูกค้า
    account1.setCustomer(customer1); // กำหนดลูกค้าให้กับบัญชี
    console.log(account1.getCustomer()); // ควรส่งคืนลูกค้าที่เกี่ยวข้อง
    account1.setBank(bank1); // กำหนดธนาคารให้กับบัญชี

    // ทดสอบเมธอดคลาส ATM
    console.log("\nข้อมูล ATM:");
    atm1.account = account1; // ผูกบัญชีกับ ATM
    console.log(atm1.identify("ABC Bank", "ABC123")); // true
    console.log(atm1.checkBalance()); // ควรพิมพ์ยอดเงินคงเหลือปัจจุบัน
    console.log(atm1.withdraw(100)); // ควรถอนเงิน 100 จากบัญชี
    console.log(atm1.deposit(200)); // ควรฝากเงิน 200 เข้าบัญชี
    console.log(atm1.changePin("1234", "5678")); // ควรส่งคืน true ถ้าพินเก่าตรงกัน
    console.log(atm1.transfer("123456789", 300)); // ควรโอน 300 ไปยังบัญชีที่ระบุ
    console.log(atm1.verify("123456789", "1234")); // ควรส่งคืน true ถ้าหมายเลขบัญชีและพินตรงกัน
}

// เรียกใช้ฟังก์ชัน main
main();
