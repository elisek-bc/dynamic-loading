const nav = document.getElementsByClassName('nav-item');

nav.forEach(navitem => ajax({
    url: [link to your php file]
    type: [GET or POST]
    data: [if needed]
    success: function(html) { 
        alert(html);
    }
});
}