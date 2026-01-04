function runProgram() {
    let number = Number(document.getElementById("num").value);
    let result = "";

    if (number > 0) {
        result += "The number is positive\n";
    } else if (number < 0) {
        result += "The number is negative\n";
    } else {
        result += "The number is zero\n";
    }

    result += "\nFor Loop Output:\n";
    for (let i = 1; i <= 5; i++) {
        result += i + " ";
    }

    result += "\n\nWhile Loop Output:\n";
    let j = 1;
    while (j <= 5) {
        result += j + " ";
        j++;
    }

    result += "\n\nDo While Loop Output:\n";
    let k = 1;
    do {
        result += k + " ";
        k++;
    } while (k <= 5);

    document.getElementById("output").textContent = result;
}
