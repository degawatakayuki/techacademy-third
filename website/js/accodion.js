// アコーディオンのタイトルがクリックされたら
$('.accordion-title').on('click', (e) => {
// hrefにページ遷移しない
    e.preventDefault();

    // 同じsection内の.accordion-contentを選択
    const content = $(e.target)
        .closest('.accordion-parent')
        .find('.accordion-content');

    if(content.hasClass('open')) {
        content.slideUp();
        content.removeClass('open');
        $(e.target).removeClass('open');
    } else {
        content.css('display', 'none');
        content.slideDown();
        content.addClass('open');
        $(e.target).addClass('open');
    }

    if($(e.target).hasClass('faq')) {
        $(".faq-content").css('display', 'none');
    }
});