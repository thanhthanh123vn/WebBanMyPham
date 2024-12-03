const products = [
    {
        img: "https://media.hcdn.vn/catalog/product/p/r/promotions-auto-nuoc-tay-trang-tuoi-mat-l-oreal-3-in-1-danh-cho-da-dau-da-hon-hop-400ml_VLF3ivLnqLaFKFed_img_220x220_0dff4c_fit_center.png",
        discount: "35% OFF",
        price: "148.000 ₫",
        originalPrice: "229.000 ₫",
        name: "Nước Tẩy Trang L'Oreal Tươi Mát Cho Da Dầu, Hỗn Hợp"
    },
    {
        img: "https://media.hcdn.vn/catalog/product/f/a/facebook-dynamic-318900012-1730367448_img_220x220_0dff4c_fit_center.jpg",
        discount: "52% OFF",
        price: "209.000 ₫",
        originalPrice: "435.000 ₫",
        name: "Nước Hoa Hồng Klairs Không Mùi Cho Da Nhạy Cảm 180ml"
    },
    {
        img: "https://media.hcdn.vn/catalog/product/f/a/facebook-dynamic-253900006-1695973833_img_220x220_0dff4c_fit_center.jpg",
        discount: "51% OFF",
        price: "219.000 ₫",
        originalPrice: "445.000 ₫",
        name: "Kem Chống Nắng Skin1004 Cho Da Nhạy Cảm SPF 50+ 50ml"
    },
    {
        img: "https://media.hcdn.vn/catalog/product/p/r/promotions-auto-nuoc-tay-trang-bioderma-danh-cho-da-nhay-cam-500ml_ZhseJ4SSbNTNotA5_img_220x220_0dff4c_fit_center.png",
        discount: "34% OFF",
        price: "348.000 ₫",
        originalPrice: "525.000 ₫",
        name: "Nước Tẩy Trang Bioderma Dành Cho Da Nhạy Cảm 500ml"
    },
    {
        img: "https://media.hcdn.vn/catalog/product/f/a/facebook-dynamic-422202025-1701315561_img_220x220_0dff4c_fit_center.png",
        discount: "30% OFF",
        price: "115.000 ₫",
        originalPrice: "165.000 ₫",
        name: "Tẩy Da Chết Mặt Cocoon Cà Phê Đắk Lắk 150ml"
    },
    {
        img: "https://media.hcdn.vn/catalog/product/f/a/facebook-dynamic-bong-tay-trang-hotosu-cao-cap-150-mieng-1718617065_img_220x220_0dff4c_fit_center.jpg",
        discount: "96% OFF",
        price: "26.000 ₫",
        originalPrice: "50.000 ₫",
        name: "Bông Tẩy Trang Hoto Cao Cấp 150 Miếng"
    },
    {
        img: "https://media.hcdn.vn/catalog/product/p/r/promotions-auto-nuoc-tay-trang-tuoi-mat-l-oreal-3-in-1-danh-cho-da-dau-da-hon-hop-400ml_VLF3ivLnqLaFKFed_img_220x220_0dff4c_fit_center.png",
        discount: "35% OFF",
        price: "148.000 ₫",
        originalPrice: "229.000 ₫",
        name: "Nước Tẩy Trang L'Oreal Tươi Mát Cho Da Dầu, Hỗn Hợp"
    },
    {
        img: "https://media.hcdn.vn/catalog/product/f/a/facebook-dynamic-318900012-1730367448_img_220x220_0dff4c_fit_center.jpg",
        discount: "52% OFF",
        price: "209.000 ₫",
        originalPrice: "435.000 ₫",
        name: "Nước Hoa Hồng Klairs Không Mùi Cho Da Nhạy Cảm 180ml"
    },
    {
        img: "https://media.hcdn.vn/catalog/product/p/r/promotions-auto-nuoc-tay-trang-tuoi-mat-l-oreal-3-in-1-danh-cho-da-dau-da-hon-hop-400ml_VLF3ivLnqLaFKFed_img_220x220_0dff4c_fit_center.png",
        discount: "35% OFF",
        price: "148.000 ₫",
        originalPrice: "229.000 ₫",
        name: "Nước Tẩy Trang L'Oreal Tươi Mát Cho Da Dầu, Hỗn Hợp"
    },
    {
        img: "https://media.hcdn.vn/catalog/product/f/a/facebook-dynamic-318900012-1730367448_img_220x220_0dff4c_fit_center.jpg",
        discount: "52% OFF",
        price: "209.000 ₫",
        originalPrice: "435.000 ₫",
        name: "Nước Hoa Hồng Klairs Không Mùi Cho Da Nhạy Cảm 180ml"
    },
    {
        img: "https://media.hcdn.vn/catalog/product/p/r/promotions-auto-nuoc-tay-trang-tuoi-mat-l-oreal-3-in-1-danh-cho-da-dau-da-hon-hop-400ml_VLF3ivLnqLaFKFed_img_220x220_0dff4c_fit_center.png",
        discount: "35% OFF",
        price: "148.000 ₫",
        originalPrice: "229.000 ₫",
        name: "Nước Tẩy Trang L'Oreal Tươi Mát Cho Da Dầu, Hỗn Hợp"
    },
    {
        img: "https://media.hcdn.vn/catalog/product/f/a/facebook-dynamic-318900012-1730367448_img_220x220_0dff4c_fit_center.jpg",
        discount: "52% OFF",
        price: "209.000 ₫",
        originalPrice: "435.000 ₫",
        name: "Nước Hoa Hồng Klairs Không Mùi Cho Da Nhạy Cảm 180ml"
    }
   
];



function renderProducts() {
    const productSlider = document.getElementById('productSlider');
    productSlider.innerHTML = ''; // Clear existing products

    // Get the next 6 products to display
    const productsToDisplay = products.slice(currentSlide, currentSlide + 6);

    // Loop through the products and add them to the slider
    productsToDisplay.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div class="product-info">
                <span class="discount">${product.discount}</span>
                <span class="price">${product.price}</span>
                <span class="original-price">${product.originalPrice}</span>
                <p class="product-name">${product.name}</p>
            </div>
        `;
        productItem.addEventListener('click', () => {
            window.open('productDetail.html');
        });
        productSlider.appendChild(productItem);
    });
}

function changeSlide(direction) {
    currentSlide += direction * 6;

    // Ensure currentSlide stays within bounds
    if (currentSlide < 0) {
        currentSlide = 0;
    } else if (currentSlide >= products.length) {
        currentSlide = products.length - 6;
    }

    renderProducts();
}


// Initialize the slider
renderProducts();