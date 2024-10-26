var find = document.getElementById('find-product');
find.onclick = function () {
    let productName = document.getElementById('search-input').value;
    console.log(productName);

    // Dữ liệu sản phẩm mẫu
    const products = [
        { id: 1, name: "Nước Tẩy Trang L'Oreal", description: "Nước Tẩy Trang L'Oreal Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml." ,image: "https://media.hcdn.vn/catalog/product/f/a/facebook-dynamic-205100137-1695896128_img_300x300_b798dd_fit_center.png" },
        { id: 2, name: "Nước Hoa Hồng Klairs", description: "Nước Hoa Hồng Klairs Không Mùi Cho Da Nhạy Cảm 180ml.", image :"https://media.hcdn.vn/catalog/product/f/a/facebook-dynamic-318900012-1696306376_img_300x300_b798dd_fit_center.jpg"},
        { id: 3, name: "Sữa Rửa Mặt CeraVe", description: "Sữa Rửa Mặt CeraVe Sạch Sâu Cho Da." ,image :"https://media.hcdn.vn/catalog/product/f/a/facebook-dynamic-422208973-1696326099_img_300x300_b798dd_fit_center.png"},
        { id: 4, name: "Kem Chống Nắng La Roche-Posay", description: "Kem Chống Nắng La Roche-Posay." ,image : "https://media.hcdn.vn/catalog/product/f/a/facebook-dynamic-kem-chong-nang-la-roche-posay-kiem-soat-dau-spf50-50ml-1716437865_img_300x300_b798dd_fit_center.jpg"}
    ];

    // Tìm kiếm sản phẩm dựa trên tên
    const searchResults = products.filter(product =>
        product.name.toLowerCase().includes(productName.toLowerCase())
    );

    // Lưu trữ kết quả tìm kiếm vào localStorage
    localStorage.setItem('searchResults', JSON.stringify(searchResults));

    // Chuyển hướng đến trang kết quả tìm kiếm
    window.location.href = "findProduct.html";
}

// Hiển thị kết quả tìm kiếm
