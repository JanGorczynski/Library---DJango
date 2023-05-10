

 async function  getBooksByUsername(username){
    const base = "http://localhost:8000/Rents";
    const query = `?username=${username}`;
    console.log(base+query);
    const response = await fetch(base+query,{
        method : 'GET'
    });
    const data = await response.json();
    return data;
};

async function  removeBooksById(id){
    const base = "http://localhost:8000/Rents/delete";
    const query = `?id=${id}`;
    console.log(base+query);
    fetch(base+query, {
        method : 'DELETE'
    });
  
};

async function  prolongById(id){
    const base = "http://localhost:8000/Rents/prolong";
    const query = `?id=${id}`;
    console.log(base+query);
    fetch(base+query, {
        method : 'PATCH'
    });
  
};


async function getUser(username){
    const base = "http://localhost:8000/user";
    const query = `?username=${username}`;
    const response = await fetch(base+query);
    if(response.status == 200){
       const data = await response.json();

        return data; 
    }
    else{
        throw "error";
    }
    
};

async function addUser(username,password){
    const base = "http://localhost:8000/user/add";
    const query = `?username=${username}&password=${password}`;
    console.log(base+query);
    const response = await fetch(base+query,{
        method : 'POST'
    });
    if(response.status == 201){
       const data = await response.json();

        return data; 
    }
    else{
        throw "error";
    }
}

async function getAvailableBooks(){
    const query = "http://localhost:8000/books";

    const response = await fetch(query);

    if(response.status == 200){
       const data = await response.json();

        return data; 
    }
    else{
        throw "error";
    }
}

async function reserveBook(bookId){

    const base = "http://localhost:8000/Rents";
    const id = sessionStorage.getItem("id");
    const query = `?user_id=${id}&book_id=${bookId}`;
    console.log(base+query);
    const response = await fetch(base+query,{
        method : 'POST'
    });
    if(response.status == 201){
       const data = await response.json();

        return data; 
    }
    else{
        throw "error";
    }
    
}



