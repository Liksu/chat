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
		self.$rendered.draggable({handle: self.events.sl['caption'], stop: function() { $.extend(self.pos, arguments[1].offset) }});
		CM.identify('contact_list').each(function() {this.ear('activate', self.wo.data.users)});
	};

	self.init = function() {
		self.wo.data.messages = self.wo.data.messages.map(function(msg, i) {msg.text = msg.text.replace(/\n/g, '<br>'); return msg});
	};

	self.events.set('click.window', function(e) {
		self.$rendered.addClass('active').removeClass('unread');
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

	self.trigg('append', function(data, cb, sender) {
		data.messages = data.messages.map(function(msg, i) {msg.text = msg.text.replace(/\n/g, '<br>'); return msg});
		self.wo.data.messages = self.wo.data.messages.concat(data.messages);
		if (!self.$rendered.is('.active:not(.collapsed)')) self.$rendered.addClass('unread');
		self.rerender();
	});

	self.trigg('rerender:before', function() {
		self.$rendered.resizable('destroy');
	});

	self.trigg('render:after', function() {
		self.$rendered.resizable({minWidth: 150, minHeight: 150});
	});
}
