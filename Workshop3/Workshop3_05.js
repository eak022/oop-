class Customer {
    name = "";
    member = false;
    discountRate = null;
    constructor(name, member = false, discountRate) {
      this.name = name;
      this.member = member;
      this.discountRate = discountRate;
    }
  
    getName() {
      return this.name;
    }
  
    isMember() {
      return this.member;
    }
  
    setMember(member) {
      this.member = member;
    }
  
    getDiscountRate() {
      return this.discountRate;
    }
  
    setDiscountRate(discountRate) {
      this.discountRate = discountRate;
    }
  
    toString() {
      return `Customer[name = ${this.name}, member = ${this.member}, discountRate = ${
        this.discountRate.rate // แก้ไขเพื่อแสดงราคาส่วนลด
      }]`;
    }
  }
  
  class Visit {
    customer = null;
    date = "";
    serviceExpense = 0;
    productExpense = 0;
    constructor(customer, date, serviceExpense, productExpense) {
      this.customer = customer;
      this.date = date;
      this.serviceExpense = serviceExpense;
      this.productExpense = productExpense;
    }
  
    getName() {
      return this.name;
    }
  
    getServiceExpense() {
      return this.serviceExpense;
    }
  
    setServiceExpense(serviceExpense) {
      this.serviceExpense = serviceExpense;
    }
  
    getProductExpense() {
      return this.productExpense;
    }
  
    setProductExpense(productExpense) {
      this.productExpense = productExpense;
    }
  
    getTotalExpense() {
      return this.serviceExpense + this.productExpense;
    }
  
    toString() {
      return `Visit[${this.customer.toString()}, serviceExpense = ${
        this.serviceExpense
      }, productExpense = ${
        this.productExpense
      }, total = ${this.getTotalExpense()}, discountRate = ${
        this.customer.discountRate.rate // แสดงราคาส่วนลด
      }]`;
    }
  }
  
  class DiscountRate {
    static SPREMIUM = new DiscountRate(0.2);
    static SGOLD = new DiscountRate(0.15);
    static SSILVER = new DiscountRate(0.1);
    static PPREMIUM = new DiscountRate(0.1);
    static PGOLD = new DiscountRate(0.1);
    static PSILVER = new DiscountRate(0.1);
  
    constructor(rate) {
      this.rate = rate;
    }
  
    getServiceDiscountRate() {
      return this.rate;
    }
  
    getProductDiscountRate() {
      return this.rate;
    }
  }
  
  const main = () => {
    const goldDiscountRate = new DiscountRate(0.15);
    const customer1 = new Customer("Vick", true, goldDiscountRate);
    const visit1 = new Visit(customer1, "2024/02/13", 500, 500);
  
    console.log(customer1.toString());
  };
  main();
  