const   selectDrop = document.querySelector('.sort-drop'), 
        sortItems = document.querySelector('.choose-sort-item'),
        sortHeading = document.querySelector('.sort-title-heading'), 
        lowest = document.querySelector('.lowest'),
        highest = document.querySelector('.highest');
        
    selectDrop.addEventListener('click',(e)=>{
        if (sortItems.classList.contains('none')) {
            sortItems.classList.add('flex')
            sortItems.classList.remove('none')
        }else{
            sortItems.classList.remove('flex')
            sortItems.classList.add('none')
        }
    })

    sortItems.addEventListener('click',(e)=>{
        if (e.target.classList.contains('option')) {
            sortHeading.innerText = `Sort by ${e.target.id}`

            if (e.target.classList.contains('lowest')) {
                lowest.classList.add('selected')
                highest.classList.remove('selected')
            }
            else{
                lowest.classList.remove('selected')
                highest.classList.add('selected')
            }
        }
    })

