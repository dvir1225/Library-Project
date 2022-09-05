let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
const mobyDick = 
new Book("Moby Dick", "Herman Melville", 427, "unread" )
const catcher = 
new Book("The catcher in the Rye", "J.D. Salinger", 208, "read" )
const narnia = 
new Book("The Lion, the Witch and the Wardrobe", "C.S. Lewis", 427, "unread" )
const harryPotter = 
new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 309, "read" )
const lordOfRings = 
new Book("The Lord of the Rings", "J.R.R. Tolkien", 1216, "unread" )
const songOfIceFire =
new Book("A Song of Ice and Fire", "George R.R.Martin", 720, "read" )

function addBookToLibrary(book){
    myLibrary.push(book);
}

addBookToLibrary(mobyDick);
addBookToLibrary(catcher);
addBookToLibrary(narnia);
addBookToLibrary(harryPotter);
addBookToLibrary(lordOfRings);
addBookToLibrary(songOfIceFire);

function makeCards(myLibrary){
    let cards = document.querySelector('.cards');
    for (let i = 0; i < myLibrary.length; i++){
        let card = document.createElement("div");
        card.setAttribute('class', 'card');
        card.setAttribute('id', `${i}`);
        card.innerText =
        `Title: ${myLibrary[i].title}
        Author: ${myLibrary[i].author}
        Pages: ${myLibrary[i].pages}
        Read: ${myLibrary[i].read}`;
        cards.appendChild(card);
    }
}