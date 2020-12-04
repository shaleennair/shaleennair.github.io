function transformUppercase(){
    let a = document.getElementById("namePengguna")
    a.value = a.value.toUppercase();
}

let elUsername = document.getElementById("namaPegguna");
elUsername.addEventListener("keyup", transformUppercase);