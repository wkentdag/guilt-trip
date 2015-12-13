$(document).ready(function() {
  $("body").keydown(function(e){

    if (e.which == 37 || e.which == 39) {
        changeColors();
    }
  });
});


function changeColors() {
  console.log('changing colors');

}
