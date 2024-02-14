function init() {
    // head
    const head = document.querySelector('head')
    const title = document.createElement('title')
    title.textContent = 'Registration Form'
    head.appendChild(title)

    // body
    const body = document.querySelector('body')
    const h2 = document.createElement('h2')
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')
    const div4 = document.createElement('div')
    

    h2.textContent = 'Register'

    //div 1
    const label1 = document.createElement('label')
    const input1 = document.createElement('input')

    label1.setAttribute('for', 'name')
    label1.textContent = 'Full Name'
    input1.setAttribute('type', 'text')
    input1.setAttribute('id', 'name')
    input1.setAttribute('name', 'name')
    input1.setAttribute('required', '');

    div1.appendChild(label1)
    div1.appendChild(input1)

    //div 2
    const label2 = document.createElement('label')
    const input2 = document.createElement('input')

    label2.setAttribute('for', 'email')
    label2.textContent = 'Email Address'
    input2.setAttribute('type', 'email')
    input2.setAttribute('id', 'email')
    input2.setAttribute('name', 'email')
    input2.setAttribute('required', '');

    div2.appendChild(label2)
    div2.appendChild(input2)

    //div 3
    const button = document.createElement('button')
    button.setAttribute('type', 'submit')
    button.textContent = 'Register'
    
    div3.appendChild(button)

    body.appendChild(h2)
    body.appendChild(div1)
    body.appendChild(div2)
    body.appendChild(div3)
    body.appendChild(div4)

    const buttonClick = document.querySelector('button')
    buttonClick.addEventListener('click', showUserRegister)
}
function showUserRegister(){
    const div4 = document.querySelectorAll('div')[3]
    const p = document.createElement('p')
    const name = document.getElementById('name')
    const email = document.getElementById('email')


    p.textContent = `Name: ${name.value}, Email: ${email.value}`
    name.value = ''
    email.value = ''

    div4.appendChild(p)
    
}
init();