document.querySelector('.toggle-priorities').addEventListener('click', function(){
  const button = document.querySelector('.toggle-priorities')
    if (button.innerText === 'Show Priorities') {
      currentTodos = namesAndPriorities([...todos])
        button.innerText = 'Hide Priorities';
    } else if (button.innerText ==='Hide Priorities'){
        currentTodos = originalList(currentTodos);
        button.innerText = 'Show Priorities';
    }
    refreshTodos(currentTodos)
  })
