const nav = document.getElementsByClassName('nav-item');

nav.forEach(navitem => ajax({
    url: [`${navitem}.html`]
    type: [GET or POST]
    data: [if needed]
    success: function(html) { 
        alert(html);
    }
});
}