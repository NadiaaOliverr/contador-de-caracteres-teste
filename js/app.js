$('textarea').on('keyup paste', function() {
    setTimeout(function(){
        const conteudoTextarea = $('textarea').val();
        const quantidadeCaracteres = conteudoTextarea.length;
        let quantidadePalavras = conteudoTextarea.split(/[\s]+/).filter(palavra => palavra).length;

        $('.caracteres').text(quantidadeCaracteres);
        $('.palavras').text(quantidadePalavras);
    }, 200);
});