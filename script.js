// напитки актив или нет

// let buttons = document.querySelectorAll('button');

// buttons.forEach(button => {
//     button.addEventListener('click', function() {
//         // buttons.forEach(btn => btn.classList.remove('active'));
//         this.classList.toggle('active');
//     })
// })

// напитки актив или нет

// buttons.forEach(button => {
//     button.addEventListener('click', function() {
//         // buttons.forEach(btn => btn.classList.remove('active'));
//         this.classList.add('active');
//     })
// })

const unputsCheckbox = document.querySelectorAll('.container-custom-checkbox input'),
    ingredients = document.querySelectorAll('.current-pizza-item');

const addIngredients = checkboxes => {
    const nodesArray = Array.from(checkboxes);
    const ingredientsArray = Array.from(ingredients);
    
    for(let node of checkboxes) {
        node.addEventListener('click', event => {
            event.target.parentNode.classList.toggle('active');
            const index = nodesArray.indexOf(event.target);
            ingredientsArray[index].classList.toggle('active');
        })
    }
}

addIngredients(unputsCheckbox);

// let addImg = 
