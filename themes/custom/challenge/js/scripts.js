(function ($) {

console.log("hello from my scripts file!")

$( function() {
    // JQuery UI Tooltip.
    $( ".move-down-tooltip" ).tooltip({
        show: null,
        position: {
        my: "center top",
        at: "center bottom"
        },
        open: function( event, ui ) {
        ui.tooltip.animate({ top: ui.tooltip.position().top + 10 }, "medium" );
        }
    });
} );

$(function() {
    console.log( "article function ready!" );
    findArticles();
});

function findArticles() {
    console.log('findArticles');
    var $articles = $('article.node--view-mode-teaser');
    console.log('number of articles: ' + $articles.length);

    var delay = 0.0;

    for (let i = 0; i < $articles.length; i++) {
        console.log($articles.eq(i));
        $articles.eq(i).css('animation-delay', (delay + 's'));
        delay += 0.5;
        console.log($articles.eq(i).css('animation-delay'));
    }
}

}(jQuery));
