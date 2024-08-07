const btnPlus = document.querySelector('.btn-plus');
const contentBtn = document.querySelector('.content-btn');

btnPlus.addEventListener('click', function() {
  if (contentBtn.classList.contains('show')) {
    contentBtn.classList.remove('show');
  } else {
    contentBtn.classList.add('show');
  }
});



const btn_add_input = document.querySelectorAll(".btn_add_input");

btn_add_input.forEach((btn_input) => {
  btn_input.addEventListener("click", () => {
    let inputSelecionado = document.getElementById(`${btn_input.id}-input`);

    let classList = inputSelecionado.classList;

    if (classList.contains("active")) {
      classList.remove("active");
      inputSelecionado.style.display = "none";
      btn_input.style.borderColor = "rgb(0, 198, 0)";
    } else {
      classList.add("active");
      inputSelecionado.style.display = "block";
      btn_input.style.borderColor = "red";
    }
  });
});
