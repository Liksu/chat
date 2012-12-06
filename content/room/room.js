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
		self.$rendered.draggable({handle: self.events.sl['caption']});
		self.$rendered.resizable();
	};

	self.events.set('click.window', function(e) {
		self.$rendered.addClass('active');
		e.stopPropagation();
		e.preventDefault();
	});

	self.events.set('click.minimize', function(e) {
		$(e.target)
			.toggleClass('minimize')
			.toggleClass('maximize')
		;
		self.$rendered.toggleClass('collapsed');
		self.$('.ui-resizable-handle').toggle();
	});

	setInterval(function() {
		//self.$('unread').toggleClass('blink');
	}, 800);
}
