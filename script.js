window.onload = function() {
    const overlay = document.querySelector('.overlay');
    function checkOrientation() {
        if (window.innerHeight > window.innerWidth) {
            overlay.style.visibility = 'visible';
        }
        else {
            overlay.style.visibility = 'hidden';
        }
    }
    checkOrientation();

    function isElementVisible(sections) { 
        sections.forEach((section) => {
            const element = document.querySelector(`.${section}`);
            const elementTop = element.offsetTop; 
            const elementBottom = elementTop  
                + element.offsetHeight; 
            const viewportTop = window.pageYOffset; 
            const viewportBottom = viewportTop  
                + window.innerHeight;

            if (elementBottom > (viewportTop + (window.innerHeight / 2)) && elementTop < (viewportBottom - (window.innerHeight / 2))) { 
                document.getElementById(element.classList[1]).classList.add('shrink');
            } else {
                document.getElementById(element.classList[1]).classList.remove('shrink');
            }
            return ( 
                elementBottom > (viewportTop + (window.innerHeight / 2)) && 
                elementTop < (viewportBottom - (window.innerHeight / 2))
            ); 
        })
    } 

    function fading(elements) {
        elements.forEach((item) => {
            const element = document.querySelector(`.${item}`);
            const elementTop = element.offsetTop; 
            const elementBottom = elementTop  
                + element.offsetHeight; 
            const viewportTop = window.pageYOffset; 
            const viewportBottom = viewportTop  
                + window.innerHeight;

            if (elementBottom > (viewportTop) && elementTop < (viewportBottom)) { 
                element.classList.remove('hidden');
                element.classList.add('show');
            } else {
                element.classList.add('hidden');
                element.classList.remove('show');
            }
        })
    }

    const sections = ['sec1', 'sec2', 'sec3', 'sec4', 'sec5'];
    const elements = ['intro1', 'intro2', 'intro3', 'peem1'];

    window.addEventListener('scroll', () => {
        isElementVisible(sections);
        fading(elements);
    });
    isElementVisible(sections);
    fading(elements);
    window.onresize = checkOrientation;
}

function navigate(element) {
    const scroll = document.querySelector('.' + element.id);
    scroll.scrollIntoView();
}
