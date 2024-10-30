
var index = 0;
function getProductDetail() {
    // thêm số luọng vào giỏi hàng 

    const cart = document.getElementsByClassName('cart-count');
    cart.innerHTML = index++;
    // xóa body
    var carProduct = document.getElementById('session-body');
    carProduct.removeAttribute('div');
    // thêm hình ảnh vào body
    var newDiv = document.createElement('div');
    newDiv.classList.add('product');
    newDiv.innerHTML = `<img src='${imageSrc}' alt='${imageSrc}' onclick='selectImage(this.src)'/>`;
    carProduct.appendChild(newDiv);
    // thêm tên sản phẩm vào body
    var newDiv = document.createElement('div');
    newDiv.classList.add('product-name');
    newDiv.innerHTML = productName;
    carProduct.appendChild(newDiv);
    // thêm giá sản phẩm vào body
    var newDiv = document.createElement('div');
    newDiv.classList.add('product-price');
    newDiv.innerHTML = price;
    carProduct.appendChild(newDiv);

 
    


}