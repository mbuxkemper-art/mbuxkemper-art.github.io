sizeString = "8x10";
calcPeople = 1;


var people = $("#calc-people").val();
var size =  $("#calc-size").val();
  
/////////////////////////SET SIZE STRING/////////////////////////////
function sizeSwitch(){
    switch (size) {
            case "1":
              alpha = "a"
               sizeString = "8x10";
              
              break;
            case "2":
              alpha = "b"
               sizeString = "11x14";
              break;
            case "3":
              alpha = "c"
               sizeString = "16x20";
               break;  
            case "4":
              alpha = "d"
               sizeString = "18x24";
              break;
              case "5":
                alpha = "e"
               sizeString = "22x28";
               break;
      
    }
    $("#calc-size_value").html("Size: " + sizeString);
  }

///////////////////////SET PRICE////////////////////////////
function priceSwitch(){
  var people = $("#calc-people").val();
  var priceCode = people.concat(alpha);
  switch (priceCode) {
    case "1a":
        price = "$200";
      break;
    case "2a":
        price = "$340";
      break;
    case "3a":
        price = "2 People Max";
       break;  
    case "4a":
        price = "2 People Max";
      break;
    case "5a":
        price = "2 People Max";
      break;
    case "1b":
        price = "$250";
      break;
    case "2b":
        price = "$410";
      break;
    case "3b":
        price = "$570";
       break;  
    case "4b":
        price = "3 People Max";
      break;
    case "5b":
        price = "3 People Max";
      break;
      case "1c":
        price = "$325";
      break;
    case "2c":
        price = "$505";
      break;
    case "3c":
        price = "$685";
       break;  
    case "4c":
        price = "$865";
      break;
    case "5c":
        price = "4 People Max";
      break;
      case "1d":
        price = "$375";
      break;
    case "2d":
        price = "$575";
      break;
    case "3d":
        price = "$775";
       break;  
    case "4d":
        price = "$975";
      break;
    case "5d":
        price = "4 People Max";
      break;
      case "1e":
        price = "$400";
      break;
    case "2e":
        price = "$625";
      break;
    case "3e":
        price = "$850";
       break;  
    case "4e":
        price = "$1075";
      break;
    case "5e":
        price = "$1300";
      break;


    

}
$("#calc-price").html("<span>" + price + "</span>");
}


/////////////////////////DISPLAY CALC//////////////////////
document.getElementById("quote").addEventListener("click", displayCalc);

function displayCalc() {
  $("#calculator").fadeIn("slow");
  window.scrollBy(0, 300);
  $('#quote').fadeOut("fast");
  
  sizeSwitch();
  priceSwitch();
  var people = $("#calc-people").val();
$("#calc-people_value").html("People: " + people);
}


///////////////////////CLOSE CALC///////////////
document.getElementById("close").addEventListener("click", hideCalc);

function hideCalc() {
  $("#calculator").fadeOut("slow");
  $('#quote').fadeIn("fast");
  window.scrollBy(0, -300);
 
}




/////////////ON INPUT //////////////////////////
$(".calculator input").on("input change", function (event) {


    // var parameterName =  $(this).attr("id");
    var people = $("#calc-people").val();
    
    $("#calc-people_value").html("People: " + people);
    size =  $("#calc-size").val();

  sizeSwitch();

    $("#calc-size_value").html("Size: " + sizeString);

    // priceCode = people.concat(alpha);
    

    priceSwitch();
});

//////////////////////EMAIL/////////////////////
document.getElementById("order").addEventListener("click", openEmail);

function openEmail() {
  var email = 'mailto:mbuxkemper@gmail.com?subject=Charcoal Portrait Order&body=Please include what size and how many people you would like.';
  window.open(email);
  }


  function openEmail() {
    calcPeople = document.getElementById('calc-people').value
    var email = "mailto:mbuxkemper@gmail.com"
                 + "?subject=Charcoal Portrait" 
                 + "&body=Hello, I am interested in commissioning a(n) " + (sizeString) + ' charcoal portrait with ' + (calcPeople) + ' person(s).' 
                 + '%0D%0A' + "(Please attach a photograph if possible and include your name)"
  
  
  window.open(email);
  }
