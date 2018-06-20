$(document).ready(function() {
    $('label').click(function() {
        $('.submit').css('background','#30C465');
    });
    $('.submit').click(function() {
        if($("input[type='radio']:checked").hasClass("correct")) {
           $('.valid-ans').attr('data-value','correct');
        }
        else if($("input[type='radio']:checked").hasClass("incorrect")){
            $('.valid-ans').attr('data-value','correct');
            $('.invalid-ans').attr('data-value','incorrect');
        }
        else{
            $('.valid-ans').attr('data-value','default');
            $('.invalid-ans').attr('data-value','default');
        }
        $('.submit').text('Next').css('background','#67DBF1');
    });
    if (window.innerWidth > 768) {
        document.write('Only work for mobile screen so Please resize the window below 768px and Refresh');
    }
});
