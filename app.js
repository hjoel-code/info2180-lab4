document.addEventListener("DOMContentLoaded", function(){
    $('#search-btn').on('click', e => {
        $.ajax('superheroes.php').done( result => {
            alert(result);
        }).fail( result => {
            alert("Error loading data");
        });
    })
});