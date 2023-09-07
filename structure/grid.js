var modals = document.getElementsByClassName("modal");
var modalArray = Array.from(modals);
var modals = modalArray.map(function(modal) {
    return { id: modal.id, target: modal };
});

var currentModal;

var span = document.getElementsByClassName("close")[0];

const buttons = document.getElementsByClassName("modalButton");

function handleButtonClick(event, btn) {
    console.log('A button was clicked.');
    var id;
    if (btn){
        id = btn.id;
    }
    var modal = modals.find(function(item) {
        return item.id === id;
    });
    currentModal = modal;
    if (currentModal) {
        currentModal.target.style.display = "block";
    } else {
        console.log("Modal not found for the clicked button.");
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
        handleButtonClick(event, buttons[i]);
    });
  }

  span.onclick = function() {
    
    currentModal.target.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    console.log("hje");
    if (event.target === currentModal.target) {
        console.log("ee");
        currentModal.target.style.display = "none";
    }
  }
