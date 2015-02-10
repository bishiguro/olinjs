var $form = $("#ingredient-form");

var onSuccess = function(data, status) {
  $(data).prependTo('#ingredients');
};

var onError = function(data, status) {
  console.log("status", status);
  console.log("error", data);
};

$form.submit(function(event) {
  
  event.preventDefault();
  var name = $form.find("[name='ingredient']").val();
  var price = $form.find("[name='price']").val();
  
  $.post("ingredients/add", {
    name: name,
    price: price
  })
    .done(onSuccess)
    .error(onError);
});