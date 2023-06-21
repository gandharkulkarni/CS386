let book = {title: "McBeth", author: "Shakespeare"};
console.log(book);
book.title = "MacBeth";
book.edition = 6;
console.log(book);
delete book.edition;
console.log(book);