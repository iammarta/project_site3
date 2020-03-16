function hamburgerMenu() {
    let hamburger = document.querySelector('.hamburger');
    let header = document.getElementsByTagName('header')[0];
    let navigation = document.getElementsByTagName('nav')[0];
    let menu_item = navigation.getElementsByTagName('li');
    let menu_list = navigation.getElementsByTagName('ul')[0];

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle("hamburger_active");
        header.classList.toggle("header-active");
        if (header.classList.contains("header-active")) {
            navigation.style.display = 'block';
            menu_list.style.flexDirection = 'column';
            menu_list.style.position = 'absolute';
            menu_list.style.top = '50%';
            menu_list.style.transform = 'translate(50%, 50%)';
            for (let i = 0; i < menu_item.length; i++) {
                menu_item[i].style.paddingTop = "20px";
            }
        } else {
            navigation.style.display = 'none';
            menu_list.style.flexDirection = '';
            menu_list.style.position = '';
            menu_list.style.top = '';
            menu_list.style.transform = '';
        }
    });

    for (let i = 0; i < menu_item.length; i++) {
        menu_item[i].addEventListener('click', function () {
            hamburger.classList.toggle("hamburger_active");
            header.classList.toggle("header-active");
            if (header.classList.contains("header-active")) {
                navigation.style.display = "block";
                menu_list[i].style.marginTop = "20px";
            } else {
                navigation.style.display = "none";
                menu_list.style.flexDirection = '';
                menu_list.style.position = '';
                menu_list.style.top = '';
                menu_list.style.transform = '';
            }
        });
    }

    let sticky = header.offsetTop;

    window.onscroll = function () {
        scroll();
    };

    function scroll() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
}

module.exports = hamburgerMenu;