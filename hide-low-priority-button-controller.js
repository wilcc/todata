document.querySelector('.hide-low-priority').addEventListener('click', function(){
    const button = document.querySelector('.hide-low-priority')
    if(button.innerText === 'Hide Low Priority')
    {currentTodos = priority2Only(currentTodos)
    button.innerText ='Show Low Priority'
    }
    else if(button.innerText === 'Show Low Priority'){
        currentTodos = [...todos]
    button.innerText ='Hide Low Priority'
    }
    
    refreshTodos(currentTodos)
})
