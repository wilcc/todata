const printTodo = function(todo) {
  
  // Use `document.createElement` to make an <li>
  const li = document.createElement('li');
  li.innerText = todo.text;

  // Query the ul and put it in a variable.
  const ul = document.querySelector('.todo-list');

  // Append the li we made to the ul as the last child.
  ul.appendChild(li);
  var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    li.style.background = bgColor;

  // Give the name <p> a complete class if it was complete already (as in dummy data, or loaded data if we had a back end.
  if (todo.complete) {
    li.classList.add('complete')
  }

  // Give the <li> a layout class and an id so we can find it later (for instance in the ).
  li.classList.add('todo-item');
  li.id = todo.id.toString();

  // Give the name <p> an event listener to toggle its completeness.
  
  li.addEventListener('click', function(event) {
    event.target.classList.toggle('complete')
    todo.complete = !todo.complete;
    // TODO: find the correct todo in your data to toggle the completeness of!
    let count = 3
    for (const todo of todos){
      if (todo.complete){
        count ++
      }if (count > ul.length){
        alert('Congratulations! You complete all your TODOS!!!!')

      }
    }
  })
}