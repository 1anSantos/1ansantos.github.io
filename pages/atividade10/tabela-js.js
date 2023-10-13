const input = document.getElementById("txtNumRows");
const table = document.getElementById("sampleTableBody");

function js_add_rows() {
    const inputValue = input.value;
    if (isNaN(inputValue)) {
        alert("só aceitamos números");
        return;
    }
    if (inputValue < 1 || inputValue > 10) {
        alert("só aceitamos números entre 1 e 10");
        return;
    }

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