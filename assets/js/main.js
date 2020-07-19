$(document).ready(function() {
    $(window).scroll(function() {
        const scroll = $(window).scrollTop();
        const headerHeight = $('header').innerHeight();

        if (scroll >= headerHeight) {
            $('header').addClass('fixed')
        }
    })

    $('[data-target-section]').click(function(e) {
        const targetSection = $(e.target).attr('data-target-section');
        const offsetTop = $(`section[data-section="${targetSection}"]`).offset().top;

        $(window).scrollTo({ top: offsetTop, behavior: 'smooth' });
    })
})