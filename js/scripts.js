/* CONTROLA CARREGAMENTO */

$(document).ready(function(){
	$("#load").delay(5000).fadeOut("slow");
	$("#preloader").delay(6000).fadeOut("slow");
});

/* CONTROLA VIDEOS */

$(document).ready(function () {
    $(".sair").click(function() {
        $("iframe").each(function () {
            $(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        });
    });
});

/* Controla botão sair */

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