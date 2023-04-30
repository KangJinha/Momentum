const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

//JSON.stringify은 string(문자열)로 만들어줌
//JSON.parse는 배열로 만들어줌
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;//버튼의 부모는 li
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}
//li태그안에 span,button 생성
//화면에 아이템들을 그려줌
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerHTML = `<i class="fa-solid fa-eraser"></i>`;
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
//새로고침되는것 막기
//투두리스트 추가하기
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; 
    //input value를 비우기 전에 값을저장
    toDoInput.value = "";//엔터쳤을때 빈칸이되게 만들어주기
    //object에 id부여하기!
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    //string이아닌 js에서 사용가능한 object로 만듦
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    //array의 각 item에 대해 하나의 function을 실행할 수 있음
}

