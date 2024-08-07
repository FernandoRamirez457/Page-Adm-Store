import { createTableRowUser } from "./components/tdUser.js";

const tbody = document.querySelector("tbody");

fetch("https://fakestoreapi.com/users")
  .then((res) => res.json())
  .then((json) => {
    json.forEach((data) => {
      let trUser = createTableRowUser(data);
      tbody.appendChild(trUser);
    });
  })
  .catch((err) => console.error("Erro:", err));

// BTN RETURN PAGE
const btnReturn = document.querySelector(".btn-return");
btnReturn.addEventListener("click", () => {
  window.history.back();
});
