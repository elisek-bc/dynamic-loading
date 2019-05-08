const nav = document.getElementsByClassName('nav-item');
let wrapper = document.getElementById('wrapper');

// Load page on link click
function load_page (e) {
    (e || window.event).preventDefault();
    console.log(event.target)
    let target = event.target.href;
    console.log(target);
    window.scrollTo(0,0);

    fetch(target)
    .then((response) => response.text())
    .then((html) => {
        wrapper.innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
    });
} 

[...nav].forEach( navitem => navitem.addEventListener('click',load_page))

// Loading icon
window.addEventListener('load',loadingIcon);

function loadingIcon(){ //not working
    wrapper.innerHTML= '<i class="fas fa-circle-notch fa-spin"></i>';
    console.log(wrapper);
}
