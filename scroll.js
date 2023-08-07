$(function () {
    $('nav a').click(function () {
        var href = $(this).attr('href')
        var offSetTo = $(href).offset().top
        $('html,body').animate({
            'scrollTop': offSetTo
        })
        return false

    })
})