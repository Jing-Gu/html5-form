const visibilityToggle = document.querySelector(".visibility");
const inputPaw = document.querySelector(".input-container input");

//the default type of password is password - true
let pawType = true;
const showPaw = () => {
  if (pawType) {
    inputPaw.setAttribute("type", "text");
    visibilityToggle.innerText = "visibility";
  } else {
    inputPaw.setAttribute("type", "password");
    visibilityToggle.innerText = "visibility_off";
  }
  //reverse the type of password to keep toggling
  pawType = !pawType;
};

visibilityToggle.addEventListener("click", showPaw);
