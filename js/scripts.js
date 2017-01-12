$(function() {
  // Note \n signals a new line.
  var message =
    "In Oregon one may vote at 18 years old and register at 17.\n" +
    "Click OK if you are old enough to vote or register.";

  if (confirm(message)) {
    $("#oldEnoughToVote").show();
  } else {
    $("#notOldEnoughToVote").show();
  };
}); // End JavaScript
