$('a[href^="#"]').click(function () {

    var href = $(this).attr('href');
    if ($(href).length) {
      var browserWidth = window.outerWidth;
  
      var fontSize = 10;
      var headerHeight = 7.6 * fontSize + fontSize;
  
      if (browserWidth < 768) {
        fontSize = 10 / 375 * browserWidth;
        headerHeight = 6 * fontSize;
      } else if (browserWidth < 1024) {
        fontSize = browserWidth / 100;
        headerHeight = 7.6 * fontSize + fontSize;
      }
  
      $('body,html').animate({
        scrollTop: $(href).offset().top - headerHeight
      }, 400, 'swing');
      $(".hamburger-nav").slideUp();
      return false;
    }
  });