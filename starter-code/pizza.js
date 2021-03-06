// Write your Pizza Builder JavaScript in this file.
function removePepperoni() {
  var pepperoniBtn = $(".btn-pepperonni");
  var pepperonniArr = $(".pep");
  $(pepperoniBtn).click(function() {
   $(this).toggleClass("active");
   $(pepperonniArr).toggle();
   listRemovePepperoni();
   calculatePrice();
  });
}

function removeMushrooms() {
   var mushroomsBtn = $(".btn-mushrooms");
   var mushroomsArr = $(".mushroom");
   $(mushroomsBtn).click(function() {
   $(this).toggleClass("active");
   $(mushroomsArr).toggle();
   listRemoveMushrooms();
   calculatePrice();
  });
}

function removePeppers() {
   var peppersBtn = $(".btn-green-peppers");
   var peppersArr = $(".green-pepper");
   $(peppersBtn).click(function() {
   $(this).toggleClass("active");
   $(peppersArr).toggle();
   listRemoveGreenPeppers();
   calculatePrice();
  });
}

function toggleSauce() {
   var sauceBtn = $(".btn-sauce");
   $(sauceBtn).toggleClass("active");
   $(sauceBtn).click(function() {
       $(this).toggleClass("active");
       $(".cheese").toggle();
       listRemoveSauce();
       calculatePrice();
   });
}

function toggleCrust() {
   var crustBtn = $(".btn-crust");
   $(crustBtn).toggleClass("active");
   $(crustBtn).click(function() {
       $(this).toggleClass("active");
       $(".sauce-white").toggle();
       listRemoveCrust();
       calculatePrice();
   });
}


function listRemovePepperoni() {
   var $listPepperoni = $(".price > ul > li:nth-child(1)");
   console.log($listPepperoni);
   $($listPepperoni).toggle();
}

function listRemoveMushrooms(){
   var $listMushrooms = $(".price > ul > li:nth-child(2)");
   console.log($listMushrooms);
   $($listMushrooms).toggle();
}

function listRemoveGreenPeppers() {
   var $listGreenPeppers = $(".price > ul > li:nth-child(3)");
   console.log($listGreenPeppers);
   $($listGreenPeppers).toggle();
}
function listRemoveSauce() {
   var $listSauce = $(".price > ul > li:nth-child(4)");
   console.log($listSauce);
   $($listSauce).toggle();
}
function listRemoveCrust() {
  var $listCrust = $(".price > ul > li:nth-child(5)");
  console.log($listCrust);
  $($listCrust).toggle();
}



function calculatePrice() {
   var $ingredients = $(".price > ul > li");
   var total = 10;
   var $strong = $("strong");
   for(var i = 0; i < $ingredients.length; i++) {
       var $ingredient = $ingredients[i];
       if ($($ingredient).css('display') !== 'none') {
           total += parseInt($ingredients[i].innerHTML[1]);
       }
   }
   $($strong).text("$" + total);
}



$(document).ready(function() {
   removePepperoni();
   removeMushrooms();
   removePeppers();
   toggleSauce();
   toggleCrust();
});