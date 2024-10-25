function selectImage(imageSrc) {
    const displayedImage = document.getElementById('displayed-image');
    displayedImage.src = imageSrc;
    displayedImage.style.display = 'block'; // Hiển thị hình ảnh đã chọn
}
