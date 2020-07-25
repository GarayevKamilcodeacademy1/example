$(document).ready(function() {

    // 'fixed' adinda css-de class yaratmaq lazimdir

    $(window).scroll(function() {
        const scroll = $(window).scrollTop();
        const headerHeight = $('header').innerHeight();

        if (scroll >= headerHeight) {
            $('header').addClass('fixed')
        }
    })


    //nav-ki li-ler ucun 'data-target-section' adinda attribut yaratmaq ve nomrelemek, eyni zamanda. Nav-ki li-lere uygun sectionlara 'data-section' attributunu elave etmek ve nomrelemek lazimdir.

    $('[data-target-section]').click(function(e) {
        const targetSection = $(e.target).attr('data-target-section');
        const offsetTop = $(`section[data-section="${targetSection}"]`).offset().top;

        $(window).scrollTo({ top: offsetTop, behavior: 'smooth' });
    })
})