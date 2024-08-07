export function createProductCard(data) {
    const baseProduct = document.createElement('div');
    const product = document.createElement('div');
    const img = document.createElement('img');
    const divisoria = document.createElement('div');
    const h3 = document.createElement('h3');
    const price = document.createElement('p');
    const methodFunctions = document.createElement('div');
    const updateDiv = document.createElement('div');
    const patchDiv = document.createElement('div');
    const deleteDiv = document.createElement('div');
    const updateIcon = document.createElement('i');
    const patchIcon = document.createElement('i');
    const deleteIcon = document.createElement('i');

    baseProduct.classList.add('base-product');

    product.classList.add('product');
    img.src = data.image;
    divisoria.classList.add('divisoria');
    h3.textContent = data.title;
    price.textContent = 'R$ ' + data.price;

    methodFunctions.classList.add('method-functions');
    updateDiv.classList.add('update');
    updateDiv.id = data.id
    updateIcon.classList.add('fa-solid', 'fa-pen-to-square');
    updateIcon.style.color = '#3881ff';

    patchDiv.classList.add('patch');
    patchDiv.id = data.id
    patchIcon.classList.add('fa-solid', 'fa-pen');
    patchIcon.style.color = '#22cb00';

    deleteDiv.classList.add('delete');
    deleteDiv.id = data.id
    deleteIcon.classList.add('fa-solid', 'fa-trash');
    deleteIcon.style.color = '#e62e00';

    updateDiv.appendChild(updateIcon);
    patchDiv.appendChild(patchIcon);
    deleteDiv.appendChild(deleteIcon);
    methodFunctions.appendChild(updateDiv);
    methodFunctions.appendChild(patchDiv);
    methodFunctions.appendChild(deleteDiv);
    product.appendChild(img);
    product.appendChild(divisoria);
    product.appendChild(h3);
    product.appendChild(price);
    baseProduct.appendChild(product);
    baseProduct.appendChild(methodFunctions);

    return baseProduct
}