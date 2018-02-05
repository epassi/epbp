// Reactor pattern.
// Allows any object to dispatch events,
// not just DOM elements.

class Reactor {
	constructor() {
		this.events = {};
	}

	registerEvent(eventName) {
		let event = new Event(eventName);
		this.events[eventName] = event;
	}

	dispatchEvent(eventName, eventArgs) {
		this.events[eventName].callbacks.forEach( callback => {
			callback(eventArgs);
		});
	}

	addEventListener(eventName, callback) {
		this.events[eventName].registerCallback(callback);
	}
}