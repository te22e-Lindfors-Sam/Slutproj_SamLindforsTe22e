function openNav() {
  if (document.getElementById("ofCannvasNav").style.width === "250px"){//if the nav is already open close it
    closeNav();
  }
  else{ 
    document.getElementById("ofCannvasNav").style.width = "250px";
    setTimeout(() => {
      document.getElementById("closebtn").style.display = "block";
    }, 300);
  }
}

function closeNav() {
    document.getElementById("ofCannvasNav").style.width = "0";
    document.getElementById("closebtn").style.display = "none";
}
  
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeNav();
    }
});