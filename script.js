$(document).ready(function() {
    // Toggle dropdown on click
    $('.dropdown-toggle').click(function(event) {
        event.preventDefault(); 
        
        // Slide toggle the dropdown
        $(this).next('.dropdown').slideToggle();
        
        // Toggle the rotated class for the dropping icon
        $(this).find('.dropping').toggleClass('rotate');
    });

    // Close the dropdown if clicked outside
    $(document).click(function(event) {
        if (!$(event.target).closest('.navbar a').length) {
            $('.dropdown').slideUp(); // Slide up the dropdown menu
            $('.dropping').removeClass('rotate'); 
        }
    });
});

// move the notes on What we do?
$(document).ready(function() {
    const $items = $('.trip-list div').css('opacity', 0);
    $(window).scroll(function() {
        $items.each(function(i) {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
                $(this)
                    .css('position', 'relative')
                    .css('left', i % 2 ? '30px' : '-30px')
                    .animate({
                        left: 0,
                        opacity: 1
                    }, 500);
            }
        });
    }).scroll();
});