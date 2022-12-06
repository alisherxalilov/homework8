let xabar = document.getElementById("xabar");
let code = () => {
  let login = prompt("Login kiriting");

  if (login == "Admin" || login == "admin" || login == "ADMIN") {
    let parol = prompt("Parolmi kiriting");

    if (parol == "Professional dasturchi" || parol == "professional dasturchi" || parol == "PROFESSIONAL DASTURCHI") {
      xabar.innerHTML = "Xush kelibsiz";
    } 
    else {
      xabar.innerHTML = "Noto'g'ri parol";
    }
  }

  if (login == "" || login == null || login == undefined) {
    xabar.innerHTML = "Xatolik";
  }
};
code();