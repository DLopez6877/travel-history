/////////////////////////////////////////////////////////////
///////////               BACK_END                ///////////
/////////////////////////////////////////////////////////////
function Place(name, date, activities) {
  this.placeName = name;
  this.placeDate = date;
  this.placeActivities = activities;
}

/////////////////////////////////////////////////////////////
///////////              FRONT_END                ///////////
/////////////////////////////////////////////////////////////

$(function() {
  $("form#new-destination").submit(function(event){
    event.preventDefault();

    //take user input from form
    var newPlaceName = $("input#name-destination").val();
    var newPlaceDate = $("input#date-destination").val();
    var newPlaceActivities = $("textarea#activities-destination").val();

    // created objects from form input
    var newPlace = new Place(newPlaceName, newPlaceDate, newPlaceActivities);

    //provide fake link for user to click to show results on right side of screen
    $("ul#list-results").append("<li><span class='user-result'>" + newPlace.placeName + "</span></li>");

    //results for the right column after user clicks on fake link
    $(".user-result").last().click(function() {
      $("#rightColResults").show();
      $("#rightColResults h2").text(newPlace.placeName);
      $(".result-name").text(newPlace.placeName);
      $(".result-dates").text(newPlace.placeDate);
      $(".result-activities").text(newPlace.placeActivities);
    });

  });
});
