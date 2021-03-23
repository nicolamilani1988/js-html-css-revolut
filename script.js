function singleHover(){
  $(".dropdown-start").hover(function(){
    var hoverStart = $(this);
    var hoverMenu = hoverStart.find(".dropdown-menu");
    hoverMenu.removeClass("hide");
  })

}


function showMenu(){
  console.log("hoooover");
  $(".dropdown-menu").removeClass("hide");
}

function removeMenu (){

    $(".dropdown-menu").addClass("hide");


}

function init(){
  singleHover();
  // $("header").click(removeMenu);
}

$(document).ready(init);
