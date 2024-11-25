let menu = document.querySelector('.menu');
let searchForm = document.querySelector('.search-form');
let searchBox = document.querySelector('#search-box');
let menuItems = document.querySelectorAll('.caja-menu .caja, .caja-productos .caja');


document.querySelector('#menu-btn').onclick = (e) => {
    e.stopPropagation();
    menu.classList.toggle('active');
    searchForm.classList.remove('active');
};


document.querySelector('#search-btn').onclick = (e) => {
    e.stopPropagation();
    searchForm.classList.toggle('active');
    menu.classList.remove('active');
    if (searchForm.classList.contains('active')) {
        searchBox.focus();
    }
};


searchBox.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    menuItems.forEach(item => {
        const title = item.querySelector('h3')?.textContent.toLowerCase() || '';
        const description = item.querySelector('p')?.textContent.toLowerCase() || '';
        const isVisible = title.includes(searchTerm) || description.includes(searchTerm);
        
        item.style.display = isVisible ? '' : 'none';
        item.classList.toggle('search-hidden', !isVisible);
        
        
        if (isVisible) {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
        }
    });
});


searchForm.addEventListener('transitionend', () => {
    if (!searchForm.classList.contains('active')) {
        searchBox.value = '';
        menuItems.forEach(item => {
            item.style.display = '';
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
            item.classList.remove('search-hidden');
        });
    }
});


document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu') && !e.target.closest('#menu-btn')) {
        menu.classList.remove('active');
    }
    if (!e.target.closest('.search-form') && !e.target.closest('#search-btn')) {
        searchForm.classList.remove('active');
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            menu.classList.remove('active');
        }
    });
});


let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll) {
        menu.classList.remove('active');
        searchForm.classList.remove('active');
    }
    
    lastScroll = currentScroll;
});