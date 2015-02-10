var onSuccess = function(data, status) {
  $('#' + data.id).remove();
};

var onError = function(data, status) {
  console.log("status", status);
  console.log("error", data);
};

$('.button').on('click', function() {
  $.post("kitchen/remove", {order: this.id})
    .done(onSuccess)
    .error(onError);
});