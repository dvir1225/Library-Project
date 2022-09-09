// empty book array
let myLibrary = [];

// selectors
const selectors = {
    cards: document.querySelector('.cards'),
    newBookBtn: document.querySelector('.newBookBtn'),
    newBookForm: document.querySelector('.newBookForm'),
    submitBtn: document.querySelector('.submitForm')
}


// form inputs
const formInputs = {
    title: document.getElementById('#formTitle'),
    author: document.getElementById('#fornAuthor'),
    pages: document.getElementById('#formPages'),
    read: document.getElementById('#formRead')
}

// class constructor that counts active books and adds book to myLibrary array
class Book {
    static activeBooks = 0;
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        Book.activeBooks += 1;
        this.index = Book.activeBooks
        myLibrary.push(this);
    }
}

// example books
const mobyDick = 
new Book("Moby Dick", "Herman Melville", 427, true )
const catcher = 
new Book("The catcher in the Rye", "J.D. Salinger", 208, true )
const narnia = 
new Book("The Lion, the Witch and the Wardrobe", "C.S. Lewis", 427, false )
const harryPotter = 
new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 309, true )
const lordOfRings = 
new Book("The Lord of the Rings", "J.R.R. Tolkien", 1216, false )
const songOfIceFire =
new Book("A Song of Ice and Fire", "George R.R.Martin", 720, true )



const newCard = book => {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    let cardTitle = document.createElement('span');
    cardTitle.setAttribute('class', 'cardTitle');
    cardTitle.innerText = book.title
    let cardAuthor = document.createElement('span');
    cardAuthor.setAttribute('class', 'cardAuthor');
    cardAuthor.innerText = book.author
    let cardPages = document.createElement('span');
    cardPages.setAttribute('class', 'cardPages');
    cardPages.innerText = book.pages
    let cardRead = document.createElement('span');
    cardRead.setAttribute('class', 'cardRead');
    cardRead.innerText = book.read
    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(cardRead);
    selectors.cards.appendChild(card);
    const removeBtn = document.createElement('button');
    removeBtn.setAttribute('class', 'removeBtn');
    removeBtn.setAttribute('data-index', `${book.index}`);
    removeBtn.innerText = 'Remove book from library.';
    card.appendChild(removeBtn);
    const readBtn = document.createElement('input');
    readBtn.setAttribute('class', 'readCheckbox');
    readBtn.setAttribute('type', 'checkbox');
    readBtn.setAttribute('data-index', `${book.index}`);
    const readLabel = document.createElement('label');
    readLabel.setAttribute('class', 'readLabel');
    readLabel.innerHTML = 'Read';
    
    card.appendChild(readBtn);
}

const displayBooks = () => {
    myLibrary.forEach(book => {
        newCard(book);
        

    });
}

displayBooks();
    


const attachEventListeners = () => {
    document.addEventListener('click', event => {
        const eventTarget = event.target;
        const clickedBook = parseInt(eventTarget.getAttribute('data-index'));
        const eventParent = eventTarget.parentElement;
        const bookIndex = (myLibrary.findIndex(book =>
            book.index === clickedBook));
        if (eventTarget.className.includes('removeBtn')){
            myLibrary.splice(bookIndex, 1);
            selectors.cards.removeChild(eventParent);
        }
    })
}


attachEventListeners()

