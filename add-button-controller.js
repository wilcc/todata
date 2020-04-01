document.querySelector('.add-todo').addEventListener('click', function(){
    const text = document.querySelector('.todo-input').value
    const priority = document.querySelector('.priority').value
    const complete = false
    const id = todos.length
    
    const newValue = {
        text,
        priority,
        complete,
        id,
    }
    addTodo(newValue)
    printTodo(newValue)
    const input = document.querySelector('.todo-input')
    input.value = ''

    
})






// const showPriorityButton = document.querySelector('.toggle-priorities')
// const hideCompleteButton = document.querySelector('.hide-complete')
// const hideLowPriorityButton = document.querySelector('.hide-low-priority')
// const highPriorityFirstButton = document.querySelector('.high-priority-first')
// const completeLastButton = document.querySelector('.complete-last')