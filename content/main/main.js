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
	};

	self.events.set('click.area', function(e) {
		ok('area click');
		CM.identify('room').each(function(i, w) {w.$rendered.removeClass('active')})
	});
}
