/**
 * Created by Peter Bortchagovsky.
 * 28.11.2012 14:31
 */

/**
 * render widget
 * @param {widget_object} wo
 */
function(wo) {
	var self = this;
	CM.W.apply(self);
	$.extend(true, self.wo, wo);

	self.ready = function() {
		self.$rendered.addClass('window');
	};

	self.events.set('click.window', function(e) {
		ok('room');
		self.$rendered.toggleClass('active');
		e.stopPropagation();
		e.preventDefault();
	});
}
