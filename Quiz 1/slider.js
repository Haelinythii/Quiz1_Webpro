$(function()
{
    // $('body').css('background', 'red');
    var innerWrapper = $('.innerWrapper');

    $('.nextButton').on('click', function()
    {
        innerWrapper.animate({left: '-200%'}, 500, function(){

            $('.slideContent').last().after($('.slideContent').first());
            innerWrapper.css('left', '-100%');

        })
    })

    $('.prevButton').on('click', function()
    {
        innerWrapper.animate({left: '0%'}, 500, function(){

            $('.slideContent').first().before($('.slideContent').last());
            innerWrapper.css('left', '-100%');

        })
    })
})