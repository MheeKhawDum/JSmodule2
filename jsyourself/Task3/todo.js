function init(){
    const addButton = document.getElementsByTagName('button')
    for(i=0; i< addButton.length; i++){
        addButton[i].addEventListener('click', addTask) 
  }
}
function addTask(){
    const textValue = document.getElementsByTagName('input')
    
    const addli = document.getElementById('todoList')
    const liElement = document.createElement('li')

    for(i=0; i< textValue.length; i++){
        liElement.textContent = `${textValue[i].value}`
        textValue[i].value = ``
    }
    addli.appendChild(liElement)
}   

init();