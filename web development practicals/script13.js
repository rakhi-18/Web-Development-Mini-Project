var globalVar = "I am a global var";
let globalLet = "I am a global let";
const globalConst = "I am a global const";

function showMessage(message) {
    return "Message: " + message;
}

function scopeDemo() {
    var functionVar = "Function scoped var";
    let functionLet = "Function scoped let";
    const functionConst = "Function scoped const";

    let text = "";

    if (true) {
        var blockVar = "var inside block";
        let blockLet = "let inside block";
        const blockConst = "const inside block";

        text += blockVar + "\n";
        text += blockLet + "\n";
        text += blockConst + "\n";
    }

    text += blockVar + "\n";

    return text;
}

function runDemo() {
    let output = "";

    output += showMessage("Hello, JavaScript Functions!") + "\n\n";

    output += "Global Variables:\n";
    output += globalVar + "\n";
    output += globalLet + "\n";
    output += globalConst + "\n\n";

    output += "Scope Demonstration:\n";
    output += scopeDemo();

    document.getElementById("output").textContent = output;
}
