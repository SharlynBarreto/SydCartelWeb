$(document).ready(function() {
    $('.service').on('click', function() {
        const service = $(this).data('service');
        $('#calendar-modal').show();

        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            selectable: true,
            dateClick: function(info) {
                alert('You clicked on ' + info.dateStr + ' for service ' + service);
                $('#calendar-modal').hide();
            }
        });
        calendar.render();
    });
    // Close modal when clicking outside of it
    $(window).on('click', function(event) {
        if (event.target.id == 'calendar-modal') {
            $('#calendar-modal').hide();
        }
    });
});
