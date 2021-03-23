function showMenu(){
  console.log("hoooover");
  $(".dropdown-menu").removeClass("hide");
}

function removeMenu (){

    $(".dropdown-menu").addClass("hide");


}

function init(){
  $(".dropdown-start").hover(showMenu);
  $("header").click(removeMenu);
}

$(document).ready(init);
