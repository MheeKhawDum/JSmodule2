function init(){
    // div 1
    const div = document.getElementsByTagName('div')
    const addInput = document.createElement('input')
    const addButton = document.createElement('button')

    addInput.setAttribute('type', 'text')
    addInput.setAttribute('placeholder', 'Enter a new Task')

    addButton.innerText = 'Add'
    div[0].appendChild(addInput)
    div[0].appendChild(addButton)

    // div 2
    const addUl = document.createElement('ul')
    addUl.setAttribute('id', 'todoList')
    div[1].appendChild(addUl)

    // add Event
    const addEvent = document.querySelectorAll('div button')
    for(i=0; i<addEvent.length; i++){
        addEvent[i].addEventListener('click', addTask)
    }
}
function addTask(){
    const textValue = document.querySelectorAll('div input')
    const liElement = document.createElement('li')
    const addli = document.getElementById('todoList')

    for(i=0; i< textValue.length; i++){
        liElement.textContent = `${textValue[i].value}`
        textValue[i].value = ``
    }
    addli.appendChild(liElement)

}   

init();