const btns = document.querySelectorAll('.btn-container button');
const display = document.querySelector('.display-p');

for (let button of btns) {
    button.addEventListener('click', (eve) => {
        let clickedBtn = eve.target.innerText;
        calculate(clickedBtn);
    })
}

let result = document.createElement('p');
let string = "";
function calculate(parameter) {

    if (parameter == '=') {
        string = eval(string);
        display.append(result);
        result.innerText = string;
        string = "";

    } else if (parameter == 'C') {
        string = "";
        result.innerText = "";
        display.innerText = "";

    }
    else {
        string += parameter;
        display.innerHTML = string;
    }
};

const backBtn = document.querySelector(".fa-delete-left");
backBtn.addEventListener('click', () => {
    string = string.slice(0, -1);
    display.innerText = string;

});