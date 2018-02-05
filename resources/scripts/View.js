// Thank you:
// https://www.ynonperek.com/2017/08/24/vanilla-single-page-router-architecture/

class View {
	constructor(url) {
		// this.url = `pages/` + url;
		this.url = url;
	}

	// NOTE: this uses jQuery's AJAX function.
	// You'll need to add jQuery as a project dependency.
	// npm i jquery --save
	load() {
		return $.get(this.url).then(res => this.html = res);
	}

	show(view) {
		view.innerHTML = this.html;
	}
}