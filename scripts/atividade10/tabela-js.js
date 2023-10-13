const error = document.querySelector("#error");
const input = document.querySelector("#txtNumRows");
const table = document.querySelector("#sampleTableBody");

input.addEventListener("keyup", (keyPressed) => {
    if (keyPressed.key === "Enter") {
        js_add_rows();
    }
})

function js_add_rows() {
    const inputValue = input.value;
    error.innerText = "";

    if (inputValue === "") return;
    if (isNaN(inputValue)) {
        error.innerText = "* Só aceitamos números";
        return;
    }
    if (inputValue < 1 || inputValue > 10) {
        error.innerText = "* Só aceitamos números entre 1 e 10";
        return;
    }

    input.value = "";
    table.innerHTML = ``;
    for (let i = 1; i <= inputValue; i++) {
        table.innerHTML += `
        <tr>
            <td>Row${i} cell1</td>
            <td>Row${i} cell2</td>
        </tr>
        `
    }
}