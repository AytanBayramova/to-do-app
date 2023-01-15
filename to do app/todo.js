/* <div class="vezife-item">
<li class="vezife tanitim">Developer</li>
<button class="vezife-btn vezife-btn-tamamlandi">Check</button>
<button class="vezife-btn vezife-btn-sil">Delete</button>
</div> */

const myInput = document.querySelector('.form-item')
const addToBtn = document.querySelectorAll('.form-item')[1]
const todoListSaxlayici = document.querySelector ('.vezife-siyahisi')
addToBtn.addEventListener('click', addToDo)

function addToDo(e){
    e.preventDefault()
    const todoDiv = document.createElement('div')
    
    todoDiv.classList.add('vezife-item')
    console.log(todoDiv)

    const todoLi = document.createElement('li')
    console.log(todoLi)
    todoLi.classList.add('vezife-tanitim')
    todoLi.innerText = myInput.value 
    console.log(todoLi)

    

    const tamamlaButonu = document.createElement ('button')
    tamamlaButonu.classList.add('vezife-btn')
    tamamlaButonu.classList.add('vezife-btn-tamamlandi')
    tamamlaButonu.innerHTML= '<i class="fa fa-check" aria-hidden="true"></i>'

    const deleteBtn = document.createElement ('button')
    deleteBtn.className = "vezife-btn vezife-btn-sil"
    deleteBtn.innerHTML = '<i class= "fa-trash" aria-hidden="true"></i>'

    todoDiv.appendChild(todoLi)
    todoDiv.appendChild(tamamlaButonu)
    todoDiv.appendChild(deleteBtn)

    todoListSaxlayici.appendChild(todoDiv)

    myInput.value = ''
}