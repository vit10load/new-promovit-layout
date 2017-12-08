var close = document.getElementsByClassName("closebtn");// pega elemento com a classe closebtn
var i;
var produtoExcluido = true;// caso produto excluido imprime alert su
var produtoNaoExcluido = false;
var testdiv = null;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){// fechar no click a div na posição i
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function(){ div.style.display = "none"; }, 0);
    }
}
function mostra(verdade){
    if(produtoExcluido == verdade){
        testdiv = document.getElementById("alertando");setTimeout(function() { testdiv.style.display='block'; }, 0);// tempo de zero segundos
    }else if(produtoNaoExcluido==verdade){
        testdiv = document.getElementById("alertWar");setTimeout(function() { testdiv.style.display='block'; }, 0);// tempo de zero segundos
    }
}