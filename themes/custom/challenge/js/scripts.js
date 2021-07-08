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
        // console.log( "article function ready!" );
        delayArticles();
    });

    function delayArticles() {
        /*  function to delay all the teaser blocks as they float up.

            finds all the teaser blocks.
            iterates through the blocks:
                adds an animation-delay css property to the block,
                beginning with a 0 second delay, and increasing by
                1/2 second each time.
        */
        // console.log('findArticles');
        var $articles = $('article.node--view-mode-teaser');
        // console.log('number of articles: ' + $articles.length);

        var delay = 0.0;

        for (let i = 0; i < $articles.length; i++) {
            // console.log($articles.eq(i));
            $articles.eq(i).css('animation-delay', (delay + 's'));
            delay += 0.5;
            // console.log($articles.eq(i).css('animation-delay'));
        }
    }

}(jQuery));

function randConfetti() {
    confetti({
        particleCount: 100,
        startVelocity: 30,
        spread: 360,
        origin: {
            x: Math.random(),
        // since they fall down, start a bit higher than random
            y: Math.random() - 0.2
        }
    });
}