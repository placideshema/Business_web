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

//animation for the right contents of the contact html
$(document).ready(function() {
    const $rightContents = $('.right-contents');

    // Check if the element is in the viewport
    function checkVisibility() {
        const windowHeight = $(window).height();
        const scrollTop = $(window).scrollTop();
        const elementTop = $rightContents.offset().top;

        // If the element is in the viewport
        if (elementTop < scrollTop + windowHeight) {
            $rightContents.addClass('show'); // Add the 'show' class
            $(window).off('scroll', checkVisibility); // Remove the scroll event listener
        }
    }

    $(window).on('scroll', checkVisibility); // Check visibility on scroll
    checkVisibility(); // Initial check when the page loads
});

// moving departments of contact us!
$(document).ready(function() {
    $(window).on('scroll', function() {
        $('.contact-department').each(function() {
            const elementTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            
            if (elementTop < windowBottom - 100) { 
                $(this).addClass('visible');
            }
        });
    });
});

// destination.
$(document).ready(function() {
    $('.row').each(function() {
        var element = this;
        new Waypoint({
            element: element,
            handler: function() {
                $(element).addClass('fade-in');
            },
            offset: '80%' 
        });
    });
});
  
