class Author {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    toString() {
        return `Author: ${this.name} (${this.email})`;
    }
}

class Book {
    constructor(name, price, qty = 0) {
        this.name = name;
        this.authors = [];
        this.price = price;
        this.qty = qty;
    }

    getName() {
        return this.name;
    }

    getAuthors() {
        return this.authors;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
    }

    getQty() {
        return this.qty;
    }

    setQty(qty) {
        this.qty = qty;
    }

    toString() {
        return `Book: ${this.name}, Price: ${this.price}, Quantity: ${this.qty}`;
    }

    getAuthorNames() {
        return this.authors.map(author => author.getName()).join(", ");
    }
}


class Invoice {
    constructor(id, amount) {
      this.id = id;
      this.customer = null;
      this.amount = amount;
    }
  
    getId() {
      return this._id;
    }
  
    getCustomer() {
      return this._customer;
    }
  
    setCustomer(customer) {
      this._customer = customer;
    }
  
    getAmount() {
      return this._amount;
    }

    setAmount(amount) {
        this._amount = amount;
      }

    getCustomerId() {
        return this._id;
      }

    getCustomerName() {
        return this._id;
      }
  }

