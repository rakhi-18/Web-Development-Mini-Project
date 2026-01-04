function addItem() {
    let li = document.createElement("li");

    let text = document.createTextNode("New Item");

    li.appendChild(text);

    document.getElementById("list").appendChild(li);
}

function changeFirstItem() {
    let list = document.getElementById("list");

    if (list.firstElementChild) {
        list.firstElementChild.textContent = "Modified Item";
    }
}

function removeLastItem() {
    let list = document.getElementById("list");

    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
}
