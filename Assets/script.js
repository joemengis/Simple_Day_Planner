$(document).ready(function() {
    
    $("#currentDay").text( moment().format('ddd MMM Do, YYYY') );

    $('.task').each(function() {
        var hour = $(this).attr('hour');
        
        // console.log("Hour var", hour)
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
