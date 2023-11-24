// Script to handle Isotope filtering
$(document).ready(function () {
    // Initialize Isotope
    let $grid = $('.box-container').isotope({
        itemSelector: '.box',
        layoutMode: 'fitRows'
    });

    // Filter items on button click
    $('.button-group').on('click', 'button', function () {
        let filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
});
