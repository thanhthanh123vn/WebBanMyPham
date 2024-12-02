var priceTotalCart = localStorage.getItem('total-price-cart');
console.log(priceTotalCart);

var totalCart = document.getElementsByClassName('total-amount');

// Kiểm tra nếu có giá trị trong localStorage
if (priceTotalCart) {
   
    // Nếu giá trị là chuỗi số, không cần JSON.parse
    totalCart[0].innerHTML = JSON.parse(priceTotalCart); // Hiển thị giá trị vào phần tử đầu tiên
} else {
    // Nếu không có giá trị, có thể xử lý ở đây
    console.log('No total price found in cart');
}
