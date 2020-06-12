
//dom
const Name = document.getElementById('username');
 const Email = document.getElementById('email');
 const password = document.getElementById('password');
 const password2 = document.getElementById('password2');


 // on clicking submit
document.querySelector('.submit').addEventListener('click', (el) => {
    el.preventDefault();

    checkerror();
});

var checkerror = function() {

    const nameValue = Name.value.trim();
    const emailValue = Email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    //check name input
    if (nameValue === ""){
        Name.parentElement.className = 'form-control error';
    }else{
        Name.parentElement.className = 'form-control success';
    }

    //check email input
    if (emailValue === ""){
        Email.parentElement.className = 'form-control error';
    }else if(!isEmail(emailValue)){
        Email.parentElement.className = 'form-control error';
    }
    else{
        Email.parentElement.className = 'form-control success';
    }

    //check password input
    if (passwordValue === ""){
        password.parentElement.className = 'form-control error';
    }else{
        password.parentElement.className = 'form-control success';
    }

    //check if passwords match
    if (password2Value === ""){
        password2.parentElement.className = 'form-control error';
    }
    else if (password2Value !== passwordValue){
        password2.parentElement.className = 'form-control error';
        password2.parentElement.querySelector('small').innerText = 'Passwords do not match';
    }
    else{
        password2.parentElement.className = 'form-control success';
    }
}

//regex for email
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
} 






