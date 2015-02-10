var $form = $("#order-form");
var ingredients = [];
var total = 0

var onSuccess = function(data, status) {
  $("div:first").replaceWith($(data));
};

var onError = function(data, status) {
  console.log("status", status);
  console.log("error", data);
};

$form.submit(function(event) {
  event.preventDefault();

  $.post("/order/purchase", {ingredients: JSON.stringify(ingredients)})
    .done(onSuccess)
    .error(onError);
});

$('.checkbox').on('click', function() {
    var id = $(this).attr('id')
    var price = $(this).attr('price')

    if (this.checked) {
      ingredients.push(id);
      total += parseFloat(price);
    }
    else {
      ingredients.splice(1, ingredients.indexOf(id))
      total -= parseFloat(price);
    }

    $.post("/order/cost", {total: total})
      .done(onSuccess)
      .error(onError);
});