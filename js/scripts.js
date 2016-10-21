// var intoProg = false;
// var intoWeb = false;
// var intoVisual = false;
// var intoCoding = false;

// var checkMatch = function() {
//   if ($("#prog").is(':checked')) {
//       intoProg = true;
//   }
//   if ($("#web").is(':checked')) {
//       intoWeb = true;
//   }
//   if ($("#visual").is(':checked')) {
//       intoVisual = true;
//   }
//   if ($("#coding").is(':checked')) {
//       intoCoding = true;
//   }
// };

// BACK-END

var getResults = function(intoProg, intoWeb, intoVisual, intoCoding) {
  if (intoProg && intoVisual) {
    return "ruby";
  }
  else if (intoProg && intoCoding) {
    return "sharp";
  }
  else if (intoWeb && intoVisual) {
    return "design";
  }
  else if (intoWeb && intoCoding) {
    return "drupal";
  }
};


// FRONT-END

var displayOutput = function(programs) {
  $("#prog, #web, #visual, #coding").hide();
  $("#" + programs).show();
};

$(document).ready(function(){
  $("button#match").click(function(event){

    if ($("#prog").is(':checked')) {
        var intoProg = true;
    }
    if ($("#web").is(':checked')) {
        var intoWeb = true;
    }
    if ($("#visual").is(':checked')) {
        var intoVisual = true;
    }
    if ($("#coding").is(':checked')) {
        var intoCoding = true;
    }

    var programs = getResults(intoProg, intoWeb, intoVisual, intoCoding);

    displayOutput(programs)

  event.preventDefault();
  });

});
