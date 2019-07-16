$(function(){
    $(".btn btn-default").on("click", function(event){
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        var devouredState = {
            newDevour: devoured
        };

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: devouredState
        }).then( function(){
            console.log("Ate the", devoured);

            location.reload();
        });
    });
});

$(".create-update-form").on("submit", function(event){
    event.preventDefault();

    var newBurger = {
        burger_name: $("#burg").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then( function(){
        console.log("Added another Burger!!");
        
        location.reload();
    });
});