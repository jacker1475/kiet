const passwordInput = document.getElementById('psw');
const repeatPasswordInput = document.getElementById('pswrepeat');
const passwordMatchMessage = document.getElementById('password-match-message');

// Sử dụng sự kiện input để kiểm tra sự thay đổi trong trường mật khẩu
pswrepeatInput.addEventListener('input', function() {
    const psw = pswInput.value;
    const pswrepeat = pswrepeatInput.value;

    if (psw === pswrepeat) {
        passwordMatchMessage.textContent = 'Mật khẩu trùng khớp.';
        passwordMatchMessage.style.color = 'green';
    } else {
        passwordMatchMessage.textContent = 'Mật khẩu không khớp.';
        passwordMatchMessage.style.color = 'red';
    }
});