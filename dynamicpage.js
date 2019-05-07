const nav = document.getElementsByClassName('nav-item');

// second way
function load_page (e) {
    (e || window.event).preventDefault();
    console.log(event.target)
    let target = event.target.href;
    console.log(target);
    fetch(target)
    // .then(response => console.log(response.text()))
    .then((response) => response.text())
    .then((html) => {
        document.getElementById("wrapper").innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
    });
} 

[...nav].forEach( navitem => navitem.addEventListener('click',load_page))