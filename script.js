function singleHover(){
  $(".dropdown-start").hover(function(){
    var hoverStart = $(this);
    var hoverMenu = hoverStart.find(".dropdown-menu");
    $(".dropdown-menu.show").removeClass("show");
    hoverMenu.addClass("show");
  })

}

function removeMenu (){

  // $(".dropdown-menu.show").click(function(e){
  //   e.stopPropagation();
  // });
  $("header").click(function(){
    $(".dropdown-menu.show").toggleClass("show");
  })
}

function init(){
  singleHover();
  removeMenu();
}

$(document).ready(init);
