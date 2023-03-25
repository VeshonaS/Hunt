// lets not be friends
$("#talk").click(function() {

    $("#hi").text("Im looking for sometihing important, and YOU WILL help me (not a question or suggestion). ");
    $("#talk").hide();
    $("#quiet").show();
});
// follow me

$("#quiet").click(function() {
    $("#quiet").hide();
    $("#hi").text("Now double click on each letter of the word and collect the map.");
    $("#dee").show();

});

// keep following
$("#dee").dblclick(function() {
    $("#you").show();
    $("#dee").hide();
});

$("#you").dblclick(function() {
    $("#em").show();
    $("#you").hide();
});

$("#em").dblclick(function() {
    $("#bee").show();
    $("#em").hide();
});

$("#bee").dblclick(function() {
    $("#hi").text("Now collect the...where's the map ?");
    $("#talk2").show();
    $("#bee").hide();
});
//monkee bidness

$("#talk2").click(function() {
    $("#hi").text("That monkey has the map! Hover on it to catch it. ");
    $("#talk2").hide();
    $("#jumpy").show();
});

$("#jumpy").mouseenter(function() {
    $("#jumpy").hide();
    $("#rolled").slideDown();
    $("#hi").text("There it is, double click on it so I can read it to you.");
});


//finally
$("#rolled").dblclick(function() {
    $("#rolled").hide();
    $("#hi").text("The map says to follow and click the exs");
    $("#ex").show();
});
//follow me 2
$("#ex").click(function() {
    $("#ex").hide();
    $("#ex2").show();

});
$("#ex2").click(function() {
    $("#ex2").hide();
    $("#ex3").show();

});
$("#ex3").click(function() {
    $("#ex3").hide();
    $("#box").show();
    $("#hi").text("*Gasp* A chest... well what are you waiting for? Open it, with a double click.");
});
//ha ha

$("#box").dblclick(function() {
    $("#box").fadeOut();
    $("#game").fadeIn();
    $("#hi").text("*GASP*......A golden Xbox..q-quick, Get It with a click !");
});

//betray

$("#game").mouseleave(function() {
    $("#game").fadeOut();
    $("#hi").text("Did you really think that I was trying to help YOU?");
    $("#hi").css("color", "red");
    $("#talk3").show();
});

$("#talk3").click(function() {
    $("#hi").text("I used you for what I've been looking for, for years. Its Mine now.");
    $("#talk4").show();
    $("#talk3").hide();
});

$("#talk4").click(function() {
 $("#hi").text("So...Thanks..Alot!");
$("#quiet2").show();
 $("#talk4").hide();
});

$("#quiet2").click(function() {
$("#hi").fadeOut();
$("#quiet2").hide();

});

$("#quiet2").click(function(){
 $("#haha").fadeIn();   
    });




