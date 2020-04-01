document.querySelector('.hide-complete').addEventListener('click', function(){
    const button = document.querySelector('.hide-complete')
    if(button.innerText === 'Hide Complete')
    {currentTodos = justNotComplete(currentTodos)
    button.innerText ='Show Complete'
    }
    else if(button.innerText === 'Show Complete'){
        currentTodos = [...todos]
    button.innerText ='Hide Complete'
    }
    
    refreshTodos()
})
