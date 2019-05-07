const nav = document.getElementsByClassName('nav-item');
// first way
nav.forEach(navitem => ajax({
    url: [`${navitem}.html`]
    type: [GET or POST]
    data: [if needed]
    success: function(html) { 
        alert(html);
    }
});
}
// second way
function load_page (e) {
    (e || window.event).preventDefault();

    fetch(`${nav}.html`/*, options */)
    .then((response) => response.text())
    .then((html) => {
        document.getElementById("wrapper").innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
    });
} 