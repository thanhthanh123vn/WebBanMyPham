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