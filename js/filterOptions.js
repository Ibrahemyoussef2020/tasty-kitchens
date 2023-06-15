import{
    doesContainClass,
    selectElement
} from './utilities.js'

// selectors

const selectDrop = selectElement('.sort-drop'), 
    sortItems = selectElement('.choose-sort-item'),
    sortHeading = selectElement('.sort-title-heading'), 
    lowest = selectElement('.lowest'),
    highest = selectElement('.highest');

// toggle add button and counter div
    
selectDrop.addEventListener('click',(e)=>{
    if (sortItems.classList.contains('none')) {
        sortItems.classList.add('flex')
        sortItems.classList.remove('none')
    }else{
        sortItems.classList.remove('flex')
        sortItems.classList.add('none')
    }
})

// toggle filter title text

sortItems.addEventListener('click',(e)=>{
    if (doesContainClass(e,'option')) {
        sortHeading.innerText = `Sort by ${e.target.id}`

        if (doesContainClass(e,'lowest')) {
            lowest.classList.add('selected')
            highest.classList.remove('selected')
        }
        else{
            lowest.classList.remove('selected')
            highest.classList.add('selected')
        }
    }
})