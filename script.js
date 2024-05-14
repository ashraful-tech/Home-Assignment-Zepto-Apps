

let menuBar = document.querySelector('#menuBar');
let menuPreview = document.querySelector('#manuPreview');


menuBar.addEventListener("click", function(){
    menuPreview.classList.toggle("hidden");
});