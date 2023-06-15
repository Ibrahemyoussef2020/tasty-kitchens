import { 
    doesContainClass,
    selectElement, 
    selectElements 
} from './utilities.js';

const mealContents = selectElements('.meal-content');

mealContents.forEach(mealContent =>{
    mealContent.addEventListener('click' , (e)=>{

        const count = selectElement('.count',mealContent);

        if (doesContainClass(e,'add-btn')) {
            
            count.innerText = 1;

            e.target.parentElement.classList.add('none');

            selectElement('.counter-container' , mealContent).classList.remove('none')
        }
        else if(doesContainClass(e,'increase')){
            increaseCounter(count)
        }
        else if (doesContainClass(e,'decrease')) {
            decreaseCounter(count,mealContent)
        }
    })
})


function increaseCounter(count){
    count.innerText = parseInt(count.innerText) + 1;
}

function decreaseCounter(count,mealContent){
    if (count.innerText > 1) {
        count.innerText = parseInt(count.innerText) - 1;
    }else{
        selectElement('.counter-container',mealContent).classList.add('none')
        selectElement('.add-meal',mealContent).classList.remove('none')
    }
}