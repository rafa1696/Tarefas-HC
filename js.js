const listContainer = document.querySelector("[data-lists]");
const newListForm = document.querySelector("[data-new-list-form]");
const newListInput = document.querySelector("[data-new-list-input]");

let lists = [];

newListForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const listName = newListInput.nodeValue;
    if (listName === null || listName === "") return;

    const list = createList(listName);
    newListInput.value = null;
    lists.push(list);
    render();
})

function render() {
    lists.forEach(function(list){
        const item = document.createElement("li");
        item.classList.add("item");
        item.innerText = list;
        listContainer.appendChild(item);
    })
}