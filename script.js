function clickMenu() {
    let items = document.querySelector('#menu-components')
    let icon = document.querySelector('#menu-icon')
    if (items.style.display == 'block') {
        items.style.display = 'none'
        icon.src = "./assets/menu.png"
        
    } else {
        items.style.display = 'block'
        icon.src = "./assets/return.png"
    }
}

    let slide0 = document.querySelector('#slide-0')
    let slide1 = document.querySelector('#slide-1')
    let slide2 = document.querySelector('#slide-2')

    function changeUrl(number) {
    
    console.log(number)
    
    
    if(number == 0) {
        slide1.classList.add("out")
        slide2.classList.add("out")
        slide0.classList.remove("out")
    }
    if(number == 1) {
        slide0.classList.add("out")
        slide2.classList.add("out")
        slide1.classList.remove("out")
    }
    if(number == 2) {
        slide1.classList.add("out")
        slide0.classList.add("out")
        slide2.classList.remove("out")
    }
}
    

