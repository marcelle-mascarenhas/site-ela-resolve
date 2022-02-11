function abrirModal(mn){
    let modal = document.getElementById(mn);
    
    if(typeof modal == 'underfined' || modal === null)
        return;

        modal.style.display = 'Block';
}

function fecharModal(mn){
    let modal = document.getElementById(mn);
    
    if(typeof modal == 'underfined' || modal === null)
        return;

        modal.style.display = 'none';

}


function enviarMensagem() {

    var telefone = document.getElementById("campoTelefone").value;
    var msg = document.getElementById("campoMensagem").value;
    msg = window.encodeURIComponent(msg);

    window.open("https://api.whatsapp.com/send?phone=5581997445493" + "&text=" + msg, "_blank");
}