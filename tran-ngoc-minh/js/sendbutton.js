// buttons.js - File JavaScript cho xử lý nút

function handleExit() {
    if (confirm('Bạn có chắc chắn muốn thoát không?')) {
        // Có thể redirect về trang chính hoặc đóng modal
        window.location.href = '/';
        // Hoặc nếu là modal: window.close();
    }
}

function handleSend() {
    // Xử lý gửi form hoặc dữ liệu
    console.log('Đang gửi...');
    
    // Thu thập dữ liệu từ các form trên trang
    const formData = new FormData();
    
    // Thu thập dữ liệu từ các input fields
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        if (input.value && input.name) {
            formData.append(input.name, input.value);
        }
    });
    
    // Có thể gửi dữ liệu lên server
    // fetch('/api/submit', {
    //     method: 'POST',
    //     body: formData
    // })
    // .then(response => response.json())
    // .then(data => {
    //     alert('Đã gửi thành công!');
    // })
    // .catch(error => {
    //     alert('Có lỗi xảy ra khi gửi!');
    // });
    
    // Tạm thời hiển thị thông báo
    alert('Đã gửi thành công!');
}

// Khởi tạo các event listeners nếu cần
document.addEventListener('DOMContentLoaded', function() {
    // Có thể thêm các event listeners khác ở đây nếu cần
});