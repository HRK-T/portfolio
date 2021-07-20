
$(function(){

//スクロールボタンの点滅-----------------------------------------
  setInterval(function(){
      $('.more-scroll i').fadeOut(1250,function(){$(this).fadeIn(1250)});
  },2000);



//スクロールにより現れるヘッダー-----------------------------------
   // スクロール途中から表示したいメニューバーを指定
   var navBox = $(".nav-scroll");

   // メニューバーは初期状態では消しておく
   navBox.hide();

   //ウインドウの幅を変数に格納
   var windowWidth = $(window).width();


   // 表示を開始するスクロール量を設定。元のナビゲーションバーが消えてしばらくしてから（動画の高さ｛100vh｝の300px下から）表示する
   var TargetPos = 300 + $(".movie").height();

  // スクロールされた際に実行
  $(window).scroll(function() {

      // 現在のスクロール位置を取得し変数にする。
      var ScrollPos = $(window).scrollTop();

      if(navBox.width()>1080){
            // 現在のスクロール位置と、ナビゲーション表示開始ラインのスクロール位置を比較
            if( ScrollPos > TargetPos ) {
              // 表示(フェードイン)
              navBox.fadeIn();
              navBox.css("display","flex");
            }else{
              // 非表示(フェードアウト)
              navBox.fadeOut();
            };
      }else{
        navBox.hide();
      }
  });



  $(window).resize(function(){
   if(navBox.width()>1080){
     navBox.css("display","flex");
   }else{
     navBox.hide();
   }
  });




//ドロップダウンメニュー------------------------------------

  var dropdownBox = $(".dropdown");

  dropdownBox.hide();

  //scroll-menuクラス直下のliをマウスオーバーした時
  $('.scroll-menu li').hover(function(){
    //ドロップダウンリストを表示
    $(".dropdown:not(:animated)", this).slideDown();
    //hoverが外れたらドロップダウン解除
    }, function(){
    $(".dropdown",this).slideUp();
    
  });





//ハンバーガーメニュー---------------------------------------

  WindowHeight = $(window).height();
  $('.nav-toggle-area').css('height', WindowHeight); //メニューをwindowの高さいっぱいにする
   
  $(function(){
      $('.nav-toggle').click(function(){ //クリックしたら
    if($('.nav-toggle-area').is(":animated")){
      return false;
    }else{
      $('.nav-toggle-area').animate({width:'toggle'}); //animateで表示・非表示
      $(this).toggleClass('active'); //toggleでクラス追加・削除
      return false;
    }
    });
  });
 
//別領域をクリックでメニューを閉じる
$(document).click(function(event) {
  if (!$(event.target).closest('.nav-toggle-area').length) {
    $('.nav-toggle').removeClass('active');
    $('.nav-toggle-area').hide();
  }
});

//トグルメニュー
  $(".toggle-switch1").click(function(){
    $(".toggle1").slideToggle(200);
    $(".toggle-arrow-shop").toggleClass("open");
  });

  $(".toggle-switch2").click(function(){
    $(".toggle2").slideToggle(200);
    $(".toggle-arrow-recipe").toggleClass("open");

  });

  $(".toggle-switch3").click(function(){
    $(".toggle3").slideToggle(200);
    $(".toggle-arrow-sightseeing").toggleClass("open");
  });

  $(".toggle-switch4").click(function(){
    $(".toggle4").slideToggle(200);
    $(".toggle-arrow-infomation").toggleClass("open");
  });







//観光情報の画像キャプションの表示------------------------------------------
  // li要素の最後にdiv要素を追加
  $(".gallery-content").append("<div></div>");

  // div要素内に画像のキャプションを追加
  $(".gallery-content div").each(function(){
    $(this).html("<p>" + $(this).parent().children("img").attr("alt") + "</p>");
  });

  // li要素をマウスオーバー
  $(".gallery-content").hover(function(){
    // キャプション部分の表示：フェードイン
    $(this).children("div").stop().fadeIn(300);

    // キャプションのテキスト位置：10pxから0pxへ移動
    $(this).children("div").children("p").stop().animate({"top" : 0}, 300);
  }, function(){
    // キャプション部分の非表示：フェードアウト
    $(this).children("div").stop().fadeOut(300);

    // キャプションのテキスト位置：0pxから10pxへ移動
    $(this).children("div").children("p").stop().animate({"top":"10px"}, 300);
  });






  
//フェードイン-------------------------------------

    //上へ
    const targets_top = $('.slidein-top');
    if(!targets_top.length) return;

    $(window).scroll(function () {
        const slideBorder_top = $(this).scrollTop() + ($(this).outerHeight() * 0.8);
        targets_top.each(function() {
            if(slideBorder_top > $(this).offset().top) {
                $(this).addClass('js_active-top');
            }
        });
    });


    //右へ
    const targets_right = $('.slidein-right');
    if(!targets_right.length) return;

    $(window).scroll(function () {
        const slideBorder_right = $(this).scrollTop() + ($(this).outerHeight() * 0.9);
        targets_right.each(function() {
            if(slideBorder_right > $(this).offset().top) {
                $(this).addClass('js_active-right');
            }
        });
    });


    //左へ
    const targets_left = $('.slidein-left');
    if(!targets_left.length) return;

    $(window).scroll(function () {
        const slideBorder_left = $(this).scrollTop() + ($(this).outerHeight() * 0.8);
        targets_left.each(function() {
            if(slideBorder_left > $(this).offset().top) {
                $(this).addClass('js_active-left');
            }
        });
    });



});