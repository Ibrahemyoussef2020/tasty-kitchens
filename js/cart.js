
import {
doesContainClass,
selectElement,
selectElements
} from './utilities.js'


// selectors

const cart =   selectElement('.cart'),
    mealContents = selectElements('.meal'),
    totalPrice   = selectElement('.total-price');

// counter

mealContents.forEach(mealContent =>{
    mealContent.addEventListener('click' , (e)=>{

        const count = selectElement('.count',mealContent),
            price = selectElement('.meal-price',mealContent),
            priceNumber = price.getAttribute('data-price');


        if(doesContainClass(e,'increase')){
            increaseCounter(count)
        }
        else if (doesContainClass(e,'decrease')) {
            decreaseCounter(count,mealContent)
        }

        console.log(priceNumber);
        console.log(parseInt(count.innerText));
        
        

        price.innerText = `₹ ${parseInt(priceNumber) * parseInt(count.innerText)}.00`
    })  
})



function increaseCounter(count){
    count.innerText = parseInt(count.innerText) + 1;
}


function decreaseCounter(count,mealContent){
    if (count.innerText > 1) {
        count.innerText = parseInt(count.innerText) - 1;
    }
}



//  Bill

cart.addEventListener('click' , (e)=>{

    if (doesContainClass(e,'increase') || doesContainClass(e,'decrease')) {
            collectBill(cart)
    }
})



function collectBill(cart){
    const prices = cart.querySelectorAll('.meal-price');

    let bill = 0;

    prices.forEach(b =>{
        bill += parseInt(b.innerText.slice(2,-3))
    })

    totalPrice.innerText = `₹ ${bill}.00`
}
