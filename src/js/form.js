const btn_submit = document.getElementById("btn-submit");
const numero_anterior = document.getElementById("number-anterior");
const tentativas = document.getElementById("tentativas-number");
const cor_proximidade = document.getElementById("proximidade-cor");
const numero = document.getElementById('number');
const form = document.getElementById('form');
const resultado = document.getElementById('resultado');
let tentativas_count;
let number_random;


function processar_numeroUsuario (numero){
    localStorage.setItem('number_usuario' , numero);
}

function exibir_numero (){
    const number_retornado = localStorage.getItem('number_usuario');
    return number_retornado;
}

function deletar_numero (numero){
    localStorage.removeItem("number_usuario" , numero);
}
const numero_retornado = exibir_numero();



function iniciarJogo (){
    number_random = random_number();
    salvar_random_number(number_random);
    tentativas_count = 5;
    tentativas.textContent = tentativas_count;
    numero_anterior.textContent = '';
    cor_proximidade.style.backgroundColor = 'gray';
    tentativas.style.color = 'white';
    resultado.textContent = '';
    numero.value = '';
    numero.focus();
}


function processar_tentativa (event){
    event.preventDefault();


    processar_numeroUsuario(numero.value);
    
    const numero_usuario = parseInt(numero.value);



    if (isNaN(numero_usuario) || numero_usuario < 0 || numero_usuario > 99){
        alert ("Digite um numero válido.").
        numero.value = '';
        return;
    }

    if (numero_usuario === number_random){
        iniciarJogo();
        resultado.innerHTML = 'VOCÊ VENCEU!';
        resultado.style.color = 'green';
        deletar_random_number();    
        setTimeout(iniciarJogo,5000);
        return
    }

    tentativas_count --;
    tentativas.textContent = tentativas_count;


    if (tentativas_count === 0){
        iniciarJogo();
        resultado.innerHTML = 'VOCÊ PERDEU!';
        resultado.style.color = 'red';
        deletar_random_number();
        setTimeout(iniciarJogo,5000);
        return
    }

    
    if (Math.abs(number_random - numero_usuario) <= 15){
        cor_proximidade.style.backgroundColor = 'green';
    }

    else if (Math.abs(number_random - numero_usuario) > 15 && Math.abs(number_random - numero_usuario) <= 50){
        cor_proximidade.style.backgroundColor = 'blue';
    }

    else {
        cor_proximidade.style.backgroundColor = 'red';
    }


    if (tentativas){
        tentativas.style.color = 'red';
    }


    numero_anterior.innerHTML = `${numero_retornado}`;
    deletar_numero(numero_retornado);




    numero.value = '';
    

}
   

        



document.addEventListener('DOMContentLoaded', function(){
    iniciarJogo ();
    form.addEventListener('submit',processar_tentativa);
})





