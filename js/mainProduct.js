import { createProductCard } from "./components/cardProduct.js";
import { methodPostProduct } from "./method/post.js";
import { methodDeleteProduct } from "./method/delete.js";
import { methodPutProducts } from "./method/put.js";
import { methodPatchProducts } from "./method/patch.js";
import { methodGetIndividualFunction } from "./method/get_individual.js";
import { AlertSuccess, AlertError } from "./assets/alerts.js";
import { setupModals } from "./assets/modal.js";

const { modalAdd, modalUpd, modalPatch, modalProduct } = setupModals();
const body = document.querySelector("body");
const containerProduct = document.querySelector(".container-products");

// BTN RETURN PAGE
const btnReturn = document.querySelector(".btn-return");
btnReturn.addEventListener("click", () => {
  window.history.back();
});

let idAtual;

// GET - EXIBINDO PRODUTOS
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    json.forEach((data) => {
      let card = createProductCard(data);
      containerProduct.appendChild(card);
    });

    
    btnViewDetailsFunction();
    btnDeleteFunction();
    btnUpdateFunction();
    btnPatchFunction();

    console.log(json[1].id)

  })
  .catch((error) => {
    AlertError("Erro ao carregar produtos." + error);
  });

// MODAL PAGE PRODUCT SINGLE
function btnViewDetailsFunction() {
  const btnViewDetails = document.querySelectorAll(".view-details");

  btnViewDetails.forEach((view) => {
    view.addEventListener("click", async (event) => {
      let idView = view.id;

      try {
        clearModalContent();

        await methodGetIndividualFunction(idView);
        modalProduct.style.display = 'flex';
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    });
  });
}


function clearModalContent() {
  const imgCard = document.querySelector(".img-card");
  const titleCard = document.querySelector(".title-card");
  const priceCard = document.querySelector(".price-card");
  const descriptionCard = document.querySelector(".description-card");
  const categoryCard = document.querySelector(".category-card");

  if (imgCard) imgCard.src = 'https://miro.medium.com/v2/resize:fit:1260/1*ngNzwrRBDElDnf2CLF_Rbg.gif';
  if (titleCard) titleCard.textContent = '';
  if (priceCard) priceCard.textContent = '';
  if (descriptionCard) descriptionCard.textContent = '';
  if (categoryCard) categoryCard.textContent = '';
}




// BTN - DELETE PRODUCT
function btnDeleteFunction() {
  const btnDelete = document.querySelectorAll(".delete");

  btnDelete.forEach((btn) => {
    btn.addEventListener("click", () => {
      let idAtual = btn.id;

      methodDeleteProduct(idAtual);

      AlertSuccess("Produto deletado com Sucesso!");
    });
  });
}

// BTN - PUT PRODUCT

function btnUpdateFunction() {
  const btnUpd = document.querySelectorAll(".update");

  btnUpd.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalUpd.style.display = "flex";
      idAtual = btn.id;
    });
  });
}

//BTN - PATCH PRODUCT

function btnPatchFunction() {
  const btnUpd = document.querySelectorAll(".patch");

  btnUpd.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalPatch.style.display = "flex";
      idAtual = btn.id;
    });
  });
}

// METHOD POST - FORM
modalAdd.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(event.target).entries());

  try {
    await methodPostProduct(data);
    AlertSuccess("Produto adicionado com sucesso!");
    modalAdd.style.display = "none";
  } catch (error) {
    AlertError("Houve um problema ao adicionar o produto. Tente novamente.");
  }
});

// METHOD PUT - FORM
modalUpd.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(event.target).entries());

  try {
    await methodPutProducts(data, idAtual);
    AlertSuccess("Produto atualizado com sucesso!");
    modalUpd.style.display = "none";
  } catch (error) {
    AlertError("Houve um problema ao atualizar o produto. Tente novamente.");
  }
});

// METHOD PATCH - FORM
modalPatch.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(event.target).entries());

  try {
    await methodPatchProducts(data, idAtual);
    AlertSuccess("Produto atualizado com sucesso!");
    modalPatch.style.display = "none";
  } catch (error) {
    AlertError("Houve um problema ao atualizar o produto. Tente novamente.");
  }
});
