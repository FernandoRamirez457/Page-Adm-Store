export function setupModals() {
  const modalAdd = document.getElementById("modalAdd");
  const modalUpd = document.getElementById("modalUpd");
  const modalPatch = document.getElementById("modalPatch");
  const closeModalBtn = document.querySelectorAll(".close");
  const btnAdd = document.querySelector(".btn-add-product");

  btnAdd.addEventListener("click", () => {
    modalAdd.style.display = "flex"
  });

  closeModalBtn.forEach((close) => {
    close.addEventListener("click", () => {
      modalAdd.style.display = "none"
      modalUpd.style.display = "none"
      modalPatch.style.display = "none"
    });
  });

  return { modalAdd, modalUpd , modalPatch};
}
