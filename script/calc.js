//  var sizeString = "8x10";
// var people = "1";
// quote button
document.getElementById("quote").addEventListener("click", displayCalc);
// function deleteMargin() {
//   document.getElementById("intro").style.marginBottom = "0px";  
//   window.scrollBy(0, 300);
// }
function displayCalc() {
  //document.getElementById("calculator").style.display = "block";
  $("#calculator").show("slow");
  window.scrollBy(0, 300);
  //deleteMargin();
  
}

//close quote

document.getElementById("close").addEventListener("click", hideCalc);

function hideCalc() {
  $("#calculator").hide("slow");
  //document.getElementById("calculator").style.display = "none";
  // document.getElementById("intro").style.marginBottom = "300px";  
  window.scrollBy(0, -300);
}





$(".calculator input").on("input change", function (event) {
    var parameterName =  $(this).attr("id");
    var people = $("#calc-people").val();
    
    $("#calc-people_value").html("People: " + people);
    var size =  $("#calc-size").val();
   
    switch (size) {
            case "1":
              var alpha = "a"
              var sizeString = "8x10";
              //console.log("case1");
              
              break;
            case "2":
              var alpha = "b"
              var sizeString = "11x14";
              //console.log("case2");
              break;
            case "3":
              var alpha = "c"
              var sizeString = "16x20";
               //console.log("case3");
               break;  
            case "4":
              var alpha = "d"
              var sizeString = "18x24";
              //console.log("case4");
              break;
              case "5":
                var alpha = "e"
              var sizeString = "22x28";
               //console.log("case5");
               break;
            // default:
            //   console.log("default");
      
    }

    $("#calc-size_value").html("Size: " + sizeString);

    var priceCode = people.concat(alpha);
    

    switch (priceCode) {
      case "1a":
          var price = "$200";
        break;
      case "2a":
          var price = "$340";
        break;
      case "3a":
          var price = "Not Available";
         break;  
      case "4a":
          var price = "Not Available";
        break;
      case "5a":
          var price = "Not Available";
        break;
      case "1b":
          var price = "$250";
        break;
      case "2b":
          var price = "$410";
        break;
      case "3b":
          var price = "$570";
         break;  
      case "4b":
          var price = "Not Available";
        break;
      case "5b":
          var price = "Not Available";
        break;
        case "1c":
          var price = "$325";
        break;
      case "2c":
          var price = "$505";
        break;
      case "3c":
          var price = "$685";
         break;  
      case "4c":
          var price = "$865";
        break;
      case "5c":
          var price = "Not Available";
        break;
        case "1d":
          var price = "$375";
        break;
      case "2d":
          var price = "$575";
        break;
      case "3d":
          var price = "$775";
         break;  
      case "4d":
          var price = "$975";
        break;
      case "5d":
          var price = "Not Available";
        break;
        case "1e":
          var price = "$400";
        break;
      case "2e":
          var price = "$625";
        break;
      case "3e":
          var price = "$850";
         break;  
      case "4e":
          var price = "$1075";
        break;
      case "5e":
          var price = "$1300";
        break;

      // default:
      //   console.log("default");

      

}

$("#calc-price").html("<span>Price: " + price + "</span>");

});

  
document.getElementById("order").addEventListener("click", openEmail);

function openEmail() {
  var email = 'mailto:mbuxkemper@gmail.com?subject=Charcoal Portrait Order&body=Please include what size and how many people you would like.';
  window.open(email);
  }
// order button
