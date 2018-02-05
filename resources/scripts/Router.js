// Thank you:
// https://www.ynonperek.com/2017/08/24/vanilla-single-page-router-architecture/

class Router extends Reactor {
	constructor(routes, viewport) {
		super();
		this.registerEvent(`urlChange`);

		this.routes = routes;
		this.viewport = viewport;
		window.onhashchange = this.hasChanged.bind(this);
		this.hasChanged();
	}

	async hasChanged(event) {
		if (window.location.hash.length > 0) {
			const viewName = window.location.hash.substr(2);
			this.show(viewName);
		} else if (this.routes['#default']) {
			this.show('#default');
		}
	}

	async show(viewName) {
		const view = this.routes[viewName];
		await view.load();
		this.viewport.innerHTML = ``;
		view.show(this.viewport);
		this.dispatchEvent(`urlChange`, {viewName});
	}
}