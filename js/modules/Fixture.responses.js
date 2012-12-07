/**
 * Dummy responses for debug without api server
 * Created by Peter Bortchagovsky.
 */

Fixture.short(/^\/events\/connect/, function() {
	return {
		status: 'ok'
		, events: [
			  {message_type: 'update', recipient: 'main', data: { time: u.getDT() }}
			, {message_type: 'append', recipient: 'room', data: { messages: [
					{author: (2).rand() ? 'Alpha' : 'Betah', time: u.getSQLDT(), text: (new Array((20).rand()+5)).map(function() {return 'ba fa ga la do bu ne re mu que rlo po ve te ta ou'.qw().rand((5).rand()+1).join('')}).join(' ')}
				] }}
		]
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
		case 'room':
			json = {
				users: '254845'
				, messages: [
					  {author: 'Alpha', time: '2012-11-30 22:17:14', text: 'Hi all\nfirst message'}
					, {author: 'Betah', time: '2012-11-30 22:18:32', text: 'Curabitur molestie elementum varius.\nNunc hendrerit massa eu mi eleifend condimentum.\nInteger tristique volutpat venenatis. Suspendisse urna nisi, rhoncus in sodales non, auctor ac metus. Quisque auctor tincidunt lorem.'}
				]
			};
			break;
		case 'contact_list':
			json = {
				users: [
					{id: 102837, name: 'Alpha', icon: null, online: true}
					, {id: 254845, name: 'Betah', icon: null, online: true}
					, {id: 873341, name: 'Charlie', icon: null, online: false}
					, {id: 215643, name: 'Delta', icon: null, online: true}
				]
			};
			break;
		default:
			json = {};
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
				, voc: { title: 'Alien chat', login: 'Alpha' }
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
				, tray: 1
				, trays: []
				, voc: { title: 'Contacts' }
			};
			break;
		case 'room':
			json = {
				widget_id: 'room'
				, widget_name: 'room'
				, template_name: 'room'
				, need_data: true
				, draw_if_null: true
				, children: []
				, tray: 1
				, trays: []
				, voc: { send: 'Ctrl+Enter for send', title: 'chat with Betah' }
			};
			break;
		default:
			json = {
				children: [['main']]
			};
	};
	return json;
});
