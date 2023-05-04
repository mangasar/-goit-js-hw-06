const NameInp = document.querySelector('input#name-input');
const NameOut = document.querySelector('span#name-output');

NameInp.addEventListener('input',changeText) 

function changeText (event) {
    NameOut.textContent = event.currentTarget.value;
    if (event.currentTarget.value === ""){
        NameOut.textContent = "Anonymous" ;
    }
}

