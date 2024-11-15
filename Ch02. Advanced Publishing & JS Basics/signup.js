function validateForm() {
    // 오류 메시지 초기화
    document.getElementById("name-error").innerHTML = "";
    document.getElementById("nickname-error").innerHTML = "";
    document.getElementById("email-error").innerHTML = "";
    document.getElementById("password-error").innerHTML = "";
    document.getElementById("password-check-error").innerHTML = "";

    let isVaild = true;

    const name = document.getElementById("name").value;
    if (name.length == 0) {
        document.getElementById("name-error").innerHTML = "필수 입력 항목입니다!";
        isVaild = false;
    }

    const nickname = document.getElementById("nickname").value;
    if (nickname.length < 2 || nickname.length > 5) {
        document.getElementById("nickname-error").innerHTML = "닉네임은 2~5글자로 구성해주세요!";
        isVaild = false;
    }

    const email = document.getElementById("email").value;
    if (!email.includes("@")) {
        document.getElementById("email-error").innerHTML = "올바른 메일 형식이 아닙니다!";
        isVaild = false;
    }

    const password = document.getElementById("password").value;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;
    if (!passwordRegex.test(password)) {
        document.getElementById("password-error").innerHTML = "영어+숫자+특수문자를 조합하여 작성해주세요."
        isVaild = false;
    }

    const passwordCheck = document.getElementById("password-check").value;
    if (password != passwordCheck) {
        document.getElementById("password-check-error").innerHTML = "비밀번호가 일치하지 않습니다.";
        isVaild = false;
    }

    if (isVaild) {
        const submitBtn = document.getElementById('submit-btn');
        submitBtn.classList.add('active');

        const modalWrapper = document.querySelector('.modal-wrapper');
        modalWrapper.style.display = 'block';
        return false;
    }

    return isVaild;
}

const closeButton = document.getElementById('close');
closeButton.addEventListener('click', () => {
    const modalWrapper = document.querySelector('.modal-wrapper');
    modalWrapper.style.display = 'none'; 

    const submitBtn = document.getElementById('submit-btn');
    submitBtn.classList.remove('active');
});
