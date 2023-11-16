function openNav() {
  if (document.getElementById("ofCannvasNav").style.width === "250px"){//if the nav is already open close it
    closeNav();
  }
  else{ //other open the offcanvas nav
    document.getElementById("ofCannvasNav").style.width = "250px";
    setTimeout(() => {
      document.getElementById("closebtn").style.display = "block";
    }, 300);
  }
}

//close the nav
function closeNav() {
    document.getElementById("ofCannvasNav").style.width = "0";
    document.getElementById("closebtn").style.display = "none";
}
  
//this runs when the site is open and calls the closenav wehn espace is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeNav();
    }
});