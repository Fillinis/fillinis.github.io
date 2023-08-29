var isHidden = false; // Initially, all elements are visible

function burgermenu() {
    var elements = document.querySelectorAll('.sakumlapa div');
    var isPhone = window.matchMedia("(max-width: 766px)")
    const sakumlapa = document.querySelector('.sakumlapa');
    const burgermenu = document.querySelector('#burger-menu');
    const hoverMenu = document.getElementById('hover-menu');
    const hoverLang = document.getElementById('hover-lang');
    const blackLogo = document.getElementById('blacklogo-icon');

    
    hoverMenu.style.display = "none";
    hoverLang.style.display = "none";
    

    
    if (isHidden) {
        // If elements are hidden, show them
        elements.forEach(function(element) {
            element.style.display = 'block';
        });
        isHidden = false; // Update the state

        blackLogo.style.display = "block";
        burgermenu.style.display = "none"; 

        if (isPhone.matches) {
            sakumlapa.style.height = '2971px';
        } else {
            sakumlapa.style.height = '3021px';
        }
    } else {
        // If elements are visible, hide them
        var menuElements = document.querySelectorAll('#burger-menu, #burger-menu *, .menu, .menu-logo, .menu-button');
        var menuArray = Array.from(menuElements);
        
        var filteredElements = Array.from(elements).filter(function(element) {
            return !menuArray.includes(element);
        });
    
        filteredElements.forEach(function(element) {
            element.style.display = 'none';
        });
        isHidden = true; // Update the state

        blackLogo.style.display = "none";
        burgermenu.style.display = "block";

        if (isPhone.matches) {
            sakumlapa.style.height = '568px';
        } else {
            sakumlapa.style.height = '1024px';
        }
    }
}