document.addEventListener(`DOMContentLoaded`, event => {


	/**
		SINGLE PAGE WEB APP ROUTER
		Uncomment the following code if you want to create a single-page web app.
	*/


	// // Set up the router.
	// // - The views are HTML partials kept in the views folder.
	// // - index.html will need a container for the viewport.
	// // - Make sure the container class matches the querySelector in the code below.
	// // - Update the view names view1, view2, etc. to match your prefered names.

	// const router = new Router(
	// 	{
	// 		view1: new View(`view1.html`),
	// 		view2: new View(`view2.html`),
	// 		view3: new View(`view3.html`),
	// 		'#default': new View(`view1.html`)
	// 	},
	// 	document.querySelector(`.viewport`)
	// );


	// // Listen for URL changes from the router.
	// // Use this to update global nav state, analytic reporting, and
	// // anything else that needs updating in response to a URL change.

	// router.addEventListener(`urlChange`, event => {
	// 	let viewName = '';

	// 	// Get the view name.
	// 	// In this example, #default maps to a view called vie.
	// 	let newActiveViewName = (event.viewName === '#default') ? 'view1' : event.viewName;

	// 	// Google Analytics
	// 	// gtag('config', 'UA-XXXXXXXXX-X', {'page_path': `/#/${newActiveViewName}`});

	// });


	// Your index.html code here.
	console.log(`JavaScript ready.`);
});

