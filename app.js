document.addEventListener("DOMContentLoaded", function(){


    function sanitize(input) {
        if (/^[a-zA-Z\s]*$/.test(input)) {
            return input.length < 21;   
        }
        return input.length != 0 ? false : true;
    }


    $('#search-superhero').on('submit', e => {
        e.preventDefault();

        $(".message").html('');

        var data = $('#search').val();

        if (sanitize(data)) {
            $.ajax('superheroes.php', {
                type: "post",
                data: {
                    query: data
                }
            }).done( result => {
                $('#result').html(result);
            }).fail( () => {
                $(".message").html('Something went wrong');
            })
        } else {
            $(".message").html('Check Input Data');
        }
        

    })
});