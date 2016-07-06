var createGreeting = function(message, name) {
	return message + name;
}

console.log(createGreeting('Here is the message ', 'Ted'));



var arrowGreeting = (message, name) => message + name;

console.log(arrowGreeting('Message for ', 'Tom'));



var squared = x => x*x;

console.log(squared(5));



// var deliveryBoy= {
// 	name: "John",
// 	handleMessage: function(message, handler) {
// 		handler(message);
// 	},
// 	receive: function() {
// 		var that = this;
// 		this.handleMessage("Hello, ", function(message) {
// 			that.name;
// 			console.log(message + that.name);
// 		})
// 	}
// }

var deliveryBoy= {
	name: "John",
	handleMessage: function(message, handler) {
		handler(message);
	},
	receive: function() {
		this.handleMessage("Hello, ", message => console.log(message + this.name))
	}
}

deliveryBoy.receive()
