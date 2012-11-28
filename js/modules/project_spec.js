/**
 * Created by Peter Bortchagovsky.
 * 22.12.11 14:39
 */

function(CM) {
	var self = this;

	CM.W.constructor_hook.push(function() {
		var widget = this;

//		widget.trigg('render:after', function(data, cb, sender) {
//			widget.$rendered.addClass('window');
//		})
	}
	);

	self.after_load = function() {
	};

}