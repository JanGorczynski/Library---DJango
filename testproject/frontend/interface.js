const bookList = document.querySelector("#bookList")
let username = sessionStorage.getItem('user');
const rentBooks = document.querySelector("#rentButton");
const goBackButton = document.querySelector("#back-button");



getBooksByUsername(username).then((books)=>{
    console.log(1);
    addBookToDisplay(books);
    
});

goBackButton.addEventListener("click",e=>{
    document.location.href = "http://localhost:5050/index.html";
});

function addBookToDisplay(books){
    let html = ``;

    for(i in books){

        const book  = books[i];
        const author = book.author;
        const title = book.bookTitle;
        const dateOfReturn = book.dateOfReturn;
        const id = book.id;
        console.log(id);
        let style = "";
        if(book.overdue){
                style = "books_overstayed";
        }
        else{   
            style = "books_ontime";
        }
        html += `<li id=${id} class="list-group-item ${style}">
    <span><b>Title:</b> ${title} <b>Author:</b> ${author} <b>Date of return:</b> ${dateOfReturn}</span>
    <div class= "button_right">
        <button class="btn btn-primary return"><b>Return </b></button>
        <button class="btn btn-primary prolong"><b>Prolong</b></button>
    </div>
   
</li>`;
    }
    bookList.innerHTML = html;
};

bookList.addEventListener("click",e=>{
    
    if(e.target.parentNode.classList.contains("return")){
        let x = parseInt(e.target.parentNode.parentNode.parentNode.id);
        removeBooksById(x).then(document. location. reload());
        
    }
    else if(e.target.classList.contains("return")){
        let x = parseInt(e.target.parentNode.parentNode.id);
        removeBooksById(x).then(document. location. reload());
    }
    else if(e.target.parentNode.classList.contains("prolong")){
        let x = parseInt(e.target.parentNode.parentNode.parentNode.id);
        prolongById(x).then(document. location. reload());
    }
    else if(e.target.classList.contains("prolong")){
        let x = parseInt(e.target.parentNode.parentNode.id);
        prolongById(x).then(document. location. reload());
     }
    ;
});

rentBooks.addEventListener("click", e=>{
    document.location.href = "http://localhost:5050/renting.html";
});