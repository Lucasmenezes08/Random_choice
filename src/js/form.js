const btn_submit = document.getElementById("btn-submit");
const numero_anterior = document.getElementById("number-anterior");
const tentativas = document.getElementById("tentativas-number");



function salvar_numeroUsuario (){
    const form = document.getElementById('form');

    form.addEventListener('submit' , function(event){
        event.preventDefault();
        const numero = document.getElementById('number');
        const numero_usuario = numero.value;
        
        processar_numeroUsuario(numero_usuario);
        numero.value = '';
    })
}

function processar_numeroUsuario (numero){
    localStorage.setItem('number_usuario' , numero);
}



document.addEventListener('DOMContentLoaded' , function (){
    salvar_numeroUsuario();
})






