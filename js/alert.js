// Đóng popup khi người dùng click vào bất kỳ nút
document.getElementById('deny-btn').addEventListener('click', closePopup);
document.getElementById('agree-btn').addEventListener('click', closePopup);

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

// Tự động mở popup sau khi tải trang
window.onload = function () {
  const popup = document.getElementById('popup');
  popup.style.display = 'flex';
};
