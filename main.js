let obj = {
  id: "123456",
  password: "1234",
};

let modmeId = document.querySelector('.modme-id');
let modmePassword = document.querySelector('.modme-password');
const sendBtn = document.querySelector('.send-btn');
const form = document.querySelector('.form');
let validation = document.querySelector('.validation');
const logOut = document.querySelector('.logOut');



let inputFirst = "";
let inputSecond = "";

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let newObj = {};

  newObj.modmeId = modmeId.value;
  newObj.modmePassword = modmePassword.value;
  console.log(newObj);

  if (obj.id == newObj.modmeId && obj.password == newObj.modmePassword) {
    localStorage.setItem("token", JSON.stringify(newObj));
    window.location.href = "./HomePage.html";
  } else {
    alert("Parol yoki login xato");
  }
});

modmeId.addEventListener("input", (e) => {
  inputFirst = e.target.value;
  show();
});

modmePassword.addEventListener("input", (e) => {
  inputSecond = e.target.value;
  show();
});

const show = () => {
  if (inputFirst != "" && inputSecond != "") {
    sendBtn.classList.add("show");
  } else {
    sendBtn.classList.remove("show");
  }
};


