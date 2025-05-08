let items = [];

const itemsContainer = document.getElementById("items")
const input = document.getElementById("itemInput");
const storageKey = "items"

function renderItems() {
    itemsContainer.innerHTML = null
    
    for (const [idx, item] of Object.entries(items)) {
        const itemContainer = document.createElement("div")
        itemContainer.style.marginBottom = "10px"

        const itemText = document.createElement("p");
        itemText.style.display = "inline"
        itemText.style.marginRight = "10px"
        itemText.textContent = item;

        const itemButton = document.createElement("button");
        itemButton.textContent = "Delete"
        itemButton.onclick = () => removeItem(idx)

        itemContainer.appendChild(itemText)
        itemContainer.appendChild(itemButton)
        

        itemsContainer.appendChild(itemContainer);
    }
}

renderItems()

function loadItems() {
    const oldItems = localStorage.getItem(storageKey);
    if(oldItems) items = JSON.parse(oldItems);
    renderItems()
}

function saveItems() {
    const stringItems = JSON.stringify(items)
    localStorage.setItem(storageKey, stringItems)
}

function addItem() {
    const value = input.value;
    if(!value) {
        alert("No empty Items!")
        return
    }
    items.push(value)
    renderItems()
    input.value = ""
    saveItems()
}

function removeItem(idx) {
    items.splice(idx, 1)
    renderItems()
    saveItems()
}

document.addEventListener("DOMContentLoaded", loadItems)