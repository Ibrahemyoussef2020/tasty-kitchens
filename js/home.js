const menuBtn = document.querySelector('.menu-btn'),
    menulist = document.querySelector('.nav-container'), 
    menuClose = document.querySelector('.x')
    

menuBtn.addEventListener('click' , ()=> {
    if (menulist.classList.contains('show-list')) {
        menulist.classList.add('hide-list')
        menulist.classList.remove('show-list')
    }else{
        menulist.classList.add('show-list')
        menulist.classList.remove('hide-list')
    }
})

menuClose.addEventListener('click' , ()=> {
        menulist.classList.remove('show-list')
        menulist.classList.add('hide-list')
        console.log('vis');
})