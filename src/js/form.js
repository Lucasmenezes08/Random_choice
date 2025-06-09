const btn_submit = document.getElementById("btn-submit");
const numero_anterior = document.getElementById("number-anterior");
const tentativas = document.getElementById("tentativas-number");
const cor_proximidade = document.getElementById("proximidade-cor");
const numero = document.getElementById('number');
const form = document.getElementById('form');
let tentativas_count;
let number_random;


function processar_numeroUsuario (numero){
    localStorage.setItem('number_usuario' , numero);
}

function exibir_numero (){
    const number_retornado = localStorage.getItem('number_usuario');
    return number_retornado;
}
const numero_retornado = exibir_numero();



function iniciarJogo (){
    number_random = random_number();
    salvar_random_number(number_random);
    tentativas_count = 5;
    tentativas.textContent = tentativas_count;
    numero_anterior.textContent = '';
    cor_proximidade.style.backgroundColor = 'gray';
    numero.value = '';
    numero.focus();


}


function processar_tentativa (event){
    event.preventDefault();
    
    const numero_usuario = parseInt(numero.value);

    if (numero_usuario < 0 || numero_usuario > 99){
        numero.value = '';
        return;
    }



    if (numero_usuario === number_random){
        iniciarJogo();
        deletar_random_number();
    }

    else if (tentativas_count === 0){
        iniciarJogo();
        deletar_random_number();
    }

    else {
        tentativas_count --;
        tentativas.textContent = tentativas_count;
        if (Math.abs(number_random - numero_usuario) <= 15){
            cor_proximidade.style.backgroundColor = 'green';
        }

        else if (Math.abs(number_random - numero_usuario) > 15 && Math.abs(number_random - numero_usuario) <= 50){
            cor_proximidade.style.backgroundColor = 'blue';
        }

        else {
            cor_proximidade.style.backgroundColor = 'red';
        }
    }
    numero.value = '';
}
        



document.addEventListener('DOMContentLoaded', function(){
    iniciarJogo ();
    form.addEventListener('submit',processar_tentativa);
})





