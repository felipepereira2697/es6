
let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let btnElement = document.querySelector('#app button');

//let todos = ['Study','Exercises', 'Coffee'];
let todos = JSON.parse(localStorage.getItem('listTodos')) || [];

function renderAll(){
    //clean before insert
    listElement.innerHTML = '';
    todos.forEach((item) => {
        let indexOfItem = todos.indexOf(item);
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(item);

        let linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');
        linkElement.setAttribute('onclick', 'deleteTodo(' +indexOfItem+ ')');


        let linkElementText = document.createTextNode('Delete');
        linkElement.appendChild(linkElementText);
        
        
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    })
    

}

function add() {
    let todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    saveToStorage();
    renderAll();
}
function deleteTodo(pos) {
    todos.splice(pos,1);
    saveToStorage();
    renderAll();
}
function saveToStorage(){
    
    localStorage.setItem('listTodos', JSON.stringify(todos));
}
renderAll();