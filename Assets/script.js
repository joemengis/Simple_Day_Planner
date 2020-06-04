$(document).ready(function() {

    $('.task').each(function() {
        var hour = $(this).parent('div').attr('hour');
        //
        console.log("Hour var", hour)
        var currentHour = moment().hour();
        //current hour from moment
        console.log("Show me current hour ", currentHour)
        var comparedHour = moment().hour(hour);
        console.log("My hour vs. Moments hour is... ", comparedHour)

        var task = localStorage.getItem(hour);
        $(this).children('form').children('textarea').val(task);

        if (comparedHour < currentHour) {
            //in the past 
            //add past class to text area
            $(this).children('form').children('textarea').addClass('past');
        }else if (comparedHour > currentHour) {
            //in the future
            $(this).children('form').children('textarea').addClass('future');
        }else if (currentHour === comparedHour) {
            //in the present 
            $(this).children('form').children('textarea').addClass('present');
        }
    });

    $('.btn').click(function(){
        event.preventDefault();
        console.log("hello")
        // save the task in local storage
        var hour = $(this).siblings(".hour").attr("hour");
        var task = $(this).siblings(".task").val();
        console.log(hour)
        console.log(task)

        var calendarEvent = {timeSlot: hour, userText: task}
        console.log(calendarEvent)
        // var task = event.target.task.value;
        //  console.log(event.target)
        //  console.log()
        localStorage.setItem("allEvents", JSON.stringify(calendarEvent));
        // console.log(hour);
    }); 

});
