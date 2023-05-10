const goBackButton = document.querySelector("#back-button");
const bookList = document.querySelector("body > div.container > ul");


goBackButton.addEventListener("click", e=>{
    document.location.href = "http://localhost:5050/userinterface.html";
});


getAvailableBooks().then(data=>{
   addBookToDisplay(data);
});

function addBookToDisplay(books){
    let html = ``;

    for(i in books){

        const book  = books[i];
        const author = book.author;
        const title = book.title;
        const id = book.id;
        html += `<li  class="list-group-item books_available">
        <span><b>Title:</b>  ${title} <b>Author:</b> ${author} </span>
        <div id=${id} class= "button_right">
            <button class="btn btn-primary rent"><b>Rent </b></button>
          
        </div>
       
    </li>`;
    }
    bookList.innerHTML = html;
};


bookList.addEventListener("click", e=>{
    let id = 0;
    if(e.target.parentNode.classList.contains("rent")){
        id = e.target.parentNode.parentNode.id;
    }
    else if(e.target.classList.contains("rent")){
        id = e.target.parentNode.id;
    }
    else{
        return;
    }

    reserveBook(id).then(x=>{
        getAvailableBooks().then(data=>{
            addBookToDisplay(data);
         });
    });

});








