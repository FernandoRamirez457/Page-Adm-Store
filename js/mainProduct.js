import { createProductCard } from "./components/cardProduct.js";
import { methodPostProduct } from "./method/post.js";
import { methodDeleteProduct } from "./method/delete.js";
import { methodPutProducts } from "./method/put.js";
import { methodPatchProducts } from "./method/patch.js";
import { AlertSuccess, AlertError } from "./assets/alerts.js";
import { setupModals } from "./assets/modal.js";

const { modalAdd, modalUpd, modalPatch } = setupModals()
const body = document.querySelector("body")
const containerProduct = document.querySelector(".container-products")

// BTN RETURN PAGE
const btnReturn = document.querySelector(".btn-return")
btnReturn.addEventListener("click", () => {
  window.history.back()
})

// GET - EXIBINDO PRODUTOS
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    json.forEach((data) => {
      let card = createProductCard(data)
      containerProduct.appendChild(card)
    })
    btnDeleteFunction()
    btnUpdateFunction()
    btnPatchFunction()
  })
  .catch((error) => {
    AlertError("Erro ao carregar produtos." + error)
  });

// BTN - DELETE PRODUCT
function btnDeleteFunction() {
  const btnDelete = document.querySelectorAll(".delete")

  btnDelete.forEach((btn) => {
    btn.addEventListener("click", () => {
      let idAtual = btn.id

      methodDeleteProduct(idAtual)

      AlertSuccess("Produto deletado com Sucesso!")
    });
  });
};

let idAtualUpdate

// BTN - PUT PRODUCT

function btnUpdateFunction() {
  const btnUpd = document.querySelectorAll(".update")

  btnUpd.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalUpd.style.display = "flex"
      idAtualUpdate = btn.id
    });
  });
};

//BTN - PATCH PRODUCT

function btnPatchFunction() {
  const btnUpd = document.querySelectorAll(".patch")

  btnUpd.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalPatch.style.display = "flex"
      idAtualUpdate = btn.id
    });
  });
};

// METHOD POST - FORM
const formAdd = document.querySelector(".form-add")

formAdd.addEventListener("submit", async (event) => {
  event.preventDefault()

  const data = Object.fromEntries(new FormData(event.target).entries())

  try {
    await methodPostProduct(data)
    AlertSuccess("Produto adicionado com sucesso!")
    modalAdd.style.display = "none"
  } catch (error) {
    AlertError("Houve um problema ao adicionar o produto. Tente novamente.")
  };
});

// METHOD PUT - FORM
const formUpd = document.querySelector(".form-upd")

formUpd.addEventListener("submit", async (event) => {
  event.preventDefault()

  const data = Object.fromEntries(new FormData(event.target).entries())

  try {
    await methodPutProducts(data, idAtualUpdate)
    AlertSuccess("Produto atualizado com sucesso!")
    modalUpd.style.display = "none"
  } catch (error) {
    AlertError("Houve um problema ao atualizar o produto. Tente novamente.")
  };
});

// METHOD PATCH - FORM
const formPatch = document.querySelector(".form-patch")

formPatch.addEventListener("submit", async (event) => {
  event.preventDefault()

  const data = Object.fromEntries(new FormData(event.target).entries())

  try {
    await methodPatchProducts(data, idAtualUpdate)
    AlertSuccess("Produto atualizado com sucesso!")
    modalPatch.style.display = "none"
  } catch (error) {
    AlertError("Houve um problema ao atualizar o produto. Tente novamente.")
  };
});


// MODAL PAGE PRODUCT SINGLE

const btnViewDetails = document.querySelectorAll('.view-details')
console.log(btnViewDetails)

btnViewDetails.forEach(view => {
  const modalProduct = document.getElementById("product-single");
  const closeModalBtn = document.querySelectorAll(".close");

  view.addEventListener("click", () => {
    modalProduct.style.display = "flex"
  });

  closeModalBtn.forEach((close) => {
    close.addEventListener("click", () => {
      modalProduct.style.display = "none"
    });
  });
});