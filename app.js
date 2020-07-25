
var list= document.getElementById("list");
function addTodo(){
    var todo_item= document.getElementById("todo-item")
    var li = document.createElement('li')
    var liText = document.createTextNode (todo_item.value)
    li.appendChild(liText)
    list.appendChild(li)


    var delBtn=document.createElement ("button")
    var delText = document.createTextNode ("DELETE")
    delBtn.appendChild (delText)
    li.appendChild (delBtn)
    delBtn.setAttribute ("Class", "btn")
    delBtn.setAttribute ("onclick", "deleteItem(this)")
    delBtn.appendChild(delText)
    li.appendChild(delBtn)
    li.appendChild(editBtn)
    list.appendChild(li)


    todo_item.value =""
    console.log     (li)
   
}
function deleteItem(e){
    e.parentNode.remove ()
    console.log (e)
}
function deleteAll(){
    list.innerHTML = ""
}
var editBtn = document.createElement("button");
var editText =document.createTextNode ("EDIT")
editBtn.setAttribute ("Class", "btn")
editBtn.appendChild(editText)

editBtn.setAttribute ("onclick","editItem(this)")


function editItem(e){

var val= prompt ("Enter updated value",e.parentNode.firstChild.nodeValue)
e.parentNode.firstChild.nodeValue= val;


}

