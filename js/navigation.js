
document.addEventListener("DOMContentLoaded", () => {
    const editAccountLink = document.getElementById("edit-account-link");

    if (editAccountLink) {
        editAccountLink.addEventListener("click", (event) => {
            // Ngăn hành động mặc định của liên kết
            event.preventDefault();

            // Chuyển sang trang inforUser.html
            window.location.href = "inforUser.html";
        });
    }

    // Trang 2: Thêm chức năng liên quan (nếu cần)
    const editAccount = document.getElementById("edit-account");
    if (editAccount) {
        editAccount.addEventListener("click", (event) => {
            event.preventDefault();
            alert("Chỉnh sửa tài khoản đang được thực hiện!");
        });
    }
});
