const listContainer = document.querySelector("[data-lists]");
const newListForm = document.querySelector("[data-new-list-form]");
const newListInput = document.querySelector("[data-new-list-input]");

let lists = [];

// Função para monitorar o botão enviar do formulário

newListForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const listName = newListInput.value;
    if (listName === null || listName === "") return;

    const list = createList(listName);
    newListInput.value = null;
    lists.push(list);
    render();
})

// Função para remover elemento com botão "-"




// Função para criar um objeto com ID baseado na hora/data da criação e nome inserido

function createList(name) {
    return {
        id: Date.now().toString(),
        name: name
    }
}

// Função para renderizar cada elemento adicionado à lista 

function render() {
    clearElement(listContainer)
    lists.forEach(function(list){
        const item = document.createElement("li");
        item.classList.add("item");
        item.innerText = list.name;
        listContainer.appendChild(item);
    })
}

function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}


render();