$(window).load(function () {
    $(window).on("scroll resize", function () {
        var pos = $('#appear').offset();
        $('.container').each(function () {
            if (pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top) {               
                var newDescr = $(this).find('.description').text();
                var oldDescr = $( "#appear" ).html();

                $('#appear').html(newDescr); 
                if(newDescr !== oldDescr) {
                    $( "#appear" ).css('opacity',0.05).animate({ 'opacity': '1',}, 200);
                return; 
                }
            }
        });
    });

    $(document).ready(function () {
        $(window).trigger('scroll'); 
    });
});