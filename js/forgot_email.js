async function SendEmail() {
    try {
        var emails = await getEmails(); // Đợi lấy danh sách email từ getEmails
        var fullName = document.getElementById('fullName').value;
        var message = await ranDomPassword();

        emails.forEach(async function (email) {

            var params = {
                from_name: fullName,
                email_id: email,
                message: message
            };
            console.log(email);
            try {
                const response = await emailjs.send("service_3o0pej2", "template_zodgp6h", params);
                console.log("Email sent to " + email + " successfully!", response.status);
                console.log(message, response.status);


                const user = await findUserByEmail(email);
                if (user) {
                    await updatePassword(user.id, message);
                    window.location.href = '../index/login.html';
                }
            } catch (error) {
                console.error("Failed to send email to " + email, error);
            }
        });
    } catch (error) {
        console.error("Lỗi khi gửi email:", error);
    }
}

async function getEmails() {
    try {
        const response = await fetch('http://localhost:3000/users');
        const data = await response.json();
        const emails = data.map(user => user.email);
        console.log("Danh sách email:", emails);

        return emails;
    } catch (error) {
        console.error("Lỗi khi đọc dữ liệu người dùng:", error);
        return [];
    }
}


async function findUserByEmail(email) {
    try {
        const response = await fetch('http://localhost:3000/users');
        const users = await response.json();
        return users.find(user => user.email === email);
    } catch (error) {
        console.error("Lỗi khi tìm người dùng:", error);
    }
}


async function updatePassword(userId, newPassword) {
    try {
        const response = await fetch(`http://localhost:3000/users/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password: newPassword })
        });

        if (response.ok) {
            console.log(`Mật khẩu của người dùng ${userId} đã được cập nhật.`);
        } else {
            console.error("Lỗi khi cập nhật mật khẩu:", response.status);
        }
    } catch (error) {
        console.error("Lỗi khi gửi yêu cầu cập nhật mật khẩu:", error);
    }
}
async function ranDomPassword() {
    return Math.floor(100000 + Math.random() * 900000).toString(); 
}
