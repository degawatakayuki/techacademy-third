const swiper = new Swiper('.c-swiper', {
  loop: true,
  centeredSlides: true,
  spaceBetween: 50,
  slidesPerView: 1,

  breakpoints: {
    // スライドの表示枚数：768px以上の場合
    768: {
      slidesPerView: 3,
    }
  },

  pagination: {
    el: '.swiper-pagination', //ページネーション要素
    type: 'fraction', //ページネーションの種類
    clickable: true, //クリックに反応させる
    formatFractionCurrent: function (number) {
      if (number < 10) {
          return '0' + number;
      } else {
          return number;
      }
    },
    formatFractionTotal: function (number) {
      if (number < 10) {
          return '0' + number;
      } else {
          return number;
      }
    }
  },

  //ナビゲーションボタン（矢印）表示の設定
  navigation: {
    nextEl: '.swiper-button-next', //「次へボタン」要素の指定
    prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
  },
  initialSlide: 0, // 1枚目スライドを「0」、2枚目スライドを「1」として指定
  speed: 1000, // スライドアニメーション速度（ミリ秒） 1000 = 1秒
  effect: 'slide', // スライドの動きエフェクト指定
});