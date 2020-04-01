document.querySelector('.aplphabet').addEventListener('click', function(){
    const button = document.querySelector('.aplphabet')
    if(button.innerText === 'Alphabetically')
    {currentTodos = sortByName(currentTodos)
        button.innerText ='Dont Press Me-button of DEATH'
    }
    else if(button.innerText === 'Dont Press Me-button of DEATH'){
        document.querySelector('div').classList.add('hell')
        document.querySelector('h1').innerText = 'ToDo oF DeaTh'
        alert('WHY did you press ME?')
        alert('Cant you read?')
        alert('Maybe you gonna regret now')
        alert('Curious kills a cat you know')
        alert('You wonder how long this is gonna last?')
        alert('TBH')
        alert('I have no idea')
        alert('Really depends on how bored I am')
        alert('let me see what time is it')
        alert('1:18AM')
        alert('Phew')
        alert('few more hours till class starts again')
        alert('maybe I should go to sleep')
        alert('remember')
        alert('read before you press next time')
        alert('BYE!')
        alert('PsYCh!')
        alert('lol')
        alert('You really believe Im going to let you go?')
        alert('fOrGet IT!')
        alert('You ARE STUCK 4Ever and Ever')
    

    }
    
    refreshTodos()
})
