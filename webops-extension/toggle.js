imgs.each(function () {
if (dedupe(this.alt) == 'show') {
	$(this).parent().parent().hide();
} else {
	$(this).parent().parent().show()
}
});