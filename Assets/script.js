$(document).ready(function() {

    //add current day to header
    $("#currentDay").text( moment().format('ddd MMM Do, YYYY') );

    //compare all tasks to moment current hour and add appropriate class
    $('.task').each(function() {
        var hour = $(this).attr('hour');
        
        // clock time from moment
        var currentHour = moment();
        var comparedHour = moment().hour(Number(hour));
        var task = localStorage.getItem(hour);
        
        $(this).children('form').children('textarea').val(task);
    
        if (comparedHour < currentHour) {
            //in the past 
            //add past class to text area
            $(this).children('form').children('textarea').addClass('past');
        } else if (comparedHour > currentHour) {
            //in the future
            $(this).children('form').children('textarea').addClass('future');
        } else {
            //in the present 
            $(this).children('form').children('textarea').addClass('present');
        }
    });

    $('form').submit(function(event){
        event.preventDefault();
       
        // save the task in local storage
        var hour = $(this).parent().attr("hour");
        var task = event.target.task.value;
      
        localStorage.setItem(hour, task);
        
    }); 

});
