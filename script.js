$('.CountTitle').text('Counter');

var num = 0;
$('.CountNum').text(num);

$("#incrBtn").click(function () {
    $(".CountNum").text(++num);
        
});

$("#decrBtn").click(function () {
    if (num !== 0) {
        $(".CountNum").text(--num);
    
    };
    
});



/* 
Replicate the basic HTML above (2 different headings and a button)
Create an EventListener for clicking on the button, increase the value of the second heading (currently 0)
(Optional) Create a working decreasing button as well
(Hint) Any content of an HTML element is going to be a string
(Hint) You can store the number in a variable
*/