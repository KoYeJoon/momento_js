const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = `toDos`;

let toDos = [];


function deleteToDo(event){
    // console.log(event.target.parentNode);
    // delete child element mdn
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        //string -> int
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    // array->json
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}


function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length+1;

    span.innerText = text;
    //father에 붙여주기 위함
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;

    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId,
    };
    toDos.push(toDoObj);
    saveToDos();
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    //seems like submit
    toDoInput.value = "";
}


function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
     // always show so we don't have to do if toDos ===null
    if(loadedToDos !== null){
       // json -> array
       const parsedToDos = JSON.parse(loadedToDos);
       parsedToDos.forEach(function(toDo) {
           paintToDo(toDo.text);
       });
    }
  
}

function init()
{
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();