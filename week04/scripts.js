function transformUppercase(){
    let a = document.getElementById("namePengguna")
    a.value = a.value.toUppercase();
}

let elUsername = document.getElementById("namaPengguna");
elUsername.addEventListener("keyup", transformUppercase);

function checkPasswordLength(){
    let password = document.getElementById("kataLaluan").value;
    if (password.length < 5) {
        alert("Password must be more than 5 characters");
        } else {
            alert("Password accepted!")
        }
    }
let elPassword = document.getElementById("kataLaluan");
elPassword.onblur = checkPasswordLength;