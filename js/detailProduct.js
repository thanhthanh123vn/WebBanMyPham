const productDiv = document.createElement('div');
function addProduct(product){
    console.log(product);   
productDiv.classList.add('product');

// Tạo nội dung HTML cho sản phẩm
productDiv.innerHTML = `
<tbody>
    <tr>
        <td>
            <div class="product-row">
                <img src="${product.image}" alt="L'Oreal">
 
                <div class="product-details">
                        <h4>${product.name}</h3>
                        <p>${product.detail}</p>
                        <div class="action-buttons">
                            <a href="#">♡ Yêu thích</a>
                            <a href="#">✖ Xóa</a>
                        </div>
                        <span class="price">${product.price}</span>
                        <button class="buy-button">Buy Now</button>
                 </div>
            </div>
    </td>
    </tr>
</tbody>
`;
}
// Thêm sản phẩm vào khối `#session-body-product`
localStorage.setItem('cartProduct',productDiv);