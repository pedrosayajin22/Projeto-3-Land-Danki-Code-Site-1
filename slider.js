$(function () {
    var amount = $('.sobre-autor').length;
    function initSlider() {
        var sizeContainer = 100 * amount
        var sizeBoxSingle = 100 / amount
        $('.sobre-autor').css('width', sizeBoxSingle + '%')
        $('.scroll-wrapper').css('width', sizeContainer + '%')
        for (let i = 0; i < amount; i++) {
            if (i == 0) {
                $('.slider-bullets .centraliza').append(' <div style="background-color: black;"></div>')
            } else {
                $('.slider-bullets .centraliza').append('<div></div>')
            }
        }

    }
    initSlider()
    var delay = 5000
    var CurrentIndex = 0
    
    function autoPlay() {
        setInterval(function () {
            CurrentIndex++;
            if (CurrentIndex == amount) {
                CurrentIndex = 0
            }
            goToSlider(CurrentIndex)

        }, delay)
    }
    autoPlay()

    function goToSlider(CurrentIndex) {
        var OffSetX = $('.sobre-autor').eq(CurrentIndex).offset().left - $('.scroll-wrapper').offset().left
        $('.slider').stop().animate({
            'scrollLeft': OffSetX+'px'
        })
        $('.slider-bullets .centraliza div').css('background-color','rgb(200,200,200)').css('height','16px').css('width','16px')
        $('.slider-bullets .centraliza div').eq(CurrentIndex).css('background-color','black').css('height','18px').css('width','18px')


    }

    $(window).resize(function(){
        $('.slider').stop().animate({
            'scrollLeft': 0
        })
    })

})