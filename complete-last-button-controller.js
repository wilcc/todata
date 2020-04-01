document.querySelector('.complete-last').addEventListener('click', function(){
    const button = document.querySelector('.complete-last')
    if (button.innerText === 'Complete Last') {
        currentTodos = notCompleteFirst([...todos])
        button.innerText = 'Original Order';
    } else if (button.innerText ==='Original Order'){
        currentTodos = [...todos];
        button.innerText = 'Complete Last';
    }
    refreshTodos()
    })