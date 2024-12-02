window.onload = function() {
    // Lấy dữ liệu từ localStorage
    var loadData = localStorage.getItem('address');

    // Kiểm tra nếu có dữ liệu
    if (loadData) {
        var addressData = JSON.parse(loadData);

        // Hiển thị dữ liệu lên giao diện
        var username = document.getElementsByClassName('user-name');
        var userphone = document.getElementsByClassName('user-phone');
        var useraddress = document.getElementsByClassName('user-address');

        // Cập nhật thông tin người dùng vào các thẻ HTML
        if (username.length > 0) username[0].innerHTML = addressData.fullname;
        if (userphone.length > 0) userphone[0].innerHTML = addressData.phone;
        if (useraddress.length > 0) useraddress[0].innerHTML = `${addressData.address.address}, ${addressData.address.district}, ${addressData.address.city}`;
    }
};

