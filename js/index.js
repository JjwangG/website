$(function () {
  $("#nav-bar").load("./assests/nav-bar.html");
});

function onClick() {
  //   document.getElementsByClassName("main-body")[0].style.backgroundColor =
  //     "pink";
  $.getJSON("https://sv443.net/jokeapi/v2/joke/Any?type=single", function (
    json_data
  ) {
    $("#joke").text(json_data.joke);
    //alert(JSON.stringify(json_data));
  });
}
