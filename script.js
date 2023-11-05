const button = document.getElementById('add');
const input = document.querySelector('#inputfield');

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault()
        output();
    }
});
button.addEventListener("click", output);

function output(e) {
    const inputValue = input.value.trim();
    if (input.value === "") {
        alert("Please enter any text to proceed.");
    }
    else {
        spanStyle(inputValue);
        input.value = "";
    }
}



function spanStyle(spana) {
    let divItem = document.getElementById("todo-list");
    let spanText = document.createElement("span");
    spanText.textContent = spana;
    // divItem.appendChild(spanText);
    divItem.appendChild(spanText);
    spanText.addEventListener("dblclick", function () {
        spanText.remove();
    });
    divItem.appendChild(spanText);
}