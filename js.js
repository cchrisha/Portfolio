document.addEventListener('DOMContentLoaded', () =>{
    const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
    const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
    const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
    const header = document.querySelector('.header.container');

    const toggleActiveClass = () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    };

    hamburger.addEventListener('click', toggleActiveClass);

    document.addEventListener('scroll', () => {
        var scroll_position = window.scrollY;
        if (scroll_position > 250) {
        header.style.backgroundColor = 'rgb(240, 154, 168)';
        } else {
        header.style.backgroundColor = 'transparent';
        }
    });
    menu_item.forEach((item) => {
        mobile_menu.classList.toggle('click', toggleActiveClass);
    });
});