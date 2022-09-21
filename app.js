// DOM elements
const form = document.querySelector('.form')
const author = document.querySelector('#author')
const title = document.querySelector('#title')
const pages = document.querySelector('#pages')
const booksList = document.querySelector('.books-list')

//show book form

//book library
let myLibrary = []

// book constructor function
function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
}

//add book to library and display items dynamically
function addBookToLibrary() {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (author.value === '' || title.value === '' || pages.value === '') {
      alert('please fil the form')
      clearForm()

      return
    }
    const book = new Book(author.value, title.value, pages.value)
    myLibrary.push(book)
    clearForm()
    displayBooks()
  })
}
addBookToLibrary()

//clear form
function clearForm() {
  author.value = ''
  title.value = ''
  pages.value = ''
}

// display book
function displayBooks() {
  booksList.innerHTML = myLibrary
    .map((book) => {
      return ` <tr data-id="${book.author}" >  
    <td>${book.author} </td>
          <td>${book.title} </td>
          <td>${book.pages} </td>
          <td>       <button class="btn">delete</button>
     </td>
    </tr> `
    })
    .join('')
}

//delete book from array
function deletFromArray(element) {
  myLibrary = myLibrary.filter((book) => {
    return book.author != element
  })
  displayBooks()
}

booksList.addEventListener('click', (e) => {
  let element = e.target.parentElement.parentElement.dataset.id
  deletFromArray(element)
})
