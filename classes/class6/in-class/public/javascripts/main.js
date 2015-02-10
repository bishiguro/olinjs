$('#hello-button1').click(function() {
	$.post('/hello', {
		text: 'data'
	})
	.done(function(data) {
		alert(data);
	})
	.error(console.error);
})