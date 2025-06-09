function random_number (){
    const maximo = 100;
    const random = Math.floor(Math.random() * maximo);

    return random;
}

function salvar_random_number (number_random){
    localStorage.setItem('randomNumber' , JSON.stringify(number_random));
}


function deletar_random_number (){
    localStorage.removeItem('randomNumber');
}






