// Abre e fecha o menu
$("#toggle").click(function () {
  $(this).toggleClass("active");
  $("#overlay").toggleClass("open");
  $("html").toggleClass("travascroll");
});

// Abre e fecha o menu
$(".menu-legenda").click(function () {
  $("#toggle").toggleClass("active");
  $("#overlay").toggleClass("open");
  $("html").toggleClass("travascroll");
  $("body").toggleClass("travascroll");
});

$("#li-categoria-poltronas").click(function () {
  $(".selecao-categoria").removeClass("ativo");
  $(".selecao-categoria-poltronas").addClass("ativo");
});
$("#li-categoria-cadeiras").click(function () {
  $(".selecao-categoria").removeClass("ativo");
  $(".selecao-categoria-cadeiras").addClass("ativo");
});
$("#li-categoria-banquetas").click(function () {
  $(".selecao-categoria").removeClass("ativo");
  $(".selecao-categoria-banquetas").addClass("ativo");
});
$("#li-categoria-office").click(function () {
  $(".selecao-categoria").removeClass("ativo");
  $(".selecao-categoria-office").addClass("ativo");
});
$("#li-categoria-mesas").click(function () {
  $(".selecao-categoria").removeClass("ativo");
  $(".selecao-categoria-mesas").addClass("ativo");
});
$("#li-categoria-complementos").click(function () {
  $(".selecao-categoria").removeClass("ativo");
  $(".selecao-categoria-complementos").addClass("ativo");
});

$(window).on("load", function () {
  var selected = $(
    "body#produtos-page section#conteudo-sobre-page .filtros ul.categorias-produtos li a.active"
  ).html();
  $("body#produtos-page .titulo-interno h1").html(selected);
  if (
    !$(
      "body#produtos-page section#conteudo-sobre-page .filtros ul.categorias-produtos li a"
    ).hasClass("active")
  ) {
    $("body#produtos-page .titulo-interno").remove();
    $("body#produtos-page section#conteudo-sobre-page").css(
      "padding-top",
      "90px"
    );
  }
});

$(window).on("load", function () {
  $(".loader").fadeOut("slow");

  $(window).scroll(function () {
    var theta = $(window).scrollTop() / 7;
    $("#ball").css({ transform: "rotate(" + theta + "deg)" });
  });

  if ($(window).width() >= 1200 && $(window).width() < 1500) {
    $("#categorias-slider .carousel-indicators")
      .parent()
      .addClass("col-md-3 offset-md-1");
    $("#categorias-slider .carousel-indicators")
      .parent()
      .removeClass("col-md-2 offset-md-2");
  }

  if ($(window).width() >= 770 && $(window).width() < 1200) {
    $(".autor-img").parent().removeClass("offset-md-3 col-md-3");
    $(".autor-img").parent().addClass("offset-md-1 col-md-5");
    $(".autor-profissao").parent().removeClass("col-md-4");
    $(".autor-profissao").parent().addClass("col-md-5");
    $(".img-sobre-4").parent().removeClass("offset-md-2");
    $(".img-sobre-4").parent().addClass("offset-md-1");
    $(".uma-empresa").removeClass("offset-md-3");
    $(".uma-empresa").addClass("offset-md-2");
    $(".uma-empresa").css("padding-left", "40px");
    $(".empresa-unica").removeClass("offset-md-2");
    $(".empresa-unica").addClass("offset-md-1");
    $(".contato-representantes").parent().removeClass("col-md-3 offset-md-1");
    $(".contato-representantes").parent().addClass("col-md-5 offset-md-1");
    $(".formulario-mensagem").parent().removeClass("col-md-4");
    $(".formulario-mensagem").parent().addClass("col-md-5");
    $(".menu-itens").parent().removeClass("col-md-9");
    $(".menu-itens").parent().addClass("col-md-8");
    $(".menu-legenda").parent().removeClass("col-md-1");
    $(".menu-legenda").parent().addClass("col-md-2");
    $(".newsletter-email-input").parent().parent().addClass("col-md-6");
    $(".newsletter-email-input").parent().parent().removeClass("col-md-4");
    $("#newsletter-precontent .container .row .offset-md-2").addClass(
      "offset-md-1"
    );
    $("#newsletter-precontent .container .row .offset-md-2").removeClass(
      "offset-md-2"
    );
    $("#newsletter-precontent .container .row form").css("margin-top", "20px");
    $("#newsletter-precontent .container .row form").css("margin-top", "20px");
    $("#prefooter .container .row .col-md-4").removeClass("offset-md-2");
    $("#prefooter .container .row .col-md-4").addClass("offset-md-1");
    $("#categorias-slider .carousel-indicators").parent().addClass("col-md-3");
    $("#categorias-slider .carousel-indicators")
      .parent()
      .removeClass("col-md-2");
    $("#frase span.aspas").parent().addClass("col-md-10");
    $("#frase span.aspas").parent().addClass("offset-md-1");
    $("#frase span.aspas").parent().removeClass("col-md-8");
    $("#frase span.aspas").parent().removeClass("offset-md-2");
  }
  // $('.alinhamento-admnews').css('max-width','420px');
  // $('.menu-itens').parent().remove();
  if ($(window).width() < 770 && $(window).width() > 480) {
    $(".autor-img").parent().removeClass("offset-md-3 col-md-3 offset-md-1 ");
    $(".autor-img").parent().addClass("col-md-5");
    $(".autor-profissao").parent().removeClass("col-md-4");
    $(".autor-profissao").parent().addClass("col-md-5 offset-md-1");
    $(".img-sobre-4").parent().removeClass("offset-md-2");
    $(".img-sobre-4").parent().css("margin-left", "35px");
    $(".uma-empresa").removeClass("offset-md-3");
    $(".o-design").removeClass("offset-md-2");
    $(".o-design").addClass("offset-md-1");
    $(".estilo-inconfundivel").removeClass("offset-md-1");
    $(".uma-empresa").addClass("offset-md-2");
    $(".uma-empresa").css("padding-left", "40px");
    $(".empresa-unica").removeClass("offset-md-2 col-md-6");
    $(".empresa-unica").addClass("offset-md-1 col-md-8");
    $(".contato-representantes").parent().removeClass("col-md-3 offset-md-1");
    $(".contato-representantes").parent().addClass("col-md-6");
    $(".formulario-mensagem").parent().removeClass("offset-md-2 col-md-4");
    $(".formulario-mensagem").parent().addClass("col-md-6 offset-md-1");
    $(".formulario-contato .text-separator")
      .parent()
      .parent()
      .removeClass("col-md-3");
    $(".formulario-contato .text-separator")
      .parent()
      .parent()
      .addClass("col-md-4");
    $(".produto-fotos").parent().removeClass("offset-md-2");
    $(".produto-fotos").parent().addClass("offset-md-1");
    $(".produto-fixed-section").parent().removeClass("offset-md-1");
    $(".produto-fixed-section").parent().addClass("col-md-6");
    $("banquetas-menu-item").addClass("col-sm-6 row");
    $("poltronas-menu-item").addClass("col-sm-6 row");
    $("cadeiras-menu-item").addClass("col-sm-6 row");
    $("office-menu-item").addClass("col-sm-6 row");
    $("complementos-menu-item").addClass("col-sm-6 row");
    $("mesas-menu-item").addClass("col-sm-6 row");
    $(".produtos-lista-prefooter").removeClass("col-md-10");
    $(".produtos-lista-prefooter").removeClass("offset-md-1");
    $("#newsletter-precontent .container .row .offset-md-2").removeClass(
      "offset-md-2"
    );
    $(".newsletter-email-input")
      .parent()
      .parent()
      .addClass("col-md-8 offset-md-2");
    $(".newsletter-email-input").parent().parent().removeClass("col-md-4");
    $("#newsletter-precontent .container .row .col-md-4").addClass("col-md-6");
    $("#newsletter-precontent .container .row .col-md-4").addClass(
      "offset-md-3"
    );
    $("#newsletter-precontent .container .row .col-md-4").removeClass(
      "col-md-4"
    );
    $("#footer .logo-redes-container").addClass("col-md-8 offset-md-4");
    $("#footer .logo-redes-container").removeClass("col-md-3");
    $("#footer .row-contatos").removeClass("col-md-3");
    $("#footer .row-contatos").addClass("col-md-4");
    $("#prefooter .col-md-4").addClass("offset-md-3 col-md-6");
    $("#prefooter .col-md-4").removeClass("offset-md-2 col-md-4");
    $("#prefooter .prefooter-linhas").parent().addClass("col-md-10");
    $("#categorias-slider .carousel-indicators")
      .parent()
      .addClass("col-md-4 offset-md-1");
    $("#categorias-slider .carousel-indicators")
      .parent()
      .removeClass("col-md-2 offset-md-2");
    $("#categorias-slider .categorias-slider-block").removeClass("col-md-9");
    $("#categorias-slider .categorias-slider-block").addClass("col-md-10");
    $("#banner-home-carousel").parent().removeClass("col-md-10");
    $("#banner-home-carousel").parent().addClass("col-md-12");
  }

  if ($(window).width() < 480) {
    $(".blocos-2").remove();
  }

  if ($(window).width() > 770) {
    if ($(".voce").parent().is("div")) {
      $(".voce").unwrap();
    }
    if ($(window).width() < 770) {
      $(".span-2").attr("data-wow-delay", "1.2s");
      $(".span-3").attr("data-wow-delay", "1.4s");
      $(".span-4").attr("data-wow-delay", "1.6s");
    }
  }
  if ($(".pace").hasClass("pace-active")) {
    $(".pace-progress").css("display", "block");
  }
  $(".pace-inactive").children().css("height", "0px!important");

  $("#pagina-sobre .banner-interno h1").addClass("fadeInDown");
  $("#pagina-sobre .header").addClass("fadeInDown");
  $("#pagina-sobre .text-separator-sobre-1").addClass("fadeInDown");
  $("#pagina-sobre .texto-sobre-1").addClass("fadeInDown");
  $("#pagina-sobre .texto-virado").addClass("fadeIn");

  $("#area-arquiteto-page .header").addClass("fadeInDown");
  $("#area-arquiteto-page .banner-interno").addClass("fadeIn");
  $("#area-arquiteto-page .banner-interno h6").addClass("fadeInDown");
  $("#area-arquiteto-page .banner-interno h1").addClass("fadeInDown");
  $("#area-arquiteto-page .text-separator-arq-1").addClass("fadeInDown");
  $("#area-arquiteto-page .texto-arquitetos-1").addClass("fadeInDown");

  $("#blog-page .header").addClass("fadeInDown");
  $("#blog-page .titulo-interno h1").addClass("fadeInDown");
  $("#blog-page #newsletter-precontent").addClass("fadeInDown");
  $("#blog-page .filtros").addClass("fadeInDown");

  $("#post-page .header").addClass("fadeInDown");
  $("#post-page #post-capa").addClass("fadeInDown");
  $("#post-page .post-titulo").addClass("fadeInDown");

  $("#pagina-blog .conteudo-banner-interno h6").addClass("fadeInLeft");
  $("#pagina-blog .conteudo-banner-interno h1").addClass("fadeInLeft");
  $("#pagina-blog .conteudo-banner-interno h2").addClass("fadeInLeft");
  $(".filtroblog").addClass("fadeInUp");

  $("#produtos-page .header").addClass("fadeInDown");
  $("#produtos-page .titulo-interno h1").addClass("fadeInDown");
  $("#produtos-page .filtros").addClass("fadeInDown");
  $("#pagina-blog .conteudo-banner-interno h2").addClass("fadeInLeft");
  $(".filtroblog").addClass("fadeInUp");

  $("#produto-page .header").addClass("fadeInDown");
  $("#produto-page .breadcrumb").addClass("fadeInDown");
  $("#produto-page .text-separator").addClass("fadeInDown");
  $("#produto-page .img-produto").addClass("fadeInUp");
  $("#produto-page .produto-infos h5").addClass("fadeInDown");
  $("#produto-page .produto-infos h2").addClass("fadeInDown");
  $("#produto-page .produto-infos-parent").addClass("fadeInDown");
  $("#produto-page .produto-descricao").addClass("fadeIn");
  $("#produto-page .produto-dimensoes").addClass("fadeInDown");

  $("#contato-page .header").addClass("fadeInDown");
  $("#contato-page .banner-interno h1").addClass("fadeInDown");
  $("#contato-page .banner-interno .text-separator").addClass("fadeInDown");
  $("#contato-page .banner-interno h4").addClass("fadeInDown");
  $("#contato-page .contato-representantes").addClass("fadeInDown");
  $("#contato-page .resultado-select").addClass("fadeInDown");
  $("#contato-page .formulario-contato").addClass("fadeIn");

  $("#home-page .header").addClass("fadeInDown");
  $("#home-page .categorias-banner").addClass("fadeIn");
  $("#home-page .carousel-caption").addClass("fadeInLeft");
  $("#home-page .banner-img-transition").addClass("fadeInRight");
  $("#home-page .carousel-indicators").addClass("fadeInUp");
  $("#home-page .banner-button").addClass("fadeInRight");
});

$(".buscabutton").click(function () {
  event.preventDefault();
  $(".pesquisa").addClass("pesquisaaberta");
});

$(".buscabutton-menu").click(function () {
  event.preventDefault();
  $(".pesquisa").addClass("pesquisaaberta");
  $("#toggle").removeClass("active");
  $("#overlay").removeClass("open");
  $("body").removeClass("travascroll");
});

$(".button-fechar-pesquisa").click(function () {
  $(".pesquisa").removeClass("pesquisaaberta");
});

$(document).keyup(function (e) {
  if (e.keyCode == 27) {
    $("#toggle").removeClass("active");
    $("#overlay").removeClass("open");
    $("body").toggleClass("travascroll");
    $(".pesquisa").removeClass("pesquisaaberta");
    $("#toggle").removeClass("active");
    $("#overlay").removeClass("open");
    $("body").removeClass("travascroll");
  }
});

// Inicializa o banner do topo
// $('#banner-home-carousel').carousel('pause');

// Inicializa o carrossel das categorias
// $('#carousel-categorias').carousel('pause');

/*
 * Replace all SVG images with inline SVG
 */
jQuery("img.svg").each(function () {
  var $img = jQuery(this);
  var imgID = $img.attr("id");
  var imgClass = $img.attr("class");
  var imgURL = $img.attr("src");

  jQuery.get(
    imgURL,
    function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find("svg");

      // Add replaced image's ID to the new SVG
      if (typeof imgID !== "undefined") {
        $svg = $svg.attr("id", imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== "undefined") {
        $svg = $svg.attr("class", imgClass + " replaced-svg");
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr("xmlns:a");

      // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
      if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
        $svg.attr(
          "viewBox",
          "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
        );
      }

      // Replace image with new SVG
      $img.replaceWith($svg);
    },
    "xml"
  );
});

$(".icon-footer-facebook").mouseover(function () {
  $(".texto-footer-facebook").css("opacity", "1");
});
$(".icon-footer-facebook").mouseout(function () {
  $(".texto-footer-facebook").css("opacity", "0");
});

$(".icon-footer-instagram").mouseover(function () {
  $(".texto-footer-instagram").css("opacity", "1");
});
$(".icon-footer-instagram").mouseout(function () {
  $(".texto-footer-instagram").css("opacity", "0");
});

$(".icon-footer-mapa").mouseover(function () {
  $(".texto-footer-mapa").css("opacity", "1");
});
$(".icon-footer-mapa").mouseout(function () {
  $(".texto-footer-mapa").css("opacity", "0");
});

$(".icon-footer-pinterest").mouseover(function () {
  $(".texto-footer-pinterest").css("opacity", "1");
});
$(".icon-footer-pinterest").mouseout(function () {
  $(".texto-footer-pinterest").css("opacity", "0");
});

$(".icon-footer-casoca").mouseover(function () {
  $(".texto-footer-casoca").css("opacity", "1");
});
$(".icon-footer-casoca").mouseout(function () {
  $(".texto-footer-casoca").css("opacity", "0");
});

$(".icon-footer-3d").mouseover(function () {
  $(".texto-footer-3d").css("opacity", "1");
});
$(".icon-footer-3d").mouseout(function () {
  $(".texto-footer-3d").css("opacity", "0");
});

$(".redewarehouse").mouseover(function () {
  $(".warehouselegenda").css("opacity", "1");
});
$(".redewarehouse").mouseout(function () {
  $(".warehouselegenda").css("opacity", "0");
});

$(".redefacebook").mouseover(function () {
  $(".facebooklegenda").css("opacity", "1");
});
$(".redefacebook").mouseout(function () {
  $(".facebooklegenda").css("opacity", "0");
});

$(".redepinterest").mouseover(function () {
  $(".pinterestlegenda").css("opacity", "1");
});
$(".redepinterest").mouseout(function () {
  $(".pinterestlegenda").css("opacity", "0");
});

$(".redecasoca").mouseover(function () {
  $(".casocalegenda").css("opacity", "1");
});
$(".redecasoca").mouseout(function () {
  $(".casocalegenda").css("opacity", "0");
});
