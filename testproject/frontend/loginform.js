const submitButton = document.querySelector("#login-button");
const registerButton = document.querySelector("#register-button")
const userInput = document.querySelector("#inputUsername");
const passwordInput = document.querySelector("#inputPassword");
const pTag = document.querySelector("#error-msg");

submitButton.addEventListener("click", e=>{
    
    e.preventDefault();
    username = userInput.value;
    password = passwordInput.value;
    // getAvailableBooks().then(data=>{
    //     console.log(1)
    //  });
    getUser(username)
    .then(data=>{
        console.log(1)
       if(data.password != password){
        throw "wrong pass2";
       } 
       else{
        sessionStorage.setItem('user', username);
        sessionStorage.setItem('id', data.id);
        console.log("Sucess")
        document.location.href = "http://localhost:5050/userinterface.html";
       }
       
    })
    .catch(error=>{
        console.log(2)
        console.log(error);
        pTag.innerHTML = `<p class="none" style="color:red"><b>Username or password was incorect</b></p>`;
        userInput.value = "";
        passwordInput.value = "";
    })


});

registerButton.addEventListener("click",e=>{
    document.location.href = "http://localhost:5050/registration.html";
});