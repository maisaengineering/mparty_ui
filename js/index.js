$(document).ready(function () {
   $('#calendar').eCalendar({
    events: [
        {title: 'Event Title 1', description: 'Description 1', datetime: new Date(2014, 11, 12, 17)},
        {title: 'Event Title 2', description: 'Description 2', datetime: new Date(2014,11, 17, 16)},
		{title: 'Event Title 2', description: 'Description 2', datetime: new Date(2014,11, 20, 20)},
		
    ]
});

});