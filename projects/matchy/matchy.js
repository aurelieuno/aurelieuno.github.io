function addAnimals(ans, id){
    $("#"+id).html("");
    for(var i =0, len = ans.length; i < len; i++){
        var mu = '<div class=animal>' +
              '<h2 class="anName">' + ans[i].name + '</h2>' +
              '<h3><b>Species:</b><span class="anSpecies"> ' + ans[i].species + "</span></h3>" +
              '<h3><b>Friends:</b></h3>' +
              '<ul>';
        if(ans[i].friends){  
            for(var j = 0; j < ans[i].friends.length; j++){
                mu += "<li>"+ans[i].friends[j]+"</li>";
            }
        }
        mu += "</ul>";
        if(window.edit && typeof window.edit === "function"){
            mu += '<button class="saveBtn btn-warning">save</button>';
            mu += '<button class="editBtn btn-warning">edit</button>';
        }
        if(window.remove && typeof window.remove === "function"){
            mu += '<div class="remove">x</div>';
        }
        mu += "</div>";
        $("#"+id).append(mu);
    }
}
$(function(){
    if(window.animals){
        addAnimals(window.animals, "profiles");
    }
    if(window.search && typeof window.search === "function"){
        $("#search").show();
        $("#searchBtn").on("click", function(){
           $("#searchResults").show();
            $('<SearchRemove>').attr('class','SearchRemove').html("x").appendTo('#searchResults');
           var an = window.search($("#query").val());
           if(an === undefined){
               $("#results").html("").html("No animals with that name found!");
           } else {
               addAnimals([an], "results");
           }
        });
    }
    $('body').on('click', '.editBtn btn-warning', function(){
        $(this).siblings('.saveBtn btn-warning').show();
        $(this).hide();
        var n = $(this).parents('.animal').find('.anName').text();
        for(var i = 0, len = window.animals.length; i < len; i++){
            if(window.animals[i].name === n){
                window.___editingAnimal = window.animals[i];
            }
        }
        $(this).siblings("h2.anName").replaceWith(
            '<h2><input type="text" class="anNameInp" value='+window.___editingAnimal.name +
            '></h2>'
        );
        $(this).parents(".animal").find("span.anSpecies").replaceWith(
            '<span><input type="text" class="anSpeciesInp" value='+window.___editingAnimal.species +
            '></span>'
        );
    });
    $('body').on('click', '.saveBtn', function(){
        $(this).hide();
        $(this).siblings('.editBtn btn-warning').show();
        var oldName = window.___editingAnimal.name;
        var oldFriends = window.___editingAnimal.friends;
        window.edit(oldName, {
            name: $(this).parents(".animal").find(".anNameInp").val(),
            species: $(this).parents(".animal").find(".anSpeciesInp").val(),
            friends: oldFriends
        });
        window.___editingAnimal = null;
        addAnimals(window.animals, "profiles");
    });
    
    $('body').on('click', '.remove', function(){
        window.remove($(this).parents(".animal").find(".anName").text()); 
        addAnimals(window.animals, "profiles");
    });
    
     $('body').on('click', '.SearchRemove', function(){
          $("#searchResults").hide();
    });
    
    // CREATE
    if(window.create && typeof window.create === "function"){
        $("#create").show();
        $("body").on("click", "#createBtn", function(){
            var new_name = $(this).siblings("#newNameInp").val();
            var new_species = $(this).siblings("#newSpeciesInp").val();
            var new_friends = $(this).siblings("#newFriendsInp").val();
            $(this).siblings("#newNameInp").val("");
            $(this).siblings("#newSpeciesInp").val("");
            $(this).siblings("#newFriendsInp").val("");
            window.create({name: new_name, species: new_species, friends: new_friends})
            addAnimals(window.animals, "profiles");
        })
    }
})
