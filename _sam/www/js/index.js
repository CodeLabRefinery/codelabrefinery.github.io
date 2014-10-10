

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

$('#bars').click(function() { $('body').toggleClass("menu-open");})
$('.caller-search').click(function() { $('body').toggleClass("search-open");})

    });

}(jQuery));