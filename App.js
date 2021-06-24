//load every event in the page
loadEvents();
//addEventListener listens to  event on the form and calls the function submit
function loadEvents() {
    document.querySelector('form').addEventListener('submit', submit);
    document.getElementById('clear').addEventListener('click', clearList);
    document.querySelector('ul').addEventListener('click', deleteOrTrick);

}
//submit data 
function submit(e) {
    e.preventDefault();
    let taskList;
    let input = document.querySelector('input');
    if (input.value != '')
    //checks is string entered is empty or not
        addTask(input.value);
    input.value = '';
}
//add tasks into task board
function addTask(task) {
    let ul = document.querySelector('ul');
    //locates the ul element 
    let li = document.createElement('li');
    //create new li elements
    //assigns and formats g=how the task appear on the task board
    li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
    ul.appendChild(li);
    //aapend new li elements into ul tag
    document.querySelector('.tasksBoard').style.display = 'block';
}
//clear the List
function clearList(e) {
    //setting the ul innerHML to an empty string
    let ul = document.querySelector('ul').innerHTML = '';
}
//delete tick
//the deleteOrTick function helps us to checks the class name of the element 
//that was clicked,  

function deleteOrTick(e) {
    if (e.target.className == 'delete')
    //if it has the class name of delete it calls the deleteTask function,
        deleteTask(e);
    else {
        tickTask(e);
        //else it calls the tickTask function.
    }
}

//delete a task
//deleteTask function gets the parent element of the target,
function deleteTask(e) {
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
}
//tick a task

function tickTask(e) {
    const task = e.target.nextSibling;
    //gets the text that is within the li elements
    //e.target is the tick button 
    if (e.target.checked) {
        //if it was checked ,it changes the textdecoration to line-through and change color
        task.style.textDecoration = "line-through";
        task.style.color = "#ff0000";

    } else {
        //if it was unchecked it changes the textdecoation to none
        task.style.textDecoration = "none";
        task.style.color = "#2f4f4f";

    }
}