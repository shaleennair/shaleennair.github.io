function transformUppercase(){
    let a = document.getElementById("namePengguna")
    a.value = a.value.toUppercase();
}

let elUsername = document.getElementById("namaPengguna");
elUsername.addEventListener("keyup", transformUppercase);