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
		self.$rendered.addClass('window active');
	};

	self.events.set('click.user', function(e) {
		$(this).toggleClass('active');
	});

	self.trigg('activate', function(data, sender, cb) {
		var users = typeof data == 'string' ? data.qw() : data;
		self.$rendered.$('user').removeClass('active');
		users.each(function() {
			self.$rendered.$('[data-user_id=' + this + ']').addClass('active');
		})
	});
}
