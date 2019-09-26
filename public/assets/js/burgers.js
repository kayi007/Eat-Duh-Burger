$(function(){
    $(".change-devour").on("click", function(event){
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");


        var newDevourState = {
            devoured: newDevour
        };
        console.log(newDevourState);
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("you ate this", newDevour);

                location.reload();
            }
        );
    });


    $(".create-form").on("submit", function(event){
        event.preventDefault();
        var userBurger = $("#burger").val().trim();
        
        if(userBurger){
            var newBurger = {
                name: userBurger
            };

            $.ajax("/api/burgers", {
                type:"POST",
                data: newBurger
            }).then(
                function(){
                    console.log("You made a new burger!");
                    location.reload();
                }
            );
        }else{
            $("#error").text("Please Enter a Burger Name.");
        }
        
    });
});