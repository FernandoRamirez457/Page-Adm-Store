export function methodPutProducts(data, id) {
  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "PUT",
    body: JSON.stringify({ data }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("Erro:", err));
}
