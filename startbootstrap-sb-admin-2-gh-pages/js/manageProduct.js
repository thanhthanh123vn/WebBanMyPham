// Dữ liệu sản phẩm mẫu
let products = [
    { id: "SP001", name: "Sữa Chống Nắng Anessa", brand: "Anessa", image: "https://media.hcdn.vn/catalog/product/f/a/facebook-dynamic-kem-duong-la-roche-posay-giup-phuc-hoi-da-da-cong-dung-40ml-1716439945_img_380x380_64adc6_fit_center.jpg", price: 237000, description: "Sữa chống nắng dưỡng da, kiểm dầu.", category: "Chống Nắng", status: "Còn Hàng" },
    { id: "SP002", name: "Nước tẩy trang Da L'Oreal", brand: "L'Oreal", image: "https://media.hcdn.vn/catalog/product/f/a/facebook-dynamic-205100137-1695896128_img_380x380_64adc6_fit_center.png", price: 399000, description: "Kem dưỡng da ban ngày, cung cấp độ ẩm.", category: "Dưỡng Da", status: "Còn Hàng" },
    { id: "SP003", name: "Sữa Rửa Mặt Innisfree", brand: "Innisfree", image: "https://media.hcdn.vn/catalog/product/f/a/facebook-dynamic-422215274-1696400387_img_300x300_b798dd_fit_center.jpg", price: 250000, description: "Sữa rửa mặt chiết xuất trà xanh.", category: "Sữa Rửa Mặt", status: "Hết Hàng" },
];

// Hiển thị danh sách sản phẩm
function displayProducts() {
    const productBody = document.getElementById("productBody");
    productBody.innerHTML = "";

    products.forEach((product, index) => {
        const row = `<tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.brand}</td>
            <td><img src="${product.image}" alt="${product.name}" width="50"></td>
            <td>${product.price.toLocaleString()} đ</td>
            <td>${product.description}</td>
            <td>${product.category}</td>
            <td>${product.status}</td>
            <td>
                <button onclick="editProduct(${index})">Sửa</button>
                <button onclick="deleteProduct(${index})">Xóa</button>
            </td>
        </tr>`;
        productBody.innerHTML += row;
    });
}

// Hiển thị modal thêm sản phẩm
function showAddModal() {
    document.getElementById("modalTitle").innerText = "Thêm Sản Phẩm";
    document.getElementById("productID").value = "";
    document.getElementById("productName").value = "";
    document.getElementById("brand").value = "";
    document.getElementById("imageURL").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
    document.getElementById("category").value = "";
    document.getElementById("status").value = "";
    document.getElementById("productModal").style.display = "block";
}

// Hiển thị modal sửa sản phẩm
function editProduct(index) {
    const product = products[index];
    document.getElementById("modalTitle").innerText = "Sửa Sản Phẩm";
    document.getElementById("productID").value = product.id;
    document.getElementById("productName").value = product.name;
    document.getElementById("brand").value = product.brand;
    document.getElementById("imageURL").value = product.image;
    document.getElementById("price").value = product.price;
    document.getElementById("description").value = product.description;
    document.getElementById("category").value = product.category;
    document.getElementById("status").value = product.status;
    document.getElementById("productModal").style.display = "block";

    // Lưu lại index đang chỉnh sửa
    document.getElementById("productModal").dataset.index = index;
}

// Lưu sản phẩm (thêm hoặc sửa)
function saveProduct() {
    const id = document.getElementById("productID").value || `SP${products.length + 1}`;
    const name = document.getElementById("productName").value;
    const brand = document.getElementById("brand").value;
    const image = document.getElementById("imageURL").value;
    const price = parseFloat(document.getElementById("price").value);
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const status = document.getElementById("status").value;

    const product = { id, name, brand, image, price, description, category, status };

    const index = document.getElementById("productModal").dataset.index;

    if (index) {
        products[index] = product; // Cập nhật sản phẩm
    } else {
        products.push(product); // Thêm mới sản phẩm
    }

    hideModal();
    displayProducts();
}

// Xóa sản phẩm
function deleteProduct(index) {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
        products.splice(index, 1);
        displayProducts();
    }
}

// Ẩn modal
function hideModal() {
    document.getElementById("productModal").style.display = "none";
    delete document.getElementById("productModal").dataset.index;
}

// Khởi tạo hiển thị
displayProducts();
