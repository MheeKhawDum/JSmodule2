function init(){
    const addButton = document.getElementById('addButton')

    addButton.addEventListener('click', addTask)
}
function addTask(){
    const inputValue = document.getElementById('todoInput')
    const addli = document.getElementById('todoList')
    
    const liElement = document.createElement('li')
    liElement.textContent = `${inputValue.value}`
    addli.appendChild(liElement)

    inputValue.value = ``
}   

init();