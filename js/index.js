$(document).ready(function () {
   $('#calendar').eCalendar({url: 'loadCalendar'});

$('#calendar').eCalendar({
    events: [
        {title: 'Event Title 1', description: 'Description 1', datetime: new Date(2014, 7, 12, 17)},
        {title: 'Event Title 2', description: 'Description 2', datetime: new Date(2014, 7, 17, 16)}
    ]
});

$('#calendar').eCalendar({url: 'loadCalendar',
                          weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']});
});

