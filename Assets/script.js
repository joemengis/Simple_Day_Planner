$(document).ready(function() {

$('.task').each(function() {
    var hour = $(this).parent('div').attr('hour');
    var currentHour = moment().hour();
    var comparedHour = moment().hour(hour);

    var task = localStorage.getItem(hour);
    $(this).children('form').children('textarea').val(task);

    if (comparedHour < currentHour) {
        //in the past 
        //add past class to text area
        $(this).children('form').children('textarea').addClass('past');
    }else if (comparedHour > currentHour) {
        //in the future
        $(this).children('form').children('textarea').addClass('future');
    }else if (currentHour.isSame(comparedHour, 'hour')) {
        //in the present 
        $(this).children('form').children('textarea').addClass('present');
    }
});

    $('form').submit(function() {
         event.preventDefault();
         
         // save the task in local storage

         var hour = $(this).parent().attr('hour');
         var task = e.target.task.value;
         localStorage.setItem(hour, task);
    });
});
