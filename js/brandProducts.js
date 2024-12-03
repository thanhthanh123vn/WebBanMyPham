 // Biến lưu chỉ số của nhóm sản phẩm đang hiển thị

 const brands = [
    {
        name: "Carslan",
        image: "https://media.hcdn.vn/hsk/1731925101carslanpop1811_img_410x410_8c5088_fit_center.jpg"
    },
    {
        name: "L'Oréal Paris",
        image: "https://media.hcdn.vn//hsk/brandL-oreal-cover-brand-500x500-190920241726736320_img_190x190_30c310_fit_center.jpg"
    },
    {
        name: "Cocoon",
        image: "https://media.hcdn.vn//hsk/brandcocoon-image-cover-500x5001712401401_img_190x190_30c310_fit_center.jpg"
    },
    {
        name: "Dove",
        image: "https://media.hcdn.vn//hsk/brandDove-cover-image-500-x-5001720598834_img_190x190_30c310_fit_center.jpg"
    },
    {
        name: "Bioderma",
        image: "https://media.hcdn.vn//hsk/brandbioderma-image-cover-500x500-171020241729156097_img_190x190_30c310_fit_center.jpg"
    },
    {
        name: "La Roche-Posay",
        image: "https://media.hcdn.vn//hsk/brandLa-roche-posay-image-cover-500-x-5001718952735_img_190x190_30c310_fit_center.jpg"
    },
    {
        name: "Vaseline",
        image: "https://media.hcdn.vn//hsk/brandvaselineimage-cover500-x-5001715963019_img_190x190_30c310_fit_center.jpg"
    },
    {
        name: "CeraVe",
        image: "https://media.hcdn.vn//hsk/brandCeraveimagecover500x5001712652261_img_190x190_30c310_fit_center.jpg"
    },
    {
        name: "Naris Up",
        image: "https://media.hcdn.vn//hsk/brandNarisCosmeticsimage-cover500x5001715596352_img_190x190_30c310_fit_center.jpg"
    },
    {
        name: "Eucerin",
        image: "https://media.hcdn.vn//hsk/brandeucerinimagecover500x5001712730538_img_190x190_30c310_fit_center.jpg"
    },
    {
        name: "Skin Aqua",
        image: "https://media.hcdn.vn//hsk/brandSunplaycover-brand500x5001716547706_img_190x190_30c310_fit_center.jpg"
    },
    {
        name: "Skin1004",
        image: "https://media.hcdn.vn//hsk/brandSunplaycover-brand500x5001716547706_img_190x190_30c310_fit_center.jpg"
    },
    {
        name: "Cetaphil",
        image: "https://media.hcdn.vn//hsk/brandcetaphil-image-cover500x5001716177431_img_190x190_30c310_fit_center.jpg"
    },
    {
        name: "Klairs",
        image: "https://media.hcdn.vn//hsk/brandKlairsimage-cover500x5001715596332_img_190x190_30c310_fit_center.jpg"
    },
    {
        name: "Garnier",
        image: "https://media.hcdn.vn//hsk/brandGarnierimage-cover500x5001716200491_img_190x190_30c310_fit_center.jpg"
    },
    {
        name: "Hada Labo",
        image: "https://media.hcdn.vn//hsk/brandHada-Labo-image-cover-500x5001718186717_img_190x190_30c310_fit_center.jpg"
    },
    {
        name: "Anessa",
        image: "https://media.hcdn.vn//hsk/brandAnessaimage-cover500x5001715855624_img_190x190_30c310_fit_center.jpg"
    },
    {
        name: "Vichy",
        image: "https://media.hcdn.vn//hsk/brandVichyimagecover500x5001712652245_img_190x190_30c310_fit_center.jpg"
    },
    {
        name: "JuDyDoll",
        image: "https://media.hcdn.vn//hsk/brandjudydoll-image-cover-500x5001721187082_img_190x190_30c310_fit_center.jpg"
    },
    {
        name: "Hada Labo",
        image: "https://media.hcdn.vn//hsk/brandHada-Labo-image-cover-500x5001718186717_img_190x190_30c310_fit_center.jpg"
    },
    {
        name: "Anessa",
        image: "https://media.hcdn.vn//hsk/brandAnessaimage-cover500x5001715855624_img_190x190_30c310_fit_center.jpg"
    },
    {
        name: "Vichy",
        image: "https://media.hcdn.vn//hsk/brandVichyimagecover500x5001712652245_img_190x190_30c310_fit_center.jpg"
    },
    {
        name: "JuDyDoll",
        image: "https://media.hcdn.vn//hsk/brandjudydoll-image-cover-500x5001721187082_img_190x190_30c310_fit_center.jpg"
    }
];


 // Biến lưu trạng thái slide hiện tại
const itemsPerPageBrand = 8; // Số lượng sản phẩm mỗi lần hiển thị
let currentSlideBrand = 0; // Slide hiện tại
// Render danh sách thương hiệu
function renderBrands() {
    const brandList = document.querySelector('.brand-list');
    brandList.innerHTML = '';
    brands.forEach((brand) => {
        const brandItem = document.createElement('div');
        brandItem.className = 'brand-item';
        brandItem.innerHTML = `
            <img src="${brand.image}" alt="${brand.name}" style="width:100px; height:100px;">
            <p>${brand.name}</p>
        `;
        brandList.appendChild(brandItem);
    });
}

// Hiển thị sản phẩm theo nhóm
function showBrands() {
    const brandItems = document.querySelectorAll('.brand-list .brand-item');
    const totalItems = brandItems.length;

    // Ẩn tất cả các mục
    brandItems.forEach((item) => {
        item.style.display = 'none';
    });

    // Hiển thị các mục thuộc nhóm hiện tại
    for (let i = currentSlideBrand * itemsPerPageBrand; i < Math.min((currentSlideBrand + 1) * itemsPerPageBrand, totalItems); i++) {
        brandItems[i].style.display = 'block';
    }
}

// Chuyển đến nhóm tiếp theo
function nextSlide() {
    const brandItems = document.querySelectorAll('.brand-list .brand-item');
    const totalItems = brandItems.length;

    if (currentSlideBrand < Math.floor(totalItems / itemsPerPageBrand)) {
        currentSlideBrand++;    
        showBrands();
    }
}

// Chuyển đến nhóm trước đó
function prevSlide() {
    if (currentSlideBrand > 0) {
        currentSlideBrand--;
        showBrands();
    }
}

// Gán sự kiện cho các nút
document.querySelector('.nextBrand').addEventListener('click', nextSlide);
document.querySelector('.prevBrand').addEventListener('click', prevSlide);

// Gọi các hàm khi load trang
renderBrands();
showBrands();
