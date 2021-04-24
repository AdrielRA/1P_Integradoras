/* CONTROLA CARREGAMENTO, pra efeito de desaparecer após um tempo suavemente */

$(document).ready(function(){
	$("#load").delay(5000).fadeOut("slow");
	$("#preloader").delay(6000).fadeOut("slow");
});

/* CONTROLA VIDEOS, que bugavam ao clicar no sair e continuavam rodando... pra fazer isso precisei usar API do YouTube.. perdi um dia só nisso aqui */

$(document).ready(function () {
    $(".sair").click(function() {
        $("iframe").each(function () {
            $(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        });
    });
});

/* Controla botão sair, que bugava, com as informações do fulano abertas, ao clicar pra ir pra outra seção, como a tela SOBRE por exemplo*/
/* O botão fehar ainda ficava na tela.. RESOLVIDO! */

$(document).ready(function () {
    $("#op_inicio").click(function() {
        $(".sair").fadeOut(0);
    })
});

$(document).ready(function () {
    $("#op_historia").click(function() {
        $(".sair").fadeOut(0);
    })
});

$(document).ready(function () {
    $("#op_personalidades").click(function() {
        $(".sair").delay(500).fadeIn();
    })
});

$(document).ready(function () {
    $("#op_sobre").click(function() {
        $(".sair").fadeOut(0);
    })
});