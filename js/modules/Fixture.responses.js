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

Fixture.short('/api/getData', function() {
	var json = {};

	switch (arguments[1].data.id) {
		case 'contact_list': {
			json = {

			}
		}
	}

	return json;
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
				, children: [['contact_list', 'room']]
				, data: {}
				, tray: 1
				, trays: ['main']
				, voc: { title: 'Alien chat', login: 'username' }
			};
			break;
		case 'contact_list':
			json = {
				widget_id: 'contact_list'
				, widget_name: 'contact_list'
				, template_name: 'contact_list'
				, need_data: true
				, draw_if_null: true
				, children: []
				, data: {}
				, tray: 1
				, trays: []
				, voc: {  }
			};
			break;
		case 'room':
			json = {
				widget_id: 'room'
				, widget_name: 'room'
				, template_name: 'room'
				, need_data: false
				, draw_if_null: true
				, children: []
				, data: {}
				, tray: 1
				, trays: []
				, voc: {  }
			};
			break;
		default:
			json = {
				children: [['main']]
			};
	};
	return json;
});
