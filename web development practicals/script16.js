function toggleBox() {
    let box = document.getElementById("box");

    if (box.style.display === "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}

function toggleStyle() {
    let box = document.getElementById("box");

    box.classList.toggle("highlight");
}
