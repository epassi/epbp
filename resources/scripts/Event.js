// Reactor pattern.
// Allows any object to dispatch events,
// not just DOM elements.

class Event {
	constructor(name) {
		this.name = name;
		this.callbacks = [];
	}

	registerCallback(callback) {
		this.callbacks.push(callback);
	}
}
