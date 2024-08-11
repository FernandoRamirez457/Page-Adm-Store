export function methodGetIndividualFunction(id) {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((json) => {
      const imgCard = document.querySelector(".img-card");
      const titleCard = document.querySelector(".title-card");
      const priceCard = document.querySelector(".price-card");
      const descriptionCard = document.querySelector(".description-card");
      const categoryCard = document.querySelector(".category-card");

      imgCard.src = json.image;
      titleCard.textContent = json.title;
      priceCard.textContent = "R$ " + json.price;
      descriptionCard.textContent = limitText(json.description);
      categoryCard.textContent = json.category;
    })
    .catch((error) => {
      console.error("Erro ao buscar os dados:", error);
      return null;
    });
}

function limitText(text) {
  const limite = 200;
  if (text.length > limite) {
    return text.substring(0, limite) + "...";
  }
  return text;
}
