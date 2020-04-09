var mainDiv = document.getElementById('todo');
// console.log(mainDiv)


var inputDiv = document.createElement('div');
inputDiv.setAttribute('class','box-1')

var h2 = document.createElement('h2')
var h2Text = document.createTextNode('ToDo List')

var input = document.createElement('input');
input.setAttribute("type",'text')
input.setAttribute("class",'inputs')
input.setAttribute("id",'add-todo')
input.setAttribute("placeholder",'Enter an activvity')

var button = document.createElement('button')
button.setAttribute("onClick","addWork()")
button.setAttribute("class","btn")
var btnText = document.createTextNode('Add work')

h2.appendChild(h2Text)  //h2 me h2text a jaey gaa 
inputDiv.appendChild(h2) //inputDiv k andar h2
inputDiv.appendChild(input) // inputDiv k andar input field
button.appendChild(btnText) 
inputDiv.appendChild(button)

mainDiv.appendChild(inputDiv) //r ye sab main me chyley jaey gyy 

//for app list
var listDiv = document.createElement('div')
listDiv.setAttribute('class','list-div')

var ul = document.createElement('ul')
ul.setAttribute('id','ul')


function addWork(){
    var li = document.createElement('li')
    var addTodo = document.getElementById('add-todo').value  
    console.log(addTodo)
    if (addTodo === '') {
        alert("You must write something!");
      } else {
        var liText = document.createTextNode(addTodo)
      }


    var delbtn = document.createElement('button')
    var delBtnText = document.createTextNode('Delete')
    delbtn.appendChild(delBtnText)

    var editBtn = document.createElement('button')
    var editBtnText = document.createTextNode('Edit')
    editBtn.appendChild(editBtnText)

    li.appendChild(liText)
    li.appendChild(editBtn)
    li.appendChild(delbtn)
    ul.appendChild(li)
    listDiv.appendChild(ul)


    delbtn.addEventListener('click',function(){
        delbtn. parentElement.remove()
    })

    editBtn.addEventListener('click',function(){
        editBtn.parentNode
    })


    mainDiv.appendChild(listDiv)
    document.getElementById('add-todo').value = '';
}