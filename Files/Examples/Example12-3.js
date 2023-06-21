let book = {author: "Shakespeare", title: "MacBeth", edition:6};
for (property in book){
    console.log(`Property ${property} Value ${book[property]}`);
}