export function methodDeleteProduct(id) {
  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("Erro:", err));
}
