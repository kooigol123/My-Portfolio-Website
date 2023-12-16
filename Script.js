let Gmail = 'tritontriton008@gmail.com';
function Copygmail() {
      navigator.clipboard.writeText(Gmail);
      var gmail = document.getElementById("Copygmail")
      if (gmail.style.display === "block") {
      } else {
            document.getElementById("Copygmail").style.display = "none";
            document.getElementById("Copyedgmail").style.display = "block";
            document.getElementById("tooltiptext-gmail").style.display = "none";
            
      }
      
      
}
let Phone = '0621605262';
function Copyphone() {
      navigator.clipboard.writeText(Phone);
      var phone = document.getElementById("Copyphone")
      if (phone.style.display === "block") {
      } else {
            document.getElementById("Copyphone").style.display = "none";
            document.getElementById("Copyedphone").style.display = "block";
            document.getElementById("tooltiptext-phone").style.display = "none";
      } 
     
}

function Menu() {
      document.getElementById("Mydropdown").classList.toggle("show");
      window.onclick = function(event) {
                              if (!event.target.matches('.bar')) {
                              var dropdowns = document.getElementsByClassName("dropdown-bar");
                              var i;
                              for (i = 0; i < dropdowns.length; i++) {
                                    var openDropdown = dropdowns[i];
                                    if (openDropdown.classList.contains('show')) {
                                          openDropdown.classList.remove('show');
                            }
                           }
                          }
                         }
      }
      
