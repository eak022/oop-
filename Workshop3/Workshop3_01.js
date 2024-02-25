class Author {
    name = "";
    email = "";
    gender = ''
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
        return `Author[name = ${this.name},Email ${this.email},gender=${this.gender}]`;
    }
}

class Book {
    name = "";
    authors = [];
    price = 0;
    qty = 0;
    constructor(name, authors, price, qty = 0) {
        this.name = name;
        this.authors = authors;
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
        let authorNames = "";
        for (let i = 0; i < this.authors.length; i++) {
            authorNames += this.authors[i].toString();
            if (i < this.authors.length - 1) {
                authorNames += ", ";
            }
        }
        return `Book[name = ${this.name}, authors={${authorNames}}, price=${this.price}, qty=${this.qty}]`;
    }

    getAuthorsName() {
        let authorsNames = "";
        for (let i = 0; i < this.authors.length; i++) {
            authorsNames += this.authors[i].getName();
            if (i < this.authors.length - 1) {
                authorsNames += ", ";
            }
        }
        return authorsNames;
    }
}

const main = () => {
    const author1 = new Author("Vick", "Vick@gmail.com");
    const author2 = new Author("Mind", "Mind@gmail.com");
    console.log(author1.toString());
    console.log(author2.toString());

    const Book1 = new Book("กระต่ายกับเต่า", [author1, author2], 50, 5);
    console.log(Book1.toString());

    const authorsNames = Book1.getAuthorsName();
    console.log(authorsNames);
}

main();







