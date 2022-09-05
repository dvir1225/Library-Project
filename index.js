let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
const mobyDick = 
new Book("Moby Dick", "Herman Melville", 427, "Unread" )
const catcher = 
new Book("The catcher in the Rye", "J.D. Salinger", 208, "Read" )
const narnia = 
new Book("The Lion, the Witch and the Wardrobe", "C.S. Lewis", 427, "Unread" )
const harryPotter = 
new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 309, "Read" )
const lordOfRings = 
new Book("The Lord of the Rings", "J.R.R. Tolkien", 1216, "Unread" )
const songOfIceFire =
new Book("A Song of Ice and Fire", "George R.R.Martin", 720, "Read" )

function addBookToLibrary(book){
    myLibrary.push(book);
}

addBookToLibrary(mobyDick);
addBookToLibrary(catcher);
addBookToLibrary(narnia);
addBookToLibrary(harryPotter);
addBookToLibrary(lordOfRings);
addBookToLibrary(songOfIceFire);

let cards;

function makeCards(myLibrary){
    cards = document.querySelector('.cards');
    for (let i = 0; i < myLibrary.length; i++){
        let card = document.createElement("div");
        card.setAttribute('class', 'card');
        card.setAttribute('id', `${i}`);

        let title = document.createElement('span');
        title.setAttribute('class', 'title')

        let author = document.createElement('span');
        author.setAttribute('class', 'author');

        let pages = document.createElement('span');
        pages.setAttribute('class', 'pages');

        let read = document.createElement('span');
        read.setAttribute('class', 'read');

        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(read)

        title.innerText = `${myLibrary[i].title}`
        author.innerText = `${myLibrary[i].author}`
        pages.innerText = `${myLibrary[i].pages}`
        read.innerText = `${myLibrary[i].read}`
        
        ;
        
        cards.appendChild(card);
    }
}