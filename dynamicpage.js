const nav = document.getElementsByClassName('nav-item');
let wrapper = document.getElementById('wrapper');
let navbar = document.getElementById('navbar');
let spinner = document.createElement('i');
spinner.classList.add('fas','fa-circle-notch','fa-spin');

[...nav].forEach( navitem => navitem.addEventListener('click',load_page))

// Load page on link click
function load_page (e) {
    (e || window.event).preventDefault();
    console.log(event.target)
    let target = event.target.href;
    console.log(target);
    window.scrollTo({top:0, behavior: 'smooth'});

    setTimeout(
        function () {
            fetch(target)
            .then((response) => response.text())
            .then((html) => {
            wrapper.innerHTML = html;})
            .catch((error) => {
            console.warn(error);});
        }, 
    500)

    document.body.appendChild(spinner); // not working
    console.log(wrapper);
}
