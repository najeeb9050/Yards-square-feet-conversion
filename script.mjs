document.addEventListener("DOMContentLoaded", function () {
    const yardInput = document.getElementById("yard");
    const squareFeetOutput = document.getElementById("squareFeet");
    const convertButton = document.getElementById("convertButton");

    convertButton.addEventListener("click", function () {
        const yard = parseFloat(yardInput.value);
        if (!isNaN(yard)) {
            const squareFeet = yard * 9;
            squareFeetOutput.textContent = squareFeet.toFixed(2);
        } else {
            squareFeetOutput.textContent = "Invalid input";
        }
    });
});
