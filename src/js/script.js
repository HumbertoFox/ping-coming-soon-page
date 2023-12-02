const selectInputEmail = document.getElementById("input-email");
const selectSectionSec = document.querySelector(".section-secondary");


document.querySelector(".btn-submit").addEventListener("click", () => {
    const emailValid = selectInputEmail.value;
    const resolutionWidth = window.innerWidth;
    const insertIText = '<i class="error-message">Please provide a valid email address</i>';

    if (validateEmail(emailValid) === true) {
        selectInputEmail.value = "";
        removeIText();
    } else {
        if(resolutionWidth > 660) {
        removeIText();
        selectInputEmail.classList.add("error");
        selectSectionSec.style.marginTop = "64px";
        selectInputEmail.insertAdjacentHTML("afterend", insertIText);
        } else {
            removeIText();
            selectInputEmail.classList.add("error");
            selectSectionSec.style.marginTop = "58px";
            selectInputEmail.insertAdjacentHTML("afterend", insertIText);
        };
    };
});

function removeIText() {
    const classError = selectInputEmail.classList.value;
    const resolutionWidth = window.innerWidth;

    if (classError.includes("error") && (resolutionWidth > 660)) {
        selectInputEmail.classList.remove("error");
        selectSectionSec.style.marginTop = "87px";
        selectInputEmail.nextElementSibling.remove("error-message");
    } else if (classError.includes("error") && (resolutionWidth <= 660)){
        selectInputEmail.classList.remove("error");
        selectSectionSec.style.marginTop = "110px";
        selectInputEmail.nextElementSibling.remove("error-message");
    } else {
        return;
    };
};

const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};