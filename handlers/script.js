var calcular  = document.getElementById("botao");
    
function imc(){
    var nome      = document.getElementById("nome").value;
    var peso      = document.getElementById("peso").value;
    var altura    = document.getElementById("altura").value;
    var resultado = document.getElementById("resultado");
    
    if (nome !== "" && peso !== "" && altura !== ""){
        valorImc = (peso / (altura * altura)).toFixed(1);
        
        var classificacao = "";
        
        if(valorImc < 18.5){
            classificacao = "de acordo com a Organização Mundial da Saúde, seu IMC está abaixo do recomendado para a sua altura!";
        }else if(valorImc < 25){
            classificacao = "de acordo com a Organização Mundial da Saúde, seu IMC é considerado normal para a sua altura!";
        }else if(valorImc < 30){
            classificacao = "de acordo com a Organização Mundial da Saúde, seu IMC está levemente acima do recomendado para a sua altura!";
        }else if(valorImc < 35){
            classificacao = "de acordo com a Organização Mundial da Saúde, seu IMC está om obesidade grau I!";
        }else if(valorImc < 40){
            classificacao = "de acordo com a Organização Mundial da Saúde, seu IMC está om obesidade grau II!";
        }else{
            classificacao = "de acordo com a Organização Mundial da Saúde, seu IMC está om obesidade grau III!";
        }
        
        resultado.textContent = `${nome}, o seu IMC é ${valorImc}, ${classificacao}`;
        
    }else{
        resultado.textContent = "Preencha todos os campos!!!";
    }
};
calcular.addEventListener('click', imc);
