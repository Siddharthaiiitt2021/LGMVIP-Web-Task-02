function AddItems(e){
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'item');
    newDiv.style.marginBottom = '1.5rem'
    document.querySelectorAll('#toDo')[document.querySelectorAll('#toDo').length-1].appendChild(newDiv)
    // document.querySelectorAll('.item')[document.querySelectorAll('.item').length - 1].style.marginBottom = '1.5rem';
    const newCheck = document.createElement('input')
    newCheck.setAttribute('type', 'checkbox')
    newCheck.setAttribute('class', 'check')
    newCheck.style.marginRight = '0.75rem'
    document.querySelectorAll('.item')[document.querySelectorAll('.item').length-1].appendChild(newCheck)
    const newInput = document.createElement('input')
    newInput.setAttribute('type', 'text')
    newInput.setAttribute('placeholder', 'Add a item here')
    document.querySelectorAll('.item')[document.querySelectorAll('.item').length-1].appendChild(newInput)

    for (let i = 0; i < document.querySelectorAll('.check').length; i++) {
        document.querySelectorAll('.check')[i].addEventListener('click', StrikeCheck)
    }
}


function StrikeCheck(e){
    const text = e.target.parentElement.children[1];
    if(e.target.checked)
    {
        text.style.textDecoration = 'line-through'
    }
    else{
        text.style.textDecoration = 'none'
    }
    console.log(e.target)

}


document.querySelector('#AddItem').addEventListener('click', AddItems)
