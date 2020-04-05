document.querySelector('.high-priority-first').addEventListener('click', function(){
  const button = document.querySelector('.high-priority-first')
    if (button.innerText === 'High Priority First') {
      currentTodos = priority2First([...todos])
      button.innerText = 'Original Order';
    } else if (button.innerText ==='Original Order'){
      currentTodos = [...todos];
      button.innerText = 'High Priority First';

    }
  
    refreshTodos()
  })