// empty book array
let myLibrary = [];

// selectors
const selectors = {
    cards: document.querySelector('.cards'),
    newBookBtn: document.querySelector('.newBookBtn'),
    newBookForm: document.querySelector('.newBookForm'),
    submitBtn: document.querySelector('.submitForm'),
}


// form inputs
const formInputs = {
    title: document.getElementById('formTitle'),
    author: document.getElementById('forAuthor'),
    pages: document.getElementById('formPages'),
    read: document.getElementById('formRead')
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

const addToLibrary = (bookName) =>{
    bookName = new Book (formInputs.title.value,
        formInputs.author.value,
        formInputs.pages.value,
        (formInputs.read.hasAttribute('checked') ? "Read" : "Unread"));
}

// example books
const mobyDick = 
new Book("Moby Dick", "Herman Melville", 427, "Read" )
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

const createCard = (book) => {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.setAttribute('data-index', `${book.index}`);
    return card;
}

const createCardTitle = (book) => {
    let cardTitle = document.createElement('span');
    cardTitle.setAttribute('class', 'cardTitle');
    cardTitle.setAttribute('data-index', `${book.index}`);
    cardTitle.innerText = book.title;
    return cardTitle;
}

const createCardAuthor = (book) => {
    let cardAuthor = document.createElement('span');
    cardAuthor.setAttribute('class', 'cardAuthor');
    cardAuthor.setAttribute('data-index', `${book.index}`);
    cardAuthor.innerText = book.author
    return cardAuthor
}

const createCardPages = (book) => {
    let cardPages = document.createElement('span');
    cardPages.setAttribute('data-index', `${book.index}`);
    cardPages.setAttribute('class', 'cardPages');
    cardPages.innerText = book.pages
    return cardPages;
}

const createCardRead = (book) => {
    let cardRead = document.createElement('span');
    cardRead.setAttribute('class', 'cardRead');
    cardRead.setAttribute('data-index', `${book.index}`);
    cardRead.innerText = book.read;
    return cardRead;
}

const createRemoveBtn = (book) => {
    let removeBtn = document.createElement('button');
    removeBtn.setAttribute('class', 'removeBtn');
    removeBtn.setAttribute('data-index', `${book.index}`);
    removeBtn.innerText = 'Remove book from library.';
    return removeBtn;
}

const createReadBtn = (book) => {
    let readBtn = document.createElement('button');
    readBtn.setAttribute('class', 'readBtn');
    readBtn.setAttribute('data-index', `${book.index}`);
    if (book.read === "Read"){
        readBtn.innerText = 'Mark book unread';
    } else if(book.read === "Unread"){
        readBtn.innerText = 'Mark book read'
    } return readBtn;
}

const appendCard = (card, 
    cardTitle, 
    cardAuthor, 
    cardPages, 
    cardRead, 
    removeBtn,
    readBtn
    ) => {
    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(cardRead);
    card.appendChild(removeBtn);
    card.appendChild(readBtn);
    selectors.cards.appendChild(card);
}

const newCard = (book) => {
    const card = createCard(book);
    const cardTitle = createCardTitle(book);
    const cardAuthor = createCardAuthor(book);
    const cardPages = createCardPages(book);
    const cardRead = createCardRead(book);
    const removeBtn = createRemoveBtn(book);
    const readBtn = createReadBtn(book);
    appendCard(card, 
        cardTitle, 
        cardAuthor, 
        cardPages, 
        cardRead, 
        removeBtn,
        readBtn
        )
}

const displayBooks = () => {
    myLibrary.forEach(book => {
        newCard(book);
    });
}

displayBooks();
    
const clearForm = () => {
    formInputs.title.value = '';
    formInputs.author.value = '';
    formInputs.pages.value = '';
    formInputs.read.checked = false;
}

const checkForm = () => {
    if (formInputs.title.value === ''){
        alert('Book title was not inserted');
        return false;
    } else if (formInputs.author.value === ''){
        alert('Book author was not inserted');
        return false;
    } else if (formInputs.pages.value === ''){
        alert('Number of pages was not inserted');
        return false;
    } return true;
}

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
        } else if (eventTarget.className.includes('readBtn')){
            let readStatus = myLibrary[bookIndex].read;
            if (readStatus === 'Read'){
                myLibrary[bookIndex].read = 'Unread';
                resetBookDisplay();
            } else if (readStatus === "Unread"){
                myLibrary[bookIndex].read = 'Read';
                resetBookDisplay();
            }
        }  else if (eventTarget === selectors.newBookBtn){
                selectors.newBookForm.style.display = 'grid'
        } else if (eventTarget === selectors.submitBtn){
            if (checkForm() === true){
            bookName = formInputs.title.value
            addToLibrary(bookName);
            resetBookDisplay();
            clearForm();
            }
        }
    })
}

const resetBookDisplay = () => {
    selectors.cards.innerHTML = "";
    displayBooks();
}

attachEventListeners()

