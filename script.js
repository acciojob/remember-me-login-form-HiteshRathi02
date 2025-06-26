const username = document.getElementById("username");
const password = document.getElementById("password");
const remember = document.getElementById("checkbox");
const submit = document.getElementById("submit");
const existing = document.getElementById("existing");

function submission(e) {
  e.preventDefault();
  
  const user = username.value.trim();
  const pass = password.value;
  const rememberMe = remember.checked;

  username.value = "";
  password.value = "";
  remember.checked = false;

  if(rememberMe) {
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
    existing.style.display = "block";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existing.style.display = "none";
  }

  alert(`Logged in as ${user}`)
}

existing.addEventListener("click", () => {
  const storedUser = localStorage.getItem("username");
    alert(`Logging in as ${storedUser}`);
  })

window.onload = () => {
  const storedUser = localStorage.getItem("username");
  const storedPass = localStorage.getItem("password");

  if(storedUser && storedPass) {
    existing.style.display = "block";
  }
  else{
    existing.style.display = "none";
  }

}