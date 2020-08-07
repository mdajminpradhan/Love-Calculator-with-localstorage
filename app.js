let personLoveForm = document.querySelector('form').addEventListener('submit', (something)=> {
    something.preventDefault();

    let firstPerson = document.querySelector('.first').value;
    let secondPerson= document.querySelector('.second').value;
    let personLoveCalculated = Math.floor((Math.random() * (100 - 65)) + 65);

    let result = document.querySelector('.result p');
    result.style.display = 'block';

    let personName = firstPerson + secondPerson;
    
    const loveMeter = {
        firstPerson: firstPerson,
        secondPerson: secondPerson,
        personLoveCalculated: personLoveCalculated
    }
    
    const theLoveMeter = JSON.stringify(loveMeter);
    
    let valueFromLocalStorage = localStorage.getItem(personName);
    
    if(valueFromLocalStorage == null){
        localStorage.setItem(personName, theLoveMeter);
        something.target.classList.add('submitedForm');
        document.querySelector('.show').textContent = `${personLoveCalculated}%`;
    } else {
        let personLove = localStorage.getItem(personName);
        let myLoveMeter = JSON.parse(personLove);
        something.target.classList.add('submitedForm');
        document.querySelector('.show').textContent = `${myLoveMeter.personLoveCalculated}%`;
    }

});