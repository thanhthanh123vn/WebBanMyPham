const categories = [
    {
        img: "https://media.hcdn.vn/catalog/category/c24-trang-diem-moi_img_120x120_17b03c_fit_center.jpg",
        name: "Trang Điểm Môi"
    },
    {
        img: "https://media.hcdn.vn/catalog/category/30_1_img_120x120_17b03c_fit_center.jpg",
        name: "Mặt Nạ"
    },
    {
        img: "https://media.hcdn.vn/catalog/category/c52-trang-diem-mat_img_120x120_17b03c_fit_center.jpg",
        name: "Trang Điểm Mặt"
    },
    {
        img: "https://media.hcdn.vn/catalog/category/19_3_img_120x120_17b03c_fit_center.jpg",
        name: "Sữa Rửa Mặt"
    },
    {
        img: "https://media.hcdn.vn/catalog/category/c50-trang-diem-mat_img_120x120_17b03c_fit_center.jpg",
        name: "Trang Điểm Mắt"
    },
    {
        img: "https://media.hcdn.vn/catalog/category/2144_img_120x120_17b03c_fit_center.jpg",
        name: "Dầu Gội Và Dầu Xả"
    },
    {
        img: "https://media.hcdn.vn/catalog/category/11_1_img_120x120_17b03c_fit_center.jpg",
        name: "Chống Nắng Da Mặt"
    },
    {
        img: "https://media.hcdn.vn/catalog/category/26_1_img_120x120_17b03c_fit_center.jpg",
        name: "Sữa Tắm"
    },
    {
        img: "https://media.hcdn.vn/catalog/category/48_1_img_120x120_17b03c_fit_center.jpg",
        name: "Tẩy Trang Mặt"
    },
    {
        img: "https://media.hcdn.vn/catalog/category/c1897-duong-the_img_120x120_17b03c_fit_center.jpg",
        name: "Dưỡng Thể"
    },
    {
        img: "https://media.hcdn.vn/catalog/category/nuoc-hoa-c103_2_4_img_120x120_17b03c_fit_center.jpg",
        name: "Nước Hoa"
    },
    {
        img: "https://media.hcdn.vn/catalog/category/cover-image-cham-soc-rang-mieng-c323_img_120x120_17b03c_fit_center.jpg",
        name: "Chăm Sóc Răng Miệng"
    },
    {
        img: "https://media.hcdn.vn/catalog/category/c1899-khu-mui_img_120x120_17b03c_fit_center.jpg",
        name: "Khử Mùi"
    },
    {
        img: "https://media.hcdn.vn/catalog/category/1901_1_img_120x120_17b03c_fit_center.jpg",
        name: "Tẩy Da Chết"
    },
    {
        img: "https://media.hcdn.vn/catalog/category/102_1_img_120x120_17b03c_fit_center.jpg",
        name: "Serum / Dầu Dưỡng Tóc"
    },
    {
        img: "https://media.hcdn.vn/catalog/category/102_1_img_120x120_17b03c_fit_center.jpg",
        name: "Serum / Dầu Dưỡng Tóc"
    }
];

// Render các danh mục sản phẩm
let currentSlide = 0;
const itemsPerPage = 8;
var currentCategorySlide = 0;
// Hàm thay đổi trang sản phẩm (slide)
function changeCategorySlide(direction) {
    currentCategorySlide += direction * itemsPerPage;

    // Đảm bảo chỉ số không vượt quá phạm vi
    if (currentCategorySlide < 0) {
        currentCategorySlide = 0;
    } else if (currentCategorySlide >= categories.length) {
        currentCategorySlide = categories.length - itemsPerPage;
    }

    renderCategories(); // Gọi hàm render lại sản phẩm
}

// Hàm hiển thị các sản phẩm trên trang
function renderCategories() {
    const container = document.getElementById('category-product');
    container.innerHTML = ''; // Xóa các mục hiện tại

    const visibleCategories = categories.slice(currentCategorySlide, currentCategorySlide + itemsPerPage);

    visibleCategories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.classList.add('category');
        categoryElement.innerHTML = `
            <img src="${category.img} " alt="${category.name}">
            <p>${category.name}</p>
        `;
        container.appendChild(categoryElement);
    });
}

// Gọi hàm renderCategories khi trang tải để hiển thị sản phẩm ban đầu
renderCategories();