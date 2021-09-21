// prevBtn = document.querySelector('#prevBtn');

// function sendMail() {
//     var link = "mbuxkemper@gmail.com"
//              + "&subject=" + encodeURIComponent(document.getElementById('subject').value)
//              + "&body=" + encodeURIComponent(document.getElementById('message').value)
//     ;
    
//     window.location.href = link;
// }

document.getElementById("submit").addEventListener("click", openEmail);

function openEmail() {

    var email = "mailto:mbuxkemper@gmail.com"
                 + "?subject=" + (document.getElementById('subject').value)
                 + "&body=" + (document.getElementById('message').value) + '%0D%0A' + (document.getElementById('name').value)
  
    // var email = 'mailto:mbuxkemper@gmail.com?subject=Charcoal Portrait Order&body=Please include what size and how many people you would like.';
  
  window.open(email);
  }