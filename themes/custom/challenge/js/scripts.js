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
    var $articles = $('article');
    console.log('number of articles: ' + $articles.length);

    for (const article in $articles) {
    console.log(article);
    // /console.log($articles.eq(x).children('.field-user-fullname').text());
    // console.log($articles.eq(x).children('.field--name-field-first-name').length);/
    // //console.log($('article').eq(x).children('.nodecontent').children('.field--name-field-first-name').children('.fielditem').text());
    // //console.log($('article').eq(x).children('.nodecontent').children('.field--name-field-last-name').children('.fielditem').text());
    // var first = $('article').eq(x).children('.nodecontent').children('.field--name-field-first-name').children('.fielditem').text();
    // var last = $('article').eq(x).children('.nodecontent').children('.field--name-field-last-name').children('.fielditem').text();
    // console.log(first+" "+last);
    // $articles.eq(x).children('.field-user-fullname').html(first+" "+last);
    }
}

}(jQuery));