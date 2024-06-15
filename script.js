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

    const mediaQuery = window.matchMedia('(max-width: 600px)')
    let slide0 = document.querySelector('#slide-0')
    let slide1 = document.querySelector('#slide-1')
    let slide2 = document.querySelector('#slide-2')
    

    if (mediaQuery.matches) {
        // Then trigger an alert
        alert('Media Query Matched!')
        slide0.src =  "./assets/detector-enchentes-1x1.jpg"
        slide1.src =  "./assets/alerta-1x1.jpg"
        slide2.src =  "./assets/peace-1x1.jpg"      
      }    
    
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

