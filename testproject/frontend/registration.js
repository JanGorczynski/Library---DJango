const registerButton = document.querySelector("#register-button");
const password = document.querySelector("#inputPassword");
const username = document.querySelector("#inputUsername");
const repPassword = document.querySelector("#repeatPassword");
const pTag = document.querySelector("#error-msg");
const form = document.querySelector("body > div > form");


registerButton.addEventListener("click",e=>{
    e.preventDefault();
    console.log(username.value, password.value, repPassword.value);
    if(password.value != repPassword.value){
        pTag.innerHTML = `<p class="none" style="color:red"><b>The passwords dont match</b></p>`;
        username.value = "";
        password.value = "";
        repPassword.value = "";
    }
    else{

        addUser(username.value,password.value).then(data=>{
            
            form.innerHTML = `<p class="none" style="color:green"><font size="+2"><b>Account succecfully created</b></font></p><button type="submit" class="btn btn-primary" id="back-to-login">Log In</button>`; 
            const goBackButton = document.querySelector("#back-to-login");
            goBackButton.addEventListener("click",e=>{
                e.preventDefault();
                document.location.href = "http://localhost:5050/index.html";
            });

        }).catch(error=>{
            console.log(error)
            pTag.innerHTML = `<p class="none" style="color:red"><b>Username already taken</b></p>`;
        });

       
        username.value = "";
        password.value = "";
        repPassword.value = "";
    }

});