// Lấy tất cả các phần tử có class 'facebook-login' (danh sách phần tử)
var facebookButtons = document.getElementsByClassName('facebook-login');

// Lặp qua tất cả các nút 'facebook-login' và gắn sự kiện onclick
for (var i = 0; i < facebookButtons.length; i++) {
    facebookButtons[i].onclick = function (event) {
        event.preventDefault();
        // Ngăn chặn hành vi mặc định khi click
        window.location.href = 'https://www.facebook.com/dialog/oauth?client_id=104262655564392&redirect_uri=http://localhost/index/facebook&scope=public_profile,email';
        // Thay đổi đường dẫn đăng nhập sang đường dẫn Facebook
    };
}

// Lấy phần tử Google login bằng id (cần thêm id vào HTML)
var googleLoginButton = document.getElementsByClassName('google-login');

// Kiểm tra xem nút có tồn tại trước khi gắn sự kiện
for (var i = 0; i < googleLoginButton.length; i++) {
    googleLoginButton[i].onclick = function (event) {
        event.preventDefault();
        // Ngăn chặn hành vi mặc định khi click
        window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&redirect_uri=http://localhost/index/google&client_id=YOUR_GOOGLE_CLIENT_ID';
        // Thay đổi đường dẫn đăng nhập sang đường dẫn Google OAuth
    };
}
//  tạo hover ngẫu nhiên bằng js
const listItems = document.querySelectorAll('.sub-item-menu');

// Loop through each list item and add event listeners
listItems.forEach(item => {
    // Add event listener for mouse entering the element
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = 'orange';
        item.style.color = '#000';
    });

    // Add event listener for mouse leaving the element
    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = ''; // Reset background
        item.style.color = '#333'; // Reset text color
    });
});



// Hàm chọn tất cả các checkbox
function checkAll() {
    let checkboxes = document.querySelectorAll('.item-checkbox');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = true;
    });
}

// Hàm bỏ chọn tất cả các checkbox
function uncheckAll() {
    let checkboxes = document.querySelectorAll('.item-checkbox');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
}

// Hàm hiển thị các mục đã được chọn
// Gọi hàm khi có sự thay đổi trong các checkbox
document.querySelectorAll('.item-checkbox').forEach((checkbox) => {
    checkbox.addEventListener('change', getCheckedItems);
});

// Hàm lấy các checkbox đã được chọn
function getCheckedItems() {
    // Lấy tất cả các checkbox có class 'item-checkbox'
    let checkboxes = document.querySelectorAll('.item-checkbox');
    let checkedItems = [];

    // Duyệt qua tất cả các checkbox và kiểm tra cái nào được chọn
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            checkedItems.push(checkbox.value);  // Thêm giá trị của checkbox đã được chọn vào mảng
        }
    });

    // In ra các mục đã được chọn
   
    let items = checkedItems[checkedItems.length - 1];
    window.location.href = 'searchProduct.html';
    uncheckAll();

}



function loadMain(){
    window.location.href = 'main.html';
}

const citySelect = document.getElementById('city');
const districtSelect = document.getElementById('district');
const addressSelect = document.getElementById('address');

const districtsData = {
    hanoi: [
        "Ba Đình",
        "Hoàn Kiếm",
        "Đống Đa",
        "Hai Bà Trưng",
        "Hoàng Mai",
        "Long Biên",
        "Nam Từ Liêm",
        "Tây Hồ",
        "Thanh Xuân",
        "Cầu Giấy",
        "Gia Lâm",
        "Sóc Sơn"
    ],
    haiphong: [
        "Hồng Bàng",
        "Lê Chân",
        "Ngô Quyền",
        "Kiến An",
        "Đồ Sơn",
        "Dương Kinh",
        "An Dương",
        "An Lão",
        "Tiên Lãng",
        "Vĩnh Bảo"
    ],
    thuathienhue: [
        "Hương Thủy",
        "Hương Trà",
        "Phú Vang",
        "Phú Lộc",
        "A Lưới",
        "Nam Đông",
        "Bạch Mã"
    ],
    nhatrang: [
        "Nha Trang",
        "Cam Ranh",
        "Vĩnh Hải",
        "Vĩnh Nguyên",
        "Diên Khánh"
    ],
    danang: [
        "Hải Châu",
        "Thanh Khê",
        "Sơn Trà",
        "Ngũ Hành Sơn",
        "Liên Chiểu",
        "Hòa Vang"
    ],
    tphcm: [
        "Quận 1",
        "Quận 2",
        "Quận 3",
        "Quận 4",
        "Quận 5",
        "Quận 6",
        "Quận 7",
        "Quận 8",
        "Quận 9",
        "Quận 10",
        "Quận 11",
        "Quận 12"
    ],
    cantho: [
        "Ninh Kiều",
        "Cái Răng",
        "Ô Môn",
        "Thốt Nốt",
        "Phong Điền",
        "Vĩnh Thạnh",
        "Cờ Đỏ"
    ]
};

const addressesData = {
    hanoi: {
        "Ba Đình": ["Phường Trúc Bạch", "Phường Đội Cấn"],
        "Hoàn Kiếm": ["Phường Hàng Bạc", "Phường Hàng Đào"],
        "Đống Đa": ["Phường Khâm Thiên", "Phường Trung Liệt"],
        "Hai Bà Trưng": ["Phường Bùi Thị Xuân", "Phường Vĩnh Tuy"],

    },
    haiphong: {
        "Hồng Bàng": ["Phường Hạ Lý", "Phường Minh Khai"],
        "Lê Chân": ["Phường Vĩnh Niệm", "Phường Dư Hàng Kênh"],

    },
    thuathienhue: {
        "Hương Thủy": ["Phường Thủy Dương", "Phường Thủy Vân"],

    },
    nhatrang: {
        "Nha Trang": ["Phường Vĩnh Hải", "Phường Vĩnh Nguyên"],

    },
    danang: {
        "Hải Châu": ["Phường Hòa Cường Bắc", "Phường Hòa Cường Nam"],

    },
    tphcm: {
        "Quận 1": ["Phường Bến Nghé", "Phường Bến Thành"],

    },
    cantho: {
        "Ninh Kiều": ["Phường An Nghiệp", "Phường An Khánh"],

    }
};

citySelect.addEventListener('change', function () {
    const selectedCity = this.value;


    districtSelect.innerHTML = '<option value="">Chọn quận/huyện</option>';
    addressSelect.innerHTML = '<option value="">Chọn phường/xã</option>';

    if (districtsData[selectedCity]) {
        districtsData[selectedCity].forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
});

districtSelect.addEventListener('change', function () {
    const selectedCity = citySelect.value;
    const selectedDistrict = this.value;


    addressSelect.innerHTML = '<option value="">Chọn phường/xã</option>';

    if (addressesData[selectedCity] && addressesData[selectedCity][selectedDistrict]) {
        addressesData[selectedCity][selectedDistrict].forEach(address => {
            const option = document.createElement('option');
            option.value = address;
            option.textContent = address;
            addressSelect.appendChild(option);
        });
    }
});

const buttonhome = document.getElementById('buttonhome');
const buttonCity = document.getElementById('buttonCity');
//thêm sự kiện cho nút buttonHome
buttonhome.addEventListener('click',()=> {
    buttonhome.classList.add('btn-selected');
    buttonCity.classList.remove('btn-selected');
});
// thêm nút sự kiện cho buttonCity
buttonCity.addEventListener('click',() =>{
    buttonCity.classList.add('btn-selected');
    buttonhome.classList.remove('btn-selected')
});

function continueToNext() {
    // Hiển thị thông báo thành công    
    alert('Đặt hàng thành công!');

    // Chuyển hướng về trang chủ
    window.location.href = 'deliveryAdd.html'; // Thay 'index.html' bằng đường dẫn trang chủ của bạn
}


