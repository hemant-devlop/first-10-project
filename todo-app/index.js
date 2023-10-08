const todoForm = document.querySelector(".form-todo");
const todoText = document.querySelector(".form-todo input[type=text]");
const todolist = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (todoText.value == "") {
        alert("Please input your today task!!!");
    } else {
        const newTodoText = todoText.value;
        const newLi = document.createElement("li");
        const newLiInnerHtml = `<span class="text">${newTodoText}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`
        newLi.innerHTML = newLiInnerHtml;
        todolist.append(newLi)
        todoText.value = "";
    }
})

todolist.addEventListener("click",(e)=>{
    // if user click on done 
    if(e.target.classList.contains("done")){
        const liSpan=  e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration="line-through";
    }
    if(e.target.classList.contains("remove")){
        const delLi=  e.target.parentNode.parentNode;
        delLi.remove();
    }
})
