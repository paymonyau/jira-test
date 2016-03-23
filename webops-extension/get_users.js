imgs = $('div.ghx-avatar img');
dedupe = [];
imgs.each(function () {
	dedupe[this.alt] = show;
	dropdown_html = "<option>"+this.alt+"</option>\n";
});
$('select#users').innerHTML(dropdown_html);