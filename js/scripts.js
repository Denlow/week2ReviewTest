
var intoMen;
var intoWomen;
var intoYoung;
var intoMature;

var checkMatch = function() {
  if ($("#men").is(':checked')) {
    intoMen = true;
  }
  if ($("#women").is(':checked')) {
      intoWomen = true;
  }
  if ($("#young").is(':checked')) {
      intoYoung = true;
  }
  if ($("#mature").is(':checked')) {
      intoMature = true;
  }
};

var displayMatch = function(intoMen, intoWomen, intoYoung, intoMature) {}

$(document).ready(function(){
  $("button#match").click(function(event){
    checkMatch()

  event.preventDefault();
  });

});
