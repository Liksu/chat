/**
 * Dummy responses for debug without api server
 * Created by Peter Bortchagovsky.
 */

Fixture.short(/^\/events\/connect/, function() {
	return {
		status: 'ok'
		, events: [{
			message_type: 'update'
			, recipient: 'main'
			, data: { time: u.getDT() }
		}]
	}}, 5000);

Fixture.short(/^\/events\/register/, {
		status: 'ok'
		, agentId: u.uid()
	});

Fixture.short('/api/getSettings', {
		lang: 'ru'
		, theme: 'default'
		, curr: 'UAH'
	});


Fixture.short('/api/getObject', function() {
	var json = {};

	switch (arguments[1].data.id) {
		case 'main':
			json = {
				widget_id: 'main'
				, widget_name: 'main'
				, template_name: 'main'
				, need_data: false
				, draw_if_null: true
				, children: []
				, data: {}
				, tray: 1
				, trays: []
				, voc: { title: 'Alien chat', login: 'username' }
			};
			break;
		default:
			json = {
				children: [['main']]
			};
	};
	return json;
});
