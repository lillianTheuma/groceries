var list = [];

$(document).ready(function() {
  $("form#list").submit(function(event) {
    var userInput = $("input").val();
    var items = userInput.split(" ");
    var list = items.map(function(item) {
      return item.toUpperCase();
    });
    list.sort();
    list.forEach(function(item) {
      $("#result").append("<li>" + item + "</li>");
    });

    $("form#list").hide();

    event.preventDefault();
  });
});
