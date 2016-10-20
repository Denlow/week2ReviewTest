// var intoMen = false;
// var intoWomen = false;
// var intoYoung = false;
// var intoMature = false;

// var checkMatch = function() {
//   if ($("#men").is(':checked')) {
//       intoMen = true;
//   }
//   if ($("#women").is(':checked')) {
//       intoWomen = true;
//   }
//   if ($("#young").is(':checked')) {
//       intoYoung = true;
//   }
//   if ($("#mature").is(':checked')) {
//       intoMature = true;
//   }
// };

// BACK-END

var getResults = function(intoMen, intoWomen, intoYoung, intoMature) {
  if (intoMen && intoYoung) {
    return "hartnett";
  }
  else if (intoMen && intoMature) {
    return "rourke";
  }
  else if (intoWomen && intoYoung) {
    return "hath";
  }
  else if (intoWomen && intoMature) {
    return "streep";
  }
};


// FRONT-END

var displayOutput = function(celeb) {
  $("#streep, #hartnett, #rourke, #hath").hide();
  $("#" + celeb).show();
};

$(document).ready(function(){
  $("button#match").click(function(event){

    if ($("#men").is(':checked')) {
        var intoMen = true;
    }
    if ($("#women").is(':checked')) {
        var intoWomen = true;
    }
    if ($("#young").is(':checked')) {
        var intoYoung = true;
    }
    if ($("#mature").is(':checked')) {
        var intoMature = true;
    }

    var celeb = getResults(intoMen, intoWomen, intoYoung, intoMature);

    displayOutput(celeb)

  event.preventDefault();
  });

});
