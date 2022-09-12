// start dark and light theme
var icon = document.getElementById('theme-icon');

icon.onclick = function () {
    document.body.classList.toggle('dark-mode');
    document.body.classList.contains('dark-mode') ? icon.classList.replace('uil-moon', 'uil-sun') : icon.classList.replace('uil-sun', 'uil-moon');
}

// add and remove active class on navbar li
const currentLocation = location.href;
const navbarItem = document.querySelectorAll('.navbar .nav-link');
for (let i = 0; i < navbarItem.length; i++) {
    if (navbarItem[i].href === currentLocation) {
        navbarItem[i].classList.add('active');
    }
}

// start in gallary to remove active class and add it on  click

var label_holder = document.querySelectorAll('.label-holder');
var image_holder = document.querySelectorAll('.pic');

for (let i = 0; i < label_holder.length; i++) {
    label_holder[i].addEventListener('click', function () {
        for (let j = 0; j < label_holder.length; j++) {
            label_holder[j].classList.remove('active');
        }
        this.classList.add('active');
        // start display image and fade it based on data-filter in label

        let my_filter = this.getAttribute('data-filter');

        for (let k = 0; k < image_holder.length; k++) {
            image_holder[k].classList.add('hide');
            if (image_holder[k].getAttribute('data-item') == my_filter || my_filter == 'all') {
                image_holder[k].classList.remove('hide');
            }
        }
    })
}


// portfolio section [swipper]
let swiper = new Swiper(".my-main-container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});