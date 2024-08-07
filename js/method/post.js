export function methodPostProduct(data) {
  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify({ data }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("Erro:", err));
}
