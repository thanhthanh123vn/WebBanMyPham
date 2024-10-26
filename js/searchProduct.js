function searchProduct(){
    // Tìm kiếm sản phẩm theo tên
    let productName = document.getElementById('product-name').value;
    // Gửi dữ liệu tìm kiếm đến trang searchProduct.html
    window.location.href ='searchProduct.html?name=' + productName;


}

// Kiểm tra xem có phải trang searchProduct.html hay không

if(window.location.search.includes('name')){
    let name = new URLSearchParams(window.location.search).get('name');
    document.getElementById('product-name').value = name;
}

