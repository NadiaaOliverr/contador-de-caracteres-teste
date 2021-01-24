$('textarea').on('keyup paste', function() {
    setTimeout(function(){
        const conteudoTextarea = $('textarea').val();
        const quantidadeCaracteres = conteudoTextarea.length;
        const quantidadePalavras = conteudoTextarea.split(' ').length;

        $('.caracteres').text(quantidadeCaracteres);
        $('.palavras').text(quantidadePalavras);
    }, 200);
});