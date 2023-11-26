
let menu_btn = document.getElementById('hambugerIcon-sp');
let menu_list =$('#headerNav-sp > li');

//ハンバーガーアイコンをクリックした時の動作
menu_btn.addEventListener('click' , function () {
    //ハンバーガーアイコンに「open」クラスがついているか判定
    if($(this).hasClass('open')) {
        $("#humbugerMenu").slideUp();
        $(this).toggleClass('open');
    } else {
        $("#humbugerMenu").slideDown();
        $(this).toggleClass('open');
    }
} );

// $('#headerNav-sp').addEventListener('click', function() {
//     $("#humbugerMenu").slideUp();
//     console.log('test');
// });

$(".spList").on('click', (e) => {
    $("#humbugerMenu").slideUp();
    $(this).toggleClass('open');
});